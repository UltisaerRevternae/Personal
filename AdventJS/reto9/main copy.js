function adjustLights(lights) {
  let i = 0
  let j = 0
  const lightAjust = Array.from({ length: lights.length + 1} , (_, i) => i % 2 === 0 ? '🟢' : '🔴'  )
  lights.forEach((element, index) => {
    if (lightAjust[index] !== element) i++
    if (lightAjust[index + 1] !== element) j++
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