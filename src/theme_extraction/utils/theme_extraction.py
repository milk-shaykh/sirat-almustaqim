from src.semantic_analysis.utils import vtk# , text_prep, wsd
# from src.theme_extraction.data.sort_tuples import sort_tuples

def cluster_vectors(tokens: list[tuple[str, str, list[float]]], COPROX_MIN: float) -> tuple[ list[tuple[str, str, list[float]]], list[list[float]] ]:
	"""
	have a list of vectors in tuples with words (+ tags? normalise to have pipeline with text and keep tags seperate) 
	for each vector:
		check in each cluster (if exists) if prox to centriod > x
		if so then add to cluster
		if not then make new cluster
		each time new cluster made redo centriod (vtk.sum_vectors)
		return lists of cluster vectors and words
	"""
	clusters = []
	centroids = []
	for t in range(len(tokens)):
		if not centroids:
			centroids.append(tokens[t][-1])
			clusters.append([tokens[t]])
			print(clusters)
			print("\n")
			print(centroids)
			print("\n")
			continue
		for i in range(len(centroids)):
			print(clusters)
			print("\n")
			print(centroids)
			print("\n")
			if vtk.coprox(centroids[i], tokens[t][-1]) >= COPROX_MIN:
				clusters[i].append(tokens[t])
				centroids[i] = vtk.sum_vectors([token[-1] for token in clusters[i]])
				print(clusters)
				print("\n")
				print(centroids)
				print("\n")
			else:
				clusters.append([tokens[t]])
				centroids.append(tokens[t][-1])
				print(clusters)
				print("\n")
				print(centroids)
				print("\n")
	return clusters, centroids



	# clusters = []
	# centroids = []
	# ln = 0
	# for token in tokens:
	# 	clusters.append(token)
	# 	centroids.append(token[-1])
	# 	print(centroids)
	# 	print(clusters)
	# 	ln += 1
	# 	for i in range(ln):
	# 		print(token)
	# 		print(token[-1])
	# 		if vtk.coprox(token[-1], centroids[i]) > COPROX_MIN:
	# 			clusters[i].append(token[i])
	# 			centroids[i] = vtk.sum_vectors([Token[-1] for Token in clusters[i]])
	# 		else:
	# 			clusters.append([token[i]])
	# 			centroids.append(token[i][-1])
	# 			ln += 1
	# 			# fix clusters
	# return clusters, centroids


# def find_closest_match(centroid: list[float], cluster: list[tuple[str, str, list[float]]]):
# 	proxes = []
# 	for i in range(len(cluster)):
# 		proxes.append((vtk.coprox(cluster[i], centroid), i))
# 	sort_tuples(proxes)
# 	return cluster[proxes[0][1]][0]



# def extract_themes(text: str, themes: list[tuple[str, list[float]]], COPROX_MIN: float) -> list[str]:
# 	"""
# 	get the text tokenise into sentances
# 	vectorise each sentance turn into (word, tag, vector):
# 		word_tokenise each sentance
# 		use wsd to get the vectors fixed up
# 	clusterise vectors
# 	get the centroids for each + against known themes and their vectors, give highest n themes above COPROX_MIN
# 	return the top themes
# 	"""

# 	extracted_themes = []

# 	if COPROX_MIN is None:
# 		COPROX_MIN = 0.5

# 	sentances = text_prep.sent_tokenize(text)
# 	words = [text_prep.pos_tokenise_sentance(sentance) for sentance in sentances]
# 	vectors = wsd.wsd(text)

# 	# make vectors into tuple form:
# 	tuples = []
# 	for s in range(len(words)):
# 		sentance_tuples = []
# 		for w in range(len(words[w])):
# 			sentance_tuples.append((*w, vectors[s][w]))
# 		tuples.append(sentance_tuples)

# 	clusters, centroids = cluster_vectors(tuples)
# 		# get each theme and compare against each centroid
# 		# if above COPROX_MIN:
# 		# 	return the themes put into list of the themes
# 		# else:
# 		# 	do nothing
# 		# repeat for each centroid
# 		# return found themes 

# 	for c in range(len(centroids)):
# 		extend_themes = []
# 		for t in range(len(themes)):
# 			if vtk.coprox(themes[t], centroids[c]) > COPROX_MIN:
# 				extend_themes.append(themes[t][0])
# 			if not extend_themes:
# 				extend_themes.append(find_closest_match(centroids[c], clusters[c]))
# 		if extend_themes:
# 			extracted_themes.extend(extend_themes)

