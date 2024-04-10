function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let current = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]){
      current[1] = Math.max(current[1], intervals[i][1])
    } else {
      result.push(current)
      current = intervals[i]
    }
  }

  result.push(current)
  return result;
}

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]