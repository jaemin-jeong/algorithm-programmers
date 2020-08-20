function solution(citations) {
  let answer = 0, h = 0;

  citations.sort((a, b) => b - a);
  
  // 인용 횟수(h)를 1씩 늘려가며 인용된 논문수와 비교하기
  while(h < citations[h]){
      h++;
  }
  answer = h;
  
  return answer;
}