# 	return extracted_themes


if __name__ == "__main__":
	# Test 1: "The quick brown fox jumps" - all semantically related
	test1_tokens = [
		("the", "DET", [0.001, 0.002, 0.001, -0.001]),
		("quick", "ADJ", [0.412, 0.598, 0.301, 0.489]),
		("brown", "ADJ", [0.398, 0.612, 0.295, 0.502]),
		("fox", "NOUN", [0.487, 0.521, 0.413, 0.398]),
		("jumps", "VERB", [0.521, 0.489, 0.398, 0.412])
	]
	print("Test 1 - Semantically related sentence:", cluster_vectors(test1_tokens, 0.75))

	# Test 2: "The cat sat on the mat" - common vocabulary, low semantic similarity
	test2_tokens = [
		("the", "DET", [0.001, 0.002, 0.001, -0.001]),
		("cat", "NOUN", [0.521, 0.398, 0.489, 0.412]),
		("sat", "VERB", [0.312, 0.489, 0.401, 0.521]),
		("on", "ADP", [0.098, 0.102, 0.101, 0.099]),
		("the", "DET", [0.001, 0.002, 0.001, -0.001]),
		("mat", "NOUN", [0.487, 0.412, 0.521, 0.398])
	]
	print("Test 2 - Common sentence:", cluster_vectors(test2_tokens, 0.70))

	# Test 3: Synonyms - "happy", "joyful", "pleased", "delighted"
	test3_tokens = [
		("happy", "ADJ", [0.712, 0.598, 0.521, 0.489]),
		("joyful", "ADJ", [0.698, 0.612, 0.534, 0.501]),
		("pleased", "ADJ", [0.701, 0.605, 0.529, 0.495]),
		("delighted", "ADJ", [0.715, 0.601, 0.518, 0.492])
	]
	print("Test 3 - Synonym cluster:", cluster_vectors(test3_tokens, 0.85))

	# Test 4: Antonyms - "hot" vs "cold" mixed in
	test4_tokens = [
		("hot", "ADJ", [0.812, 0.298, 0.521, 0.189]),
		("warm", "ADJ", [0.798, 0.312, 0.534, 0.201]),
		("cold", "ADJ", [0.189, 0.812, 0.298, 0.521]),
		("chilly", "ADJ", [0.201, 0.798, 0.312, 0.534]),
		("freezing", "ADJ", [0.178, 0.821, 0.289, 0.512])
	]
	print("Test 4 - Antonym groups:", cluster_vectors(test4_tokens, 0.80))

	# Test 5: Completely unrelated words
	test5_tokens = [
		("elephant", "NOUN", [0.621, 0.498, 0.389, 0.512]),
		("telescope", "NOUN", [0.189, 0.721, 0.598, 0.312]),
		("algorithm", "NOUN", [0.512, 0.189, 0.721, 0.598]),
		("symphony", "NOUN", [0.798, 0.312, 0.189, 0.621])
	]
	print("Test 5 - Unrelated words:", cluster_vectors(test5_tokens, 0.70))

	# Test 6: Boundary case - vectors at exact threshold
	test6_tokens = [
		("word1", "NOUN", [0.500, 0.500, 0.500, 0.500]),
		("word2", "NOUN", [0.501, 0.500, 0.500, 0.500]),
		("word3", "NOUN", [0.600, 0.600, 0.600, 0.600])
	]
	print("Test 6 - Exact threshold boundary:", cluster_vectors(test6_tokens, 0.75))

	# Test 7: Semantic field - animals
	test7_tokens = [
		("dog", "NOUN", [0.612, 0.521, 0.398, 0.489]),
		("puppy", "NOUN", [0.621, 0.512, 0.401, 0.495]),
		("cat", "NOUN", [0.521, 0.612, 0.412, 0.498]),
		("kitten", "NOUN", [0.529, 0.601, 0.415, 0.501]),
		("bird", "NOUN", [0.498, 0.389, 0.612, 0.521])
	]
	print("Test 7 - Semantic field (animals):", cluster_vectors(test7_tokens, 0.75))

	# Test 8: Action verbs closely related
	test8_tokens = [
		("run", "VERB", [0.721, 0.312, 0.598, 0.189]),
		("sprint", "VERB", [0.712, 0.321, 0.589, 0.198]),
		("jog", "VERB", [0.698, 0.334, 0.612, 0.201]),
		("walk", "VERB", [0.512, 0.489, 0.612, 0.398]),
		("stroll", "VERB", [0.521, 0.478, 0.601, 0.401])
	]
	print("Test 8 - Action verbs:", cluster_vectors(test8_tokens, 0.80))

	# Test 9: Outlier among cluster - one unrelated word
	test9_tokens = [
		("beautiful", "ADJ", [0.812, 0.598, 0.521, 0.489]),
		("gorgeous", "ADJ", [0.798, 0.612, 0.534, 0.501]),
		("stunning", "ADJ", [0.821, 0.589, 0.512, 0.495]),
		("ugly", "ADJ", [0.189, 0.298, 0.412, 0.501])
	]
	print("Test 9 - Outlier detection:", cluster_vectors(test9_tokens, 0.80))

	# Test 10: Numbers and quantities
	test10_tokens = [
		("one", "NUM", [0.189, 0.521, 0.612, 0.398]),
		("single", "ADJ", [0.201, 0.534, 0.601, 0.401]),
		("two", "NUM", [0.201, 0.512, 0.621, 0.389]),
		("couple", "NOUN", [0.189, 0.521, 0.634, 0.378]),
		("many", "ADJ", [0.612, 0.189, 0.398, 0.521])
	]
	print("Test 10 - Numbers and quantities:", cluster_vectors(test10_tokens, 0.75))

	# Test 11: Color spectrum - should group into warm/cool
	test11_tokens = [
		("red", "NOUN", [0.821, 0.189, 0.398, 0.512]),
		("orange", "NOUN", [0.812, 0.234, 0.401, 0.521]),
		("yellow", "NOUN", [0.798, 0.289, 0.412, 0.534]),
		("blue", "NOUN", [0.198, 0.821, 0.512, 0.389]),
		("purple", "NOUN", [0.312, 0.689, 0.521, 0.398])
	]
	print("Test 11 - Color spectrum:", cluster_vectors(test11_tokens, 0.75))

	# Test 12: Nearly identical vectors (noise/stemming variations)
	test12_tokens = [
		("running", "VERB", [0.721, 0.312, 0.598, 0.189]),
		("running", "VERB", [0.721, 0.312, 0.598, 0.189]),
		("runs", "VERB", [0.722, 0.311, 0.597, 0.190]),
		("runner", "NOUN", [0.719, 0.313, 0.599, 0.188])
	]
	print("Test 12 - Stemming variations:", cluster_vectors(test12_tokens, 0.95))

	# Test 13: Technology domain
	test13_tokens = [
		("computer", "NOUN", [0.612, 0.721, 0.398, 0.489]),
		("software", "NOUN", [0.621, 0.712, 0.401, 0.495]),
		("algorithm", "NOUN", [0.598, 0.734, 0.412, 0.498]),
		("database", "NOUN", [0.634, 0.698, 0.389, 0.521]),
		("kitchen", "NOUN", [0.189, 0.234, 0.821, 0.612])
	]
	print("Test 13 - Technology domain:", cluster_vectors(test13_tokens, 0.80))

	# Test 14: Boundary - very low threshold (all in one cluster)
	test14_tokens = [
		("apple", "NOUN", [0.312, 0.598, 0.489, 0.721]),
		("zebra", "NOUN", [0.821, 0.189, 0.512, 0.398]),
		("galaxy", "NOUN", [0.189, 0.812, 0.634, 0.234]),
		("stone", "NOUN", [0.598, 0.312, 0.189, 0.821])
	]
	print("Test 14 - Very low threshold:", cluster_vectors(test14_tokens, 0.10))

	# Test 15: Emotion/sentiment words
	test15_tokens = [
		("love", "VERB", [0.812, 0.634, 0.521, 0.398]),
		("adore", "VERB", [0.821, 0.621, 0.534, 0.401]),
		("cherish", "VERB", [0.798, 0.644, 0.512, 0.412]),
		("hate", "VERB", [0.189, 0.312, 0.498, 0.721]),
		("despise", "VERB", [0.178, 0.334, 0.512, 0.734]),
		("detest", "VERB", [0.201, 0.289, 0.521, 0.712])
	]
	print("Test 15 - Sentiment words:", cluster_vectors(test15_tokens, 0.85))