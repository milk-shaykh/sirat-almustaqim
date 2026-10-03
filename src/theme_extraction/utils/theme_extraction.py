from src.semantic_analysis.utils import text_prep, wsd, vtk
from src.theme_extraction.data.sort_tuples import sort_tuples

def cluster_vectors(tokens: list[tuple[str, str, list[float]]], COPROX_MIN: float) -> tuple[ list[tuple[str, str, list[float]]], list[list[int]] ]:
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
	ln = 0
	flag = False
	for token in tokens:
		if flag:
			for i in range(ln):
				if vtk.coprox(token[-1], centroids[i]) > COPROX_MIN:
					clusters[i].append(token[i])
					centroids[i] = vtk.sum_vectors([Token[-1] for Token in clusters[i]])
				else:
					clusters.append([token[i]])
					centroids.append(token[i][-1])
					ln += 1
		else:
			centroids.append(token)
			centroids.append(token[-1])
			ln += 1
			flag = True
	return clusters, centroids



def find_closest_match(centroid: list[float], cluster: list[tuple[str, str, list[float]]]):
	proxes = []
	for i in range(len(cluster)):
		proxes.append((vtk.coprox(cluster[i], centroid), i))
	sort_tuples(proxes)
	return cluster[proxes[0][1]][0]



def extract_themes(text: str, themes: list[tuple[str, list[float]]], COPROX_MIN: float) -> list[str]:
	"""
	get the text tokenise into sentances
	vectorise each sentance turn into (word, tag, vector):
		word_tokenise each sentance
		use wsd to get the vectors fixed up
	clusterise vectors
	get the centroids for each + against known themes and their vectors, give highest n themes above COPROX_MIN
	return the top themes
	"""

	extracted_themes = []

	if COPROX_MIN is None:
		COPROX_MIN = 0.5

	sentances = text_prep.sent_tokenize(text)
	words = [text_prep.pos_tokenise_sentance(sentance) for sentance in sentances]
	vectors = wsd.wsd(text)

	# make vectors into tuple form:
	tuples = []
	for s in range(len(words)):
		sentance_tuples = []
		for w in range(len(words[w])):
			sentance_tuples.append((*w, vectors[s][w]))
		tuples.append(sentance_tuples)

	clusters, centroids = cluster_vectors(tuples)
		# get each theme and compare against each centroid
		# if above COPROX_MIN:
		# 	return the themes put into list of the themes
		# else:
		# 	do nothing
		# repeat for each centroid
		# return found themes 

	for c in range(len(centroids)):
		extend_themes = []
		for t in range(len(themes)):
			if vtk.coprox(themes[t], centroids[c]) > COPROX_MIN:
				extend_themes.append(themes[t][0])
			if not extend_themes:
				extend_themes.append(find_closest_match(centroids[c], clusters[c]))
		if extend_themes:
			extracted_themes.extend(extend_themes)

	return extracted_themes