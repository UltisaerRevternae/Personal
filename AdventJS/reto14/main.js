function maxGifts(houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]

  let oneHouseBack = Math.max(houses[0] , houses[1])
  let twoHouseBack = houses[0]
  let maxGiftsHouses = oneHouseBack

  for (let i = 2; i < houses.length; i++) {
    maxGiftsHouses = Math.max(oneHouseBack, twoHouseBack + houses[i])
    twoHouseBack = oneHouseBack
    oneHouseBack = maxGiftsHouses
  }

  return maxGiftsHouses
}

console.log(maxGifts([3, 4, 5])) // 8
console.log(maxGifts([1, 2, 3, 1])) // 4
console.log(maxGifts([2, 7, 9, 3, 1])) // 12
console.log(maxGifts([2, 4, 2]))// 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
/*
if (findNumer === 1) {
      data.splice(1 , 2)
    } else if (findNumer === data.length) {
      data.splice(data.length , -1)
    } else {
      data.splice(findNumer - 1 , findNumer + 1)
    }
    */