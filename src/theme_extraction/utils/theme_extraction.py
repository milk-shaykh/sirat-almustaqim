from ....src.semantic_analysis.utils import text_prep, wsd

def extract_themes(text: str, sentance_tokens: list[tuple[str, str]], text_tokens: list[list[tuple[str, str]]], mode: str):
	if mode == "sentance_tokens":
		text = " ".join(sentance_tokens)
	if mode == "text_tokens":
		text = " ".join([" ".join(sentance) for sentance in text_tokens])

	vectors = wsd.wsd(text)
	for sentance_vectors in vectors:
		for vector in vector:
			return """im still thinking"""