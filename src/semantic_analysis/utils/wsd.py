from src.semantic_analysis.utils import vtk, text_prep
from src.semantic_analysis.data import context_sql as csql

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

def wsd(text: str) -> list[list[list[int]]]:
	sentance_tokens = text_prep.sent_tokenize(text)
	text_tokens = [text_prep.pos_tag(sentance) for sentance in sentance_tokens]
	context_tokens = []
	for sentance in text_tokens:
		context_sentance = []
		vectors = vtk.word_vectorise_tokens(sentance)
		indexes = []
		for i in range(len(vectors)):
			if not text_prep.is_stopword(sentance[i]):
				indexes.append(i)
		for i in range(len(vectors)):
			if i in indexes:
				sense_vector = vtk.sum_vectors(vectors)
				context_vectors = csql.load_vectors_from_token(sentance[index])
				if context_vectors:
					biggest = -2
					index = -1
					for i in range(len(context_vectors)):
						prox = vtk.coprox(context_vectors[i], sense_vector)
						if prox > biggest:
							biggest = prox
							index = i
					vectors[index] = prox
					context_sentance.append((sentance[index][0], sentance[index][1], vectors[index]))
			else:
				context_sentance.append(sentance[index])
		context_tokens.append(context_sentance)
	return context_tokens