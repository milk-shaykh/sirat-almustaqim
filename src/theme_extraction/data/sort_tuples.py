def quicksort_proxtuples(items, start, end): #ind 0 == prox ind 1 == index
    if start >= end:
        return
    else:
        pivot_value = items[start]
        low = start + 1
        high = end
        finished = False

        while not finished:
            while low <= high and items[low][0] <= pivot_value[0]:
                low += 1

            while low <= high and items[high][0] >= pivot_value[0]:
                high -= 1

            if low < high:
                temp = items[low]
                items[low] = items[high]
                items[high] = temp

            else:
                finished = True

        temp = items[start]
        items[start] = items[high]
        items[high] = temp

        quicksort_proxtuples(items, start, high-1)
        quicksort_proxtuples(items, high+1, end)

    return items