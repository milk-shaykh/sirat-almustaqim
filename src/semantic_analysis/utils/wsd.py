import text_prep, vtk
from ..data import context_sql as csql

def contextualise_semcor(word: tuple[str, str], sense_vector: list[int]) -> list[int]:
	tag = word[1]
	if tag not in ("a", "v", "n", "s", "r"):
		tag = text_prep.get_wn_tag(word[1])
	lemma = text_prep.lemmatise((word[0], tag))
	key = f"{lemma[0]}.{lemma[1]}"
	vectors = csql.find_vectors_semcor(key)
	if vectors:
		proxs = []
		for vector in vectors:
			proxs.append(vtk.coprox(vector, sense_vector))
		proxs.sort()
		return proxs[0]


def wsd(text: str) -> list[list[list[int]]]:
	text_vectors = []
	sentances = text_prep.sent_tokenise(text)
	tokenised_sentances = [text_prep.word_tokenise(sentance) for sentance in sentances]
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