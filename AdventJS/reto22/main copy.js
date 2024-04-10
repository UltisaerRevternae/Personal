function compile(code) {
  let counter = 0;
  let returnPoints = [];
  let inConditionalBlock = false;
  let conditionalBlockStarted = false;

  for (let i = 0; i < code.length; i++) {
      const char = code[i];

      if (inConditionalBlock && char !== '?') {
          continue;
      }

      switch (char) {
          case '+':
              counter++;
              break;
          case '*':
              counter *= 2;
              break;
          case '-':
              counter--;
              break;
          case '%':
              returnPoints.push(i);
              break;
          case '<':
              if (returnPoints.length > 0) {
                  i = returnPoints.pop();
              }
              break;
          case '¿':
              conditionalBlockStarted = true;
              inConditionalBlock = counter <= 0;
              break;
          case '?':
              if (conditionalBlockStarted) {
                  inConditionalBlock = false;
                  conditionalBlockStarted = false;
              }
              break;
          default:
              // Ignorar caracteres no reconocidos
              break;
      }
  }

  return counter;
}

// Pruebas
console.log(compile('++*-')); // 3
console.log(compile('++%++<')); // 6
console.log(compile('++<--')); // 0
console.log(compile('++¿+?')); // 3
console.log(compile('--¿+++?')); // -2

