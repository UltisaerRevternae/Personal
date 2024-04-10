function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false

  const posibility = ['#', '+', ':', '.', ' ']
  let result = true
  const isWord = (valueOriginal, valueCopy) =>  {
    if (valueOriginal === valueCopy) return true
    if (valueOriginal === valueCopy.toUpperCase()) return true
    if (valueOriginal.toUpperCase() === valueCopy) return false
    else return isDegraded(valueOriginal, valueCopy)
  }
  const isDegraded = (valueOriginal, valueCopy) => {
    if (valueOriginal.match(/[A-Z]|[a-z]/) !== null) {
      let indexPosibility = posibility.findIndex((value) => value === valueCopy)
      return (indexPosibility === -1) ? false : true
    } else {
      let indexPosibility = posibility.findIndex((value) => value === valueOriginal)
      if (indexPosibility === -1) return false
      else {
        let newPosibilities = posibility.slice(indexPosibility)
        let indexNewPosibility = newPosibilities.findIndex((value) => value === valueCopy)
        return (indexNewPosibility === -1) ? false : true
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

// Degradacion (A-Z ⇒ a-z) ⇒ # ⇒ + ⇒ : ⇒ . ⇒ ' '
// original:  'Santa Claus'
// 1ª copia:  'santa cla#s'
// 2ª copia:  'sa#t# cl#+s'
// 3ª copia:  'sa+## c#+:s'
// 4ª copia:  's#++. c+:.s'
// 5ª copia:  's#+:. c:. s'