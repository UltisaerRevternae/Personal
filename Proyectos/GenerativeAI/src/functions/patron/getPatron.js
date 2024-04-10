import { aleatory } from "./aleatory.js"
import { gallery } from "./gallery.js"

const getPatron = (data, patron = gallery()) => {
  const possibilityPatron = Object.keys(patron).map((value) => parseInt(value))
  const minData = Math.max(...possibilityPatron)
  const lengthPatron = possibilityPatron.length
  let result = []
  let missingData = data
  let attempts = 10
  let posibility = lengthPatron - 1
  let missing = 0

  while (missingData >= minData && attempts > 0) {
    const select = aleatory(lengthPatron)
    const dataPatron = possibilityPatron[select]

    if ( missingData - dataPatron > 1 ) {
      const newPatron = patron[dataPatron][aleatory(patron[dataPatron].length)]
      result = result.concat(newPatron)    
      missingData = missingData - dataPatron
      // console.log(newPatron)
    } else {
      attempts --
    }
  }

  missing = data - result.length

  if (!!patron[missing]) {
    const newPatron = patron[missing][aleatory(patron[missing].length)]
    result = result.concat(newPatron)    
    missing = 0
    // console.log(newPatron)
  }
  
  while (missing != 0) {
    if (missing - possibilityPatron[posibility] >= 0) {
      if (missing - possibilityPatron[posibility] !== 1) {
        const newPatron = patron[possibilityPatron[posibility]][aleatory(patron[possibilityPatron[posibility]].length)]
        result = result.concat(newPatron)
        missing = missing - possibilityPatron[posibility]
        // console.log(newPatron)
      } else {
        posibility = posibility - 1
      }
    } else {
      posibility = posibility - 1
    }
  }
  
  // console.log({data, result, missing, possibilityPatron, posibility})
  return result
}
export { getPatron }