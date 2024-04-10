function maxDistance(movements) {
  let joker = 0 // *
  let advancedLeft = 0
  let advancedRight = 0

  const transform = [...movements].map((element) => {
    switch (element) {
      case '>' :
        advancedRight ++
        break;
      case '<' : 
        advancedLeft ++
        break;
      default : 
        joker ++
    }
  })

  return Math.max(advancedLeft, advancedRight) + joker - Math.min(advancedLeft, advancedRight)

}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5


