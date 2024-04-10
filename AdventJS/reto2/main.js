const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  const setMaterial = new Set(materials.split(''))
  const newGifts = []
  for (let gift of gifts) {
    let isGiftsMaterial = gift.split('')
    if(isGiftsMaterial.every((value) => setMaterial.has(value))){
      newGifts.push(gift)
    }
  }
  return newGifts
}

manufacture(gifts, materials)

// IA V1 //
function manufacture(gifts, materials) {
  const setMaterial = new Set(materials);
  const newGifts = [];
  for (let gift of gifts) {
    let canMake = true;
    for (let char of gift) {
      if (!setMaterial.has(char)) {
        canMake = false;
        break;
      }
    }
    if (canMake) newGifts.push(gift);
  }
  return newGifts;
}
console.log(manufacture(gifts, materials))


// IA V2 //
function manufacture(gifts, materials) {
  const setMaterial = new Set(materials);
  return gifts.filter(gift => [...gift].every(char => setMaterial.has(char)));
}
