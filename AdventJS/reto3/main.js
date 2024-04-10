function findNaughtyStep(original, modified) {
  const lenOriginal = original.length;
  const lenModified = modified.length;

  if(lenOriginal === lenModified) {
    for (let i = 0; i < lenOriginal; i++) {
      if (original[i] !== modified[i]){
        return modified[i]
      }
    }
    return ''
  }

  for(let i = 0, j = 0 ; i < lenOriginal && j < lenModified;) {

    if (original[i] !== modified[j]) {
      return lenOriginal > lenModified ? original[i] : modified[j]
    }
    i++;
    j++;
  }
  return lenOriginal > lenModified ? original[lenOriginal - 1] : modified[lenModified - 1]

}
const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified))

