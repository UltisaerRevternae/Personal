function createChristmasTree(ornaments, height) {
  let iterator = ornaments.length - 1; // Inicializamos con la longitud - 1 para comenzar desde el primer carácter
  let space = height;
  let result = '';

  function nextLetter(value) {
    let newLine = '';
    for (let i = 0; i < value; i++) {
      iterator++;
      if (iterator >= ornaments.length) iterator = 0;
      let isFinal = (i + 1 === value) ? '' : ' ';
      newLine += ornaments.charAt(iterator) + isFinal;
    }
    return newLine;
  }

  const final = ' '.repeat(height - 1) + '|' + '\n';
  for (let i = 1; i <= height; i++) {
    result += ' '.repeat(space - 1) + nextLetter(i) + '\n';
    space--;
  }

  return result + final;
}

console.log(createChristmasTree('123', 4))
