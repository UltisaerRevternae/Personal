function organizeGifts(gifts) {
  const search = (/(\d+)([a-zA-Z]+)/)
  let result = ''
  let giftsMatch = gifts.match(/(\d+)([a-zA-Z]+)/g).map((match ) => match .match(search).slice(1));
  for (let i = 0 ; i < giftsMatch.length ; i++) {
    let value = giftsMatch[i][0]
    const key =giftsMatch[i][1]
    while (value >= 50) {
      result+= `[${key}]`
      value = value - 50
    }
    while (value >= 10) {
      result+= `{${key}}`
      value = value - 10
    }
    if (value > 0) {
      result+= '('
      for (let i = value; i > 0; i--) {
        result+= `${key}`
      }
      result+= ')'
    }
  }
  return result;
}
const result1 = organizeGifts(`76aA11b`);
console.log(result1);

