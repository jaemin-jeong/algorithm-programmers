function solution(brown, yellow) {
  let answer = [];

  let yellowMinX = Math.ceil((brown - 4) / 4);
  let yellowMaxY = Math.floor((brown - 4) / 4);
  
  while (true) {
      if(yellowMaxY * yellowMinX === yellow) {
          answer.push(yellowMinX + 2);
          answer.push(yellowMaxY + 2);
          break;
      }
      yellowMinX++;
      yellowMaxY--;
  }

  return answer;
}