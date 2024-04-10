function decode(message) {
  let stack = [];
  let result = "";

  for (let char of message) {
    if (char === "(") {
      // Empuja la posición actual en la pila
      stack.push(result.length);
    } else if (char === ")") {
      // Encuentra la posición del último paréntesis abierto
      let open = stack.pop();
      // Invierte la subcadena entre los paréntesis
      let toReverse = result.substring(open);
      // Reemplaza la subcadena con su versión invertida
      result =
        result.substring(0, open) + toReverse.split("").reverse().join("");
    } else {
      // Agrega caracteres normales al resultado
      result += char;
    }
  }

  return result;
}

// Pruebas
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

/*
function decode(message) {
    while (message.includes('(')) {
        message = message.replace(/\(([^()]*)\)/g, (match, p1) => p1.split('').reverse().join(''));
    }
    return message;
}
*/