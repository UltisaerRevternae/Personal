function decode(message) {
  let stack = [];
  let result = "";

  for (let char of message) {
    if (char === '(') {
      stack.push(result.length)
    } else if (char === ')') {
      const start = stack.pop()
      const final = result.length
      const startMessage = result.substring(0, start)
      const reverseMessage = result.substring(start, final).split('').reverse().join('')
      result = startMessage + reverseMessage

    } else {
      result+= char
    }
  }

  return result;
}

// Pruebas
const a = decode('hola (odnum)');
console.log("Resultado final a: " + a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log("Resultado final b: " + b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log("Resultado final c: " + c); // santaclaus

const d = decode('1(8(3(654)7)2)9');
console.log("Resultado final c: " + d); // santaclaus