function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;

  const degradationSequence = ['#', '+', ':', '.', ' '];

  const isLetter = char => char.toLowerCase() !== char.toUpperCase();

  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i];
    const copyChar = copy[i];

    if (isLetter(originalChar)) {
      if (originalChar.toUpperCase() === originalChar && originalChar.toLowerCase() !== copyChar && !degradationSequence.includes(copyChar)) {
        return false;
      }
      if (originalChar.toLowerCase() === originalChar && !degradationSequence.includes(copyChar)) {
        return false;
      }
    } else {
      if (originalChar !== copyChar) {
        return false;
      }
    }
  }

  return true;
}

console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false
