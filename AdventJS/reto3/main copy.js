function findNaughtyStep(original, modified) {
  for (let i = 0; i < Math.max(original.length , modified.length); i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }
  return ''
}
const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified))

function decode(message) {
  const split = message.split('()')
  return message
}
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus