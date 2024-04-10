function getIndexsForPalindrome(word) {
  const isPalindrome = (str) => str === str.split("").reverse().join("");
  if (isPalindrome(word)) return [];
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      let wordArray = word.split("");
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
      if (isPalindrome(wordArray.join(""))) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(getIndexsForPalindrome("rotaratov")); //) [ 4, 8 ]
console.log(getIndexsForPalindrome("anna")); //) []
console.log(getIndexsForPalindrome("abab")); //) [0, 1]
console.log(getIndexsForPalindrome("abac")); //) null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
