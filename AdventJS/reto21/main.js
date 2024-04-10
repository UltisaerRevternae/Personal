function findBalancedSegment(arr) {
  let maxLength = 0;
  let maxStart = -1;

  // Bucle externo: va desde el inicio del array hasta el final
  for (let start = 0; start < arr.length; start++) {
    let count0 = 0;
    let count1 = 0;

    // Bucle interno: comienza desde 'start' y va hasta el final del array
    for (let end = start; end < arr.length; end++) {
      // Contar 0s y 1s
      if (arr[end] === 0) {
        count0++;
      } else {
        count1++;
      }

      // Mostrar los contadores para cada segmento
      console.log(
        `Segmento [${start}, ${end}]: 0s = ${count0}, 1s = ${count1}`
      );

      // Verificar si el segmento actual es equilibrado
      if (count0 === count1) {
        
        let length = end - start + 1;

        // Mostrar la longitud del segmento equilibrado
        console.log(
          `Segmento equilibrado encontrado: [${start}, ${end}] con longitud ${length}`
        );

        // Actualizar si este segmento es más largo que el anterior encontrado
        if (length > maxLength) {
          maxLength = length;
          maxStart = start;

          // Mostrar el segmento más largo hasta ahora
          console.log(
            `Nuevo segmento más largo: [${maxStart}, ${
              maxStart + maxLength - 1
            }] con longitud ${maxLength}`
          );
        }
      }
    }
  }

  // Devolver el segmento más largo equilibrado encontrado, o un array vacío si no se encontró ninguno
  return maxStart !== -1 ? [maxStart, maxStart + maxLength - 1] : [];
}

// Prueba con un ejemplo
// console.log(findBalancedSegment([1, 0, 1, 0, 1, 0]));

console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]));