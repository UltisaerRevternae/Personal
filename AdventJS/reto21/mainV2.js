function findBalancedSegment(message) {
  let maxLength = 0;
  let maxStart = -1;

  for(let start = 0; start < message.length; start++) {
    let count_0 = 0;
    let count_1 = 0;
    for (let end = start; end < message.length; end++) {
      if (message[end] === 0) {
        count_0++
      } else {
        count_1++
      }

      if (count_0 === count_1) {
        let length = end - start + 1
        if (length > maxLength) {
          maxLength = length
          maxStart = start
        }
      }
    }
  }
  return maxStart !== -1 ? [maxStart, maxStart + maxLength - 1] : [];
}

console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]));
 