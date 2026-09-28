import text_prep, vtk
from ..data import context_sql as csql

def contextualise_semcor(word: tuple[str, str], sense_vector: list[int]) -> list[int]: # currently half pseudo half still real so yh
	tag = word[1]
	if tag not in ("a", "v", "n", "s", "r"):
		tag = text_prep.get_wn_tag(word[1])
	lemma = text_prep.lemmatise((word[0], tag))
	key = f"{lemma[0]}.{lemma[1]}"
	vectors = csql.find_vectors_semcor(key) # make it so that returns a vector or none then validate
	if vectors:
		proxs = []
		for vector in vectors:
			proxs.append(vtk.coprox(vector, sense_vector))
		proxs.sort()
		return proxs[0]


def wsd(text: str) -> list[list[list[float]]]:
	text_vectors = []
	sentances = text_prep.sent_tokenize(text)
	tokenised_sentances = [text_prep.word_tokenize(sentance) for sentance in sentances]
	for sentance in tokenised_sentances:
		joined_sentance = " ".join(sentance)
		tagged_words = text_prep.pos_tokenise(joined_sentance)
		vectors = vtk.word_vectorise(joined_sentance)
		for i in range(len(vectors)):
			# sentance_vector = vtk.sum_vectors(vectors)
			context_vector = contextualise_semcor(tagged_words[i], vectors[i])
			vectors[i] = context_vector
		text_vectors.append(vectors)
	return text_vectors

def big_boss_wsd(text: str) -> list[list[tuple[str, str, list[float]]]]:
	# text prep into tokens of each word and their pos tag
	# for each sentance vectorise the whole sentance
	# for each word use iterative improvement discarding stopwords and punctuation
	# send each vectorised sentance into a list of triple tuples with 1 st element as word, 2 nd as pos tag and 3 rd as vector
	# give back list of lists of tuples each inner list is a sentance outer list is of sentances

	sentance_tokens = text_prep.sent_tokenize(text)
	sentance_vectors = []
	tokens = [text_prep.pos_tag(sentance) for sentance in sentance_tokens]
	for i in range(len(sentance_tokens)):
		vectors = vtk.word_vectorise(tokens[i])
		word_vectors = []
		for j in range(len(vectors)):
			key = tokens[i][j]
			if key in text_prep.stopwords_eng:
				continue
			context_vectors = csql.find_vectors(key)
			proxs = []
			for k in range(len(context_vectors)):
				proxs.append(vtk.coprox(vectors[j], context_vectors[k]))
			proxs.sort()
			word_vectors.append(proxs[0])
		sentance_tokens.append(word_vectors)
	return sentance_vectors


