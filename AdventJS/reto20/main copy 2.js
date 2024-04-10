function distributeGifts(weights) {
  const length = weights.length;
  const result = [];
  const SPACE = 1;
  const VALIDATE = 0;
  while (result.length < length) result.push([]);

  weights.flat().forEach((_, index) => {
    const internal = index % weights[0].length; // Asumiendo todas las filas tienen la misma longitud
    const external = parseInt(index / weights[0].length);
    const sum = [];
    let total = 0;

    // Arriba
    if (external - SPACE >= VALIDATE && weights[external - SPACE][internal] !== null) {
      sum.push(weights[external - SPACE][internal]);
    }

    // Izquierda
    if (internal - SPACE >= VALIDATE && weights[external][internal - SPACE] !== null) {
      sum.push(weights[external][internal - SPACE]);
    }

    // Derecha
    if (internal + SPACE < weights[external].length && weights[external][internal + SPACE] !== null) {
      sum.push(weights[external][internal + SPACE]);
    }

    // Abajo
    if (external + SPACE < length && weights[external + SPACE] && weights[external + SPACE][internal] !== null) {
      sum.push(weights[external + SPACE][internal]);
    }

    // Valor actual si no es null
    if (weights[external][internal] !== null) {
      sum.push(weights[external][internal]);
    }

    // Promedio y redondeo
    total = sum.length > 0 ? Math.round(sum.reduce((a, b) => a + b, 0) / sum.length) : null;
    result[external].push(total);
  });

  return result;
}


const result = 
distributeGifts([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
console.log(result)

const result_2 = 
distributeGifts([
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
])
console.log(result_2)
// console.log(weights[externalData][internalData])
// result[externalData].push(weights[externalData][internalData])