function organizeGifts(gifts) {
  const LARGE_QUANTITY = 50;
  const MEDIUM_QUANTITY = 10;
  const search = /(\d+)([a-zA-Z]+)/g;

  return gifts.replace(search, (_, quantity, key) => {
    let result = '';
    quantity = parseInt(quantity, 10);

    result += `[${key}]`.repeat(Math.floor(quantity / LARGE_QUANTITY));
    quantity %= LARGE_QUANTITY;

    result += `{${key}}`.repeat(Math.floor(quantity / MEDIUM_QUANTITY));
    quantity %= MEDIUM_QUANTITY;

    if (quantity > 0) {
      result += `(${key.repeat(quantity)})`;
    }
    return result;
  });
}

console.log(organizeGifts("76a11b"));  // Tu caso de prueba
