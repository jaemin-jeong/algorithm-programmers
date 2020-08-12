function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1, right = times[times.length - 1] * n;
  let answer = right;
  
  while(left <= right){
      let mid = Math.floor((left + right) / 2);
      let total = 0;
      for(let i = 0; i < times.length; i++){
          total += Math.floor(mid / times[i]);
      }

      if(total >= n){
          mid < answer ? answer = mid : answer;
      }
      total >= n ? right = mid - 1 : left = mid + 1;
  }
  
  return answer;
}