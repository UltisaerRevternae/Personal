function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false

  const deg = ['#', '+', ':', '.', ' ']
  let result = true

  const isWord = (original, copy) =>  {
    if (original === copy || original === copy.toUpperCase()) return true
    if (original.toUpperCase() === copy) return false
    else {
      if (original.match(/[A-Z]|[a-z]/) !== null) {
        let index = deg.findIndex((value) => value === copy)
        return (index === -1) ? false : true
      } else {
        let index = deg.findIndex((value) => value === original)
        if (index === -1) return false
        else {
          let newDeg = deg.slice(index)
          let indexNew = newDeg.findIndex((value) => value === copy)
          return (indexNew === -1) ? false : true
        }
      }
    }
  }

  original = original.split('')
  original.forEach((value , index) => {
    if (!isWord(value , copy.charAt(index))) result = false 
  });
  return result
}
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // false
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false
console.log(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')) // false
console.log(checkIsValidCopy('3 regalos', '3        '    )) // true