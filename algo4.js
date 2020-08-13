function solution(n, lost, reserve) {
  var answer = 0;

  // 체육복을 갖고온 학생이 도난당했을 수 있으니, 그런 경우엔 양쪽 배열에서 해당 학생 제거
  lost = lost.filter(st => {
      if(!reserve.includes(st)){ 
          return st;
      }else{ 
          reserve.splice(reserve.indexOf(st), 1);
      };
  });
  
  // 실제로 다른 학생에게 체육복을 빌려준 경우의 수
  let lend = lost.reduce((total, st) => {
      // reserve 배열에 st+1 혹은 st-1이 포함되어 있을 경우,
      // lend 값을 1 증가시키고 reserve에선 대응되는 요소를 삭제한다
      if(reserve.includes(st + 1)){
          reserve.splice(reserve.indexOf(st + 1), 1);
          total += 1;
      }else if(reserve.includes(st - 1)){
          reserve.splice(reserve.indexOf(st - 1), 1);
          total += 1;    
      }
      return total;
  }, 0);
  
  answer = n - lost.length + lend;
  return answer;
}