function solution(begin, target, words) {
  let answer = 0;
  if (!words.includes(target)) { return 0 };
  
  const check = (begin, target) => {
      let diffCnt = 0;
      for (let i = 0; i < begin.length; i++) {
          diffCnt = begin[i] !== target[i] ?  diffCnt + 1 : diffCnt;
      }
      return diffCnt;
  };

  const recursion = (restWords, tmp, tmpAnswer) => {
      if (tmp === target) {
          answer = answer === 0 || tmpAnswer < answer ? tmpAnswer : answer;
          return;
      };
      
      if (restWords.length === 0) { return };
      
      for (let j = 0; j < restWords.length; j++) {
          if (check(tmp, restWords[j]) === 1) {
              let prevTmp = tmp;
              tmp = restWords[j];
              restWords.splice(j, 1);
              
              recursion(restWords, tmp, tmpAnswer + 1);
              restWords.splice(j, 0, tmp);
              tmp = prevTmp;
          };
      };
  };

  recursion(words, begin, 0);
  return answer;
}