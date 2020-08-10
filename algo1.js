function solution(answers) {
  let answer = [], count = [0, 0, 0];
  let st1 = [1, 2, 3, 4, 5];
  let st2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((v, i) => {
      if(v === st1[i % st1.length]){ count[0]++ };
      if(v === st2[i % st2.length]){ count[1]++ };
      if(v === st3[i % st3.length]){ count[2]++ };
  });

  for(let i = 0; i < count.length; i++){
      if(count[i] === Math.max(...count)){ answer.push(i + 1) };
  }
  
  return answer;
}