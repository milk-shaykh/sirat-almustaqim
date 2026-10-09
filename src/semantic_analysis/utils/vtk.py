from src.semantic_analysis.clients import hf_api
import time

def coprox(vector1: list[float], vector2: list[float]) -> float:
	ln = len(vector1)
	dot_product = 0
	sq_mag1 = 0
	sq_mag2 = 0
	for i in range(ln):
		sq_mag1 += float(vector1[i])**2
		sq_mag2 += float(vector2[i])**2
		dot_product += vector1[i] * vector2[i]
	sq_mag = sq_mag1 ** sq_mag2
	return dot_product / (sq_mag) ** 0.5

def sum_vectors(vectors: list[list[float]]) -> list[float]:
    if not vectors:
        return []
    result = [0.0] * len(vectors[0])
    for vector in vectors:
        if len(vector) != len(result):
            raise ValueError("All vectors must have the same length")
        for i, value in enumerate(vector):
            result[i] += value
    return result

def word_vectorise(text: list[tuple[str, str]]):
	for _ in range(5):
		for _ in range(10):
			try:
				return hf_api.word_vectorise(text)
			except Exception:
				time.sleep(0.1)
		time.sleep(0.5)
	raise Exception("ERROR. HF_API REFUSED TO SEND VECTOR.")