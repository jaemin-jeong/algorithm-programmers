function solution(number, k) {
  let answer = '';
  let stack = [];
  let rest = ''
  
  for (let i = 0; i < number.length; i++) {
      while (stack[stack.length - 1] < number[i]) {
          stack.pop();
          k--;
          
          if (k === 0) {
              break;
          }
      }
      
      stack.push(number[i]);
      if (k === 0) {
          rest = number.slice(i + 1);
          break;
      }
  }
  answer = stack.join('') + rest;
  
  if (k > 0) {
      answer = answer.slice(0, -k);
  }
  return answer;
}