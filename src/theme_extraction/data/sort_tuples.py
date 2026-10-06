def swap(tuples: list[tuple[float, int]], i, j):
	tuples[i], tuples[j] = tuples[j], tuples[i]

def partition(tuples: list[tuple[float, int]], start: int, end: int):
	pivot = tuples[end][0]
	i = start - 1
	for j in range(start, end):
		if tuples[j][0] < pivot:
			i += 1
			swap(tuples, i, j)

	swap()