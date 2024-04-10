function optimizeIntervals(intervals) {
  const result = []
  const data = intervals.flat()

  const min = Math.min(...data)
  let index = data.findIndex((value) => value === min)
  result.push(data.splice(index, 2))

  while(data.length > 0) {
    result.forEach((arr) => {
      const range = data.findIndex((element) => element <= arr [1])
      if (range !== -1) {
        const isMayor = arr[1] < data[range + 1]
        if (isMayor) {
          arr[1] = data[range + 1]
        }
        data.splice(range, 2)
      } else {
        if (data.length !== 0 ) {
          result.push(data.splice(0, 2))
        }
      }
    });
  }

  return result
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