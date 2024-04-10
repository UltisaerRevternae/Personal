function revealSabotage(store) {

  store.forEach((value, indexV) => {
    value.forEach((data, indexD) => { 
      if (data === '*'){
        for (let i = indexV - 1; i < indexV + 2; i++) {
          for (let j = indexD - 1; j < indexD + 2; j++) {
            const min  = Math.min(i,j)
            if (min >= 0 && i < store.length) {
              if (!!store[i][j]) {
                if (store[i][j] !== '*') {
                  let newNumber = store[i][j] * 1
                  store[i][j] = (++newNumber).toString()
                }
              }
            }
          }
        }
      }
    })
  })

  return store  
}

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))        // if (isValid(indexV, indexD)) {
          
// }
// console.log(isValid(indexV, indexD))

