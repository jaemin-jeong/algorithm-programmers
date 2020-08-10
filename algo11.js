function solution(n, computers) {
  let answer = 0, check = new Map();
  for(let i = 0; i < n; i++){ 
      check.set(i, true) 
  };

  const search = (com) => {
      check.set(com, false);
      computers[com].forEach((v, i) => {
          if(check.get(i) && v === 1) search(i);
      });
      return;
  }
  
  for(let i = 0; i < n; i++){
      if(check.get(i)){ 
          search(i);
          answer++;
      };
  }
  
  return answer;
}