function drawGift(size, symbol) {
  // El espacio al principio del regalo
  let space = size;

  // Inicializa la primera parte del regalo
  // el espacio al principio del regalo
  // y concatena # con el tamaño del regalo
  let firstPart = " ".repeat(--space) + "#".repeat(size) + "\n";

  // si el tamaño es 1, devuelve la primera parte `#`
  if (size === 1) {
    return firstPart;
  }

  // Inicializa la segunda parte del regalo
  // esta parte es después de la mitad del regalo
  let secondPart = "";

  // bucle a través del tamaño del regalo -2
  // -2 porque ya tenemos la primera y la última línea
  for (let i = 0; i < size - 2; i += 1) {
    // comienza con el espacio al principio del regalo
    const initialSpace = " ".repeat(--space);
    // añade `#` y el símbolo con el tamaño del regalo - 1
    const upperFace = "#".padEnd(size - 1, symbol);
    // añade `#` y llena el espacio con el símbolo
    const rightFace = "#".padEnd(i + 1, symbol)
    // concatena todos ellos y añade el salto de línea
    firstPart += initialSpace + upperFace + rightFace + "#\n";

    // añade los símbolos en la cara frontal
    const frontFace = symbol.repeat(size - 2);
    // añade los símbolos en la cara inferior derecha
    const lowerRightFace = "#".padEnd(size - i - 2, symbol);
    // concatena todos ellos
    secondPart += "#" + frontFace + lowerRightFace + "#\n";
        
  }

  // la mitad es `#` con el tamaño del regalo y el símbolo con el tamaño del regalo - 2
  const half = "#".repeat(size) + symbol.repeat(size - 2) + "#\n";

  // devuelve la primera parte, la mitad y la segunda parte
  return firstPart + half + secondPart + "#".repeat(size) + "\n";
}
drawGift(4, '*')
// console.log(drawGift(4, '*'))
