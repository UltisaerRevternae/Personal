function adjustLights(lights) {
  let i = 0
  let j = 0

  lights.forEach((element, index) => {
    let color = (index % 2) === 0 ? '🟢' : '🔴'
    let colorInverse = (index % 2) === 0 ? '🔴' : '🟢'

    if (color !== element) i++
    if (colorInverse !== element) j++
  })
  return Math.min(i,j)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🔴']))

// if (cur === array[index + 1]) {
//   console.log('Impostor : ' + cur + ':' + array[index + 1])
// }