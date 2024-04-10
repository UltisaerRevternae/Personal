function drawClock(time) {
  const SPACE = " ";
  const POINT = "*";

  const base = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const line = ["*", "*", "*"];

  const generateNumber = ({right, left, deleteRightTop, deleteRightBottom, deleteLeftTop, deleteLeftBottom, middle, top, bottom, colon, space }) => {
    const newNumber = JSON.parse(JSON.stringify(base));
    if (right) newNumber.forEach((val) => val[2] = POINT);
    if (left) newNumber.forEach((val) => val[0] = POINT);
    if (deleteRightTop) newNumber.forEach((val, ind) => { if (ind < 3) val[2] = SPACE; });
    if (deleteRightBottom) newNumber.forEach((val, ind) => { if (ind > 3) val[2] = SPACE; });
    if (deleteLeftTop) newNumber.forEach((val, ind) => { if (ind < 3) val[0] = SPACE; });
    if (deleteLeftBottom) newNumber.forEach((val, ind) => { if (ind > 3) val[0] = SPACE; });
    if (middle) newNumber[3] = line;
    if (top) newNumber[0] = line;
    if (bottom) newNumber[6] = line;
    if (colon) { newNumber[2][1] = POINT; newNumber[4][1] = POINT; }
    if (space) return newNumber.map(() => [SPACE]);
    return newNumber;
  };

  // Generación de números con las nuevas propiedades
  const zero = generateNumber({ right: true, left: true, top: true, bottom: true });
  const one = generateNumber({ right: true });
  const two = generateNumber({ right: true, left: true, deleteRightBottom: true, deleteLeftTop: true, middle: true, top: true, bottom: true });
  const three = generateNumber({ right: true, middle: true, top: true, bottom: true });
  const four = generateNumber({ right: true, left: true, deleteLeftBottom: true, middle: true });
  const five = generateNumber({ right: true, left: true, deleteRightTop: true, deleteLeftBottom: true, middle: true, top: true, bottom: true });
  const six = generateNumber({ right: true, left: true, deleteRightTop: true, middle: true, top: true, bottom: true });
  const seven = generateNumber({ right: true, top: true });
  const eight = generateNumber({ right: true, left: true, middle: true, top: true, bottom: true });
  const nine = generateNumber({ right: true, left: true, deleteLeftBottom: true, middle: true, top: true, bottom: true });
  const colon = generateNumber({ colon: true });
  const space = generateNumber({space : true})
  
  const numbers = {
    '0' : zero,
    '1' : one,
    '2' : two,
    '3' : three,
    '4' : four,
    '5' : five,
    '6' : six,
    '7' : seven,
    '8' : eight,
    '9' : nine,
    ':' : colon,
    '_' : space
  }

  const numbersTime = time.split('')
  numbersTime.splice(1, 0, '_')
  numbersTime.splice(-1, 0, '_')
  const result = [[],[],[],[],[],[],[]]
  numbersTime.forEach((time) => {
    for(i = 0; i < 7 ; i ++) {
      numbers[time][i].forEach((value) => {
        result[i].push(value)
      })
    }
  });
  return result

}

console.log(drawClock("01:30"));
