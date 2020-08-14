function solution(numbers) {
  var answer = 0, nums = [];
  
  // numbers 조각으로 만들 수 있는 최대값
  let max = numbers.split('').sort((a, b) => b - a).join('') - '';
 
  if(max < 2) return 0;
  
  const isPrime = (num) => {
      for(let i = 2; i <= Math.sqrt(num); i++){
          if(num % i === 0) return false;
      }
      return true;
  }
  
  let i = 2;
  // 에라토스테네스의 체
  while(i <= max){
      if(nums[i] !== -1){
          // prime[i]가 소수인 경우 배열에 숫자를 넣고
          if(isPrime(i)){
            nums[i] = i;
              // 그에 대한 배수는 모두 -1로 표시
              for(let j = i * 2; j <= max - i; j += i){
                nums[j] = -1;
              }
          }    
      }
      i++;
  }

  nums.forEach(num => {
      // num이 소수라면
      if(num !== -1){
          let piece = numbers.split('');
          let target = [...num + ''];
          // numbers 조각으로 num을 만들 수 있는지 확인
          for(let i = 0; i < target.length; i++){
              if(piece.indexOf(target[i]) !== -1){
                  piece[piece.indexOf(target[i])] = -1;
                  if(i === target.length - 1) answer++;
              }else{
                  break;
              }
          }
      }
  });

  return answer;
}