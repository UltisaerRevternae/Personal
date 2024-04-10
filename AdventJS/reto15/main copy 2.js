function autonomousDrive(store, movements) {
  const data = store.map(row => [...row]);
  let robotRow, robotCol;

  // Encontrar la posición inicial del robot
  for (let row = 0; row < data.length; row++) {
    const col = data[row].findIndex(c => c === '!');
    if (col !== -1) {
      robotRow = row;
      robotCol = col;
      break;
    }
  }

  // Función para verificar si el movimiento es válido
  const isValidMove = (row, col) => {
    return row >= 0 && row < data.length && col >= 0 && col < data[row].length && data[row][col] !== '*';
  };

  // Mover el robot según los movimientos dados
  movements.forEach(move => {
    let newRow = robotRow, newCol = robotCol;
    
    switch (move) {
      case 'R': newCol++; break;
      case 'L': newCol--; break;
      case 'U': newRow--; break;
      case 'D': newRow++; break;
    }

    if (isValidMove(newRow, newCol)) {
      data[robotRow][robotCol] = '.';
      robotRow = newRow;
      robotCol = newCol;
      data[robotRow][robotCol] = '!';
    }
  });

  // Convertir los arrays del almacén de vuelta a cadenas
  return data.map(row => row.join(''));
}

// Prueba de la función
const store = ['..!....', '...*.*.'];
const movements = ['D', 'L', 'R', 'R'];
const result = autonomousDrive(store, movements);
console.log(result);
