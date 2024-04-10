function distributeGifts(weights) {
  const length = weights.length
  const result = []
  const SPACE = 1
  while (result.length < length) result.push([])

  weights.flat().forEach((_ , index) => {
    const internal = index % length
    const external = parseInt(index / length)
    const sum = []
    let total = null;

    if (!!weights[external - SPACE]) {
      if (!!weights[external - SPACE][internal]){
        sum.push(weights[external - SPACE][internal])
      }
    }
    if (!!weights[external][internal - SPACE]) {
      sum.push(weights[external][internal - SPACE])
    }
    if (!!weights[external][internal]) {
      sum.push(weights[external][internal])
    }
    if (!!weights[external][internal + SPACE]) {
      sum.push(weights[external][internal + SPACE])
    }
    if (!!weights[external + SPACE]) {
      if (!!weights[external + SPACE][internal]) {
        sum.push(weights[external + SPACE][internal])
      }
    }
    sum.forEach((element) => total += element)
    total = Math.round(total / sum.length)
    result[external].push(total)
  });
  return result
}
const result = 
distributeGifts([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
console.log(result)

const result_2 = 
distributeGifts([
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
])
console.log(result_2)
// console.log(weights[externalData][internalData])
// result[externalData].push(weights[externalData][internalData])