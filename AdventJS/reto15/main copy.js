function autonomousDrive(store, movements) {
  let data = store.map((element) => [...element]);
  let car = [];
  
  // Encontrar la posición inicial del robot
  data.forEach((element, index) => {
    let indexCarActual = element.findIndex((value) => value === '!');
    if (indexCarActual !== -1) {
      car = [index, indexCarActual];
    }
  });

  movements.forEach((move) => {
    let newRow = car[0];
    let newCol = car[1];

    if (move === 'R') {
      newCol += 1;
    } else if (move === 'L') {
      newCol -= 1;
    } else if (move === 'U') {
      newRow -= 1;
    } else if (move === 'D') {
      newRow += 1;
    }

    // Verificar si el movimiento es válido (dentro de los límites y no en un obstáculo)
    if (newRow >= 0 && newRow < data.length && newCol >= 0 && newCol < data[newRow].length && data[newRow][newCol] !== '*') {
      data[car[0]][car[1]] = '.'; // Marcar la posición antigua como libre
      car = [newRow, newCol];      // Actualizar la posición del robot
      data[newRow][newCol] = '!';  // Marcar la nueva posición del robot
    }
  });

  // Convertir los arrays del almacén de vuelta a cadenas
  data = data.map((element) => element.join(''));

  return data;
}

const store = ['..!....', '...*.*.'];
const movements = ['D', 'L', 'R', 'R'];
const result = autonomousDrive(store, movements);
console.log(result);

