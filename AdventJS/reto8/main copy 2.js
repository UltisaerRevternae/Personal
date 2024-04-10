function organizeGifts(gifts) {
  const LARGE_QUANTITY = 50;
  const MEDIUM_QUANTITY = 10;
  const search = /(\d+)([a-zA-Z]+)/g;

  return gifts.replace(search, (_, quantity, key) => {
    quantity = parseInt(quantity)
    let result = ''
    while (quantity >= LARGE_QUANTITY) {
      result+= `[${key}]`
      quantity = quantity - LARGE_QUANTITY
    }
    while (quantity >= MEDIUM_QUANTITY) {
      result+= `{${key}}`
      quantity = quantity - MEDIUM_QUANTITY
    }
    if (quantity > 0) {
      result += `(${key.repeat(quantity)})`
    }
    return result
  })
}

console.log(organizeGifts("76a11b"));  // Tu caso de prueba
