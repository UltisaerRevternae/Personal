function autonomousDrive(store, movements) {
  let data = store.map(row => row.split(''));
  let robotRow, robotCol;

  // Encuentra la posición inicial del robot
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] === '!') {
        robotRow = row;
        robotCol = col;
        break;
      }
    }
  }

  movements.forEach(movement => {
    let newRow = robotRow;
    let newCol = robotCol;

    // Calcula la nueva posición basada en el movimiento
    switch (movement) {
      case 'R': newCol++; break;
      case 'L': newCol--; break;
      case 'U': newRow--; break;
      case 'D': newRow++; break;
    }

    // Verifica si el movimiento es válido
    if (newRow >= 0 && newRow < data.length &&
        newCol >= 0 && newCol < data[newRow].length &&
        data[newRow][newCol] !== '*') {
      data[robotRow][robotCol] = '.';
      robotRow = newRow;
      robotCol = newCol;
      data[robotRow][robotCol] = '!';
    }
  });

  return data.map(row => row.join(''));
}

const store = ['..!....', '...*.*.'];
const movements = ['D', 'L', 'R', 'R'];
const result = autonomousDrive(store, movements);
console.log(result);
