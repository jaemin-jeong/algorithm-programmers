function solution(priorities, location) {
  let answer = 0;
  // 우선순위 내림차순 정렬 및 중복 제거
  let sortPri = [...new Set([].concat(priorities).sort((a, b) => b - a))];
  let curr = sortPri.shift();
  
  while(priorities[location] !== -1){
      // priorities배열이 우선순위 curr을 포함하지 않으면, 정렬된 우선순위 배열에서 하나 새로 꺼냄
      if(!priorities.includes(curr)){
          curr = sortPri.shift();
      }

      // priorities의 맨 앞 요소와 curr를 비교해 동일하면 -1로 변경, 다르면 변경 안함
      let tmp = priorities.shift();
      if(tmp === curr){
          // 출력된 것을 표시하기 위해 -1로 변경
          tmp = -1;
          answer++;
      }
      // priorities의 길이를 유지하기 위해 꺼냈던 것을 맨 뒤로 push
      priorities.push(tmp);
      
      // 요소가 하나씩 앞으로 밀리기 때문에, location이 0일 경우 location을 끝 인덱스로 변경
      location === 0 ? location = priorities.length - 1 : location--;
  };
  
  return answer;
}