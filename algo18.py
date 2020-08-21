def solution(citations):
    citations = sorted(citations)
    citations.reverse()

    h = 0
    while h < citations[h]:
        h += 1
        if h == len(citations):
            break
    
    return h