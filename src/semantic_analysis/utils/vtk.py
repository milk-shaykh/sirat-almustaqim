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