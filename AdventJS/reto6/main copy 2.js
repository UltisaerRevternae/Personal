function maxDistance(movements) {
  let distance = 0;
  let joker = 0;
  [...movements].map((element) => {
    if (element === '>') distance++
    if (element === '<') distance--
    if (element === '*') joker++
  })

  return Math.abs(distance) + joker
}

const movements = '>>*<'
const result = maxDistance(movements)
 console.log(result) // -> 2

// const movements2 = '<<<>'
// const result2 = maxDistance(movements2)
// console.log(result2) // -> 2

// const movements3 = '>***>'
// const result3 = maxDistance(movements3)
// console.log(result3) // -> 5


