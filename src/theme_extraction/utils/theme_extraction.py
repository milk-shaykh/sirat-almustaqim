from ....src.semantic_analysis.utils import text_prep, wsd, vtk

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

def extract_themes(text: str) -> list[str]:
	"""
	get the text tokenise into sentances
	vectorise each sentance turn into (word, tag, vector):
		word_tokenise each sentance
		use wsd to get the vectors fixed up
	clusterise vectors
	get the centroids for each + against known themes and their vectors, give highest n themes above COPROX_MIN
	return the top themes
	"""
	sentances = text_prep.sent_tokenize(text)
	words = [text_prep.pos_tokenise_sentance(sentance) for sentance in sentances]
	vectors = wsd.wsd(text)

	for s in range(len(sentances)):
		for w in range(words):


	clusters, centroids = cluster_vectors()
	