function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = [];
  let lenList = [];
  let curWeight = 0;

  while (truck_weights.length > 0 || queue.length > 0) {
      if (truck_weights[0] && weight >= curWeight + truck_weights[0]) {
          let truck = truck_weights.shift();
          queue.push(truck);
          curWeight += truck;
          lenList.push(bridge_length);
      }
      lenList = lenList.map(len => len - 1);
      answer++;

      if (lenList[0] === 0){
          lenList.shift();
          curWeight -= queue[0];
          queue.shift();
      }
  }
  answer++;
  return answer;
};