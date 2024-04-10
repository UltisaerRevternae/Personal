function getIndexsForPalindrome(word) {
  isPalindrome = (value) => value === value.split('').reverse('').join('')
  if (isPalindrome(word)) return []
  for(let i = 0; i < word.length; i ++) {
    for(let j = 0; j < word.length; j ++) {
      let wordSplit = word.split('');
      [wordSplit[i] , wordSplit[j]] = [wordSplit[j] , wordSplit[i]]
      if (isPalindrome(wordSplit.join(''))) return [i, j]
    }
  }
  return null
}

console.log(getIndexsForPalindrome("rotaratov")); //) [ 4, 8 ]
console.log(getIndexsForPalindrome("anna")); //) []
console.log(getIndexsForPalindrome("abab")); //) [0, 1]
console.log(getIndexsForPalindrome("abac")); //) null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
