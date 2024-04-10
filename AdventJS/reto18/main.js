function drawClock(time) {
  const base = [
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
    [' ' , ' ', ' '],
  ]

  const space = [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ]

  const line = ['*' , '*', '*']

  const one = JSON.parse(JSON.stringify(base));
  one.map((value) => value[2] = '*')

  const two = JSON.parse(JSON.stringify(base));
  two.map((value, index) => {
    if (index % 3 === 0) {
      two[index] =  line
    } else if ( index > 3){
      value[0] = '*'
    } else {
      value[2] = '*'
    }
  })
  
  const three = JSON.parse(JSON.stringify(base));
  three.map((value, index) => {
    if (index % 3 === 0) {
      three[index] =  line
    } else {
      value[2] = '*'
    }
  })

  const fourth = JSON.parse(JSON.stringify(base));
  fourth.map((value, index) => {
    value[2] = '*'
    if (index === 3 ) {
      fourth[3] =  line
    } else if ( index < 3){
      value[0] = '*'
    }
  })

  const five = JSON.parse(JSON.stringify(base));
  five.map((value, index) => {
    if (index % 3 === 0) {
      five[index] =  line
    } else if ( index > 3){
      value[2] = '*'
    } else {
      value[0] = '*'
    }
  })
  
  const six = JSON.parse(JSON.stringify(base));
  six.map((value, index) => {
    value[0] = '*'
    if (index % 3 === 0) {
      six[index] =  line
    } else if(index > 3) {
      value[2] = '*'
    }
  })
  
  const seven = JSON.parse(JSON.stringify(base));
  seven.map((value, index) => {
    value[2] = '*'
    if (index === 0) seven[0] = line
  })

  const eight = JSON.parse(JSON.stringify(base));
  eight.map((value, index) => {
    value[2] = '*'
    value[0] = '*'
    if (index  % 3 === 0) value[1] = '*'
  })

  const nine = JSON.parse(JSON.stringify(base));
  nine.map((value, index) => {
    value[2] = '*'
    value[0] = '*'
    if (index  % 3 === 0) value[1] = '*'
    if (index > 3 && index < 6) value[0] = ' '
  })
  
  const zero = JSON.parse(JSON.stringify(base));
  zero.map((value, index) => {
    value[2] = '*'
    value[0] = '*'
    if (index === 0 || index === 6) value[1] = '*'
  })

  const colon = JSON.parse(JSON.stringify(base));
  colon.map((value, index) => {
    if ( index === 2 || index === 4) {
      value[1] = '*'
    }
  })

  const numbers = {
    '1' : one,
    '2' : two,
    '3' : three,
    '4' : fourth,
    '5' : five,
    '6' : six,
    '7' : seven,
    '8' : eight,
    '9' : nine,
    '0' : zero,
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

console.log(drawClock('01:30'))