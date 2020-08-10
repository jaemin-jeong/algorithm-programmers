function solution(numbers, target) {
  let answer = 0;
  search(0, 0);
  
  function search(sum, depth){
      if(depth === numbers.length){
          return sum === target ? answer++ : answer;
      }
      search(sum + numbers[depth], depth + 1);
      search(sum - numbers[depth], depth + 1);
  }
  
  return answer;
}