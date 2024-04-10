function autonomousDrive(store, movements) {
  const data = store.join("").split("");

  const findElement = data.findIndex((value) => value === "!");
  const lengthElement = data.length / store.length;
  let row = parseInt(findElement / lengthElement);
  let col = findElement % lengthElement;

  const updatePosition = (newRow, newCol, oldRow, oldCol) => {
      if (data[lengthElement * newRow + newCol] !== "*") {
          data[lengthElement * newRow + newCol] = "!";
          data[lengthElement * oldRow + oldCol] = ".";
          row = newRow;
          col = newCol;
      }
  };

  movements.forEach((move) => {
      let oldRow = row;
      let oldCol = col;

      switch (move) {
          case "R":
              if (col + 1 < lengthElement) updatePosition(row, col + 1, oldRow, oldCol);
              break;
          case "L":
              if (col - 1 >= 0) updatePosition(row, col - 1, oldRow, oldCol);
              break;
          case "U":
              if (row - 1 >= 0) updatePosition(row - 1, col, oldRow, oldCol);
              break;
          case "D":
              if (row + 1 < store.length) updatePosition(row + 1, col, oldRow, oldCol);
              break;
      }
  });

  const result = Array.from(
      { length: store.length },
      (_, i) => data.slice(i * lengthElement, (i + 1) * lengthElement).join("")
  );

  return result;
}

const store = ["*..!..*", "*.....*"];
const movements = ['R', 'R', 'D', 'D'];
const result = autonomousDrive(store, movements);

console.log(result);
