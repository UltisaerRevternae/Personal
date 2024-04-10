function findFirstRepeated(gifts) {
  const seen = new Set(); // Conjunto para rastrear números ya vistos
  for (const gift of gifts) {
    if (seen.has(gift)) {
      return gift; // Devuelve el primer número repetido encontrado
    }
    seen.add(gift); // Añade el número actual al conjunto si no está repetido
  }
  return -1; // Devuelve -1 si no se encuentra ningún número repetido
}

// Pruebas
const giftIds1 = [2, 1, 3, 5, 3, 2]; // 3
const giftIds2 = [1, 2, 3, 4]; // -1
const giftIds3 = [5, 1, 5, 1]; // 5

console.log(findFirstRepeated(giftIds1)); // 3
console.log(findFirstRepeated(giftIds2)); // -1
console.log(findFirstRepeated(giftIds3)); // 5

// function findFirstRepeated(gifts) {
//   const seen = new Set();
//   return gifts.find(gift => seen.has(gift) || !seen.add(gift)) || -1;
// }
