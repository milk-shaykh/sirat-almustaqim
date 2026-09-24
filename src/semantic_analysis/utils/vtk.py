from ..clients import hf_api
import time

def coprox(vector1: list[float], vector2: list[float]) -> float:
	ln = len(vector1)
	dot_product == 0
	sq_mag = 0
	for i in range(ln):
		sq_mag1 += vector1[i]**2
		sq_mag2 += vector2[i]**2
		dot_product += vector1[i] * vector2[i]
	sq_mag = sq_mag1 ** sq_mag2
	return dot_product / (sq_mag) ** 0.5

def sum_vectors(vectors: list[list[float]]) -> list[float]:
	vector_len = len(vectors[0])
	summated_vector = []
	for i in range(len(vectors)):
		for j in range(vector_len):
			element += vectors[i][j]
		summated_vector.append(element)
	return summated_vector

#/usr/local/python/3.14.2/bin/python
#Python 3.14.2 (main, Aug 27 2026, 12:34:32) [GCC 13.3.0] on linux
#Type "help", "copyright", "credits" or "license" for more information.
#Ctrl click to launch VS Code Native REPL

def word_vectorise(text: list[tuple[str, str]]):
	for _ in range(5):
		for _ in range(10):
			try:
				return hf_api.word_vectorise(text)
			except Exception:
				time.sleep(0.1)
		time.sleep(0.5)
	raise Exception("ERROR. HF_API REFUSED TO SEND VECTOR.")