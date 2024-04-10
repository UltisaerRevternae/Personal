function autonomousDrive(store, movements) {
  const data = store.join('').split('')

  const findElement = data.findIndex((value) => value === '!')
  const lengthElement = data.length / store.length
  let row = parseInt(findElement / lengthElement)
  let col = findElement % lengthElement

  const newPositionCol = (row, oldcol, col) => {
    let min = lengthElement * row
    let max = (lengthElement * ( row + 1)) - 1

    if (col >= min && col <= max) {
      if (data[col] !== '*') {
        data[col] = '!'
        data[oldcol] = '.'
      } else col = oldcol
    } else col = oldcol
  }

  const newPositionRow = (oldrow, row, col) => {

    if (row >= 0 && row < store.length) {
      const newCol = (lengthElement * row) + col
      const oldCol = (lengthElement * oldrow) + col
      if ( data[newCol] !== '*') {
        data[newCol] = '!'
        data[oldCol] = '.'
      } else row = oldrow
    } else {
      row = oldrow
    }
  }

  movements.forEach(move => {
    switch (move) {
      case 'R': newPositionCol(row, col ,++col); break;
      case 'L': newPositionCol(row, col ,--col); break;
      case 'U': newPositionRow(row, --row, col); break;
      case 'D': newPositionRow(row, ++row, col); break;
    }
  });

  const result = Array.from({ length: Math.ceil(data.length / lengthElement) }, (_, i) => data.slice(i * lengthElement, (i + 1) * lengthElement).join(''));
  return result

}

const store = ['.......', '..!*.*.']

const movements = ['U', 'R', 'R', 'D']
const result = autonomousDrive(store, movements)
console.log(result)