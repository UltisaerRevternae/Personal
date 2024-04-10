/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.
*/
const giftIds1 = [2, 1, 3, 5, 3, 2] // 3
const giftIds2 = [1, 2, 3, 4] // -1
const giftIds3 = [5, 1, 5, 1] // 5
function findFirstRepeated(gifts){
  const listRepeatedIndex = []

  function findRepeet(gifts) {
    const findRepeat = gifts.map((element, index, array) => {
      const newArray = array.slice(index + 1)
      const arraylenght = index + 1
  
      const findRepeated = newArray.findIndex((value) => value === element)
  
      const newElementsAray = (findRepeat) => {
        if(findRepeat != -1) {
          listRepeatedIndex.push(findRepeat + arraylenght)
        } else {
          return -1
        }
      }
      newElementsAray(findRepeated)
      const removeTrash = 
      listRepeatedIndex.sort(function (a,b) {
        return a - b
      })
  
      
      const finalElement = array[listRepeatedIndex[0]]
      if (finalElement == undefined) {
        finalElement = -1
      }
  
      return finalElement
    })
    return findRepeat
  }
  const firstRepeatedId1 = findRepeet(gifts)
  return firstRepeatedId1[firstRepeatedId1.length - 1]
}


console.log(findFirstRepeated(giftIds1)) 




// if (findIndex !== -1) {
//   return console.log(array)
// }



///const firstRepeatedId2 = findFirstRepeated(giftIds2)
///const firstRepeatedId3 = findFirstRepeated(giftIds3)

// console.log(firstRepeatedId1) // 3
// console.log(firstRepeatedId2) // -1
// console.log(firstRepeatedId3) // 5