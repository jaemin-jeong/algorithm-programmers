def solution(answers):
    answer = []
    count = [0, 0, 0]
    st1 = [1, 2, 3, 4, 5]
    st2 = [2, 1, 2, 3, 2, 4, 2, 5]
    st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for i in range(len(answers)):
        if(answers[i] == st1[i % len(st1)]):
            count[0] += 1
        if(answers[i] == st2[i % len(st2)]):
            count[1] += 1
        if(answers[i] == st3[i % len(st3)]):
            count[2] += 1

    for i in range(len(count)):
        if(count[i] == max(count)):
            answer.append(i + 1)
    
    return answer