function autonomousDrive(store, movements) {
  let  data = store.map((element) => [...element]) 
  const car = [];

  data.forEach((element , index) => {
    let indexCarActual = element.findIndex((value) => value === '!')
    if (indexCarActual !== -1 ) {
      let indexStreet = index
      car.push(indexStreet , indexCarActual,);
    }
  });

  movements.forEach((element) => {
    if (element === 'R') {
      if (data[car[0]] === undefined) {}
      else if (data[car[0]][car[1] + 1] !== '*' || data[car[0]][car[1] + 1] !== undefined  ) {
        data[car[0]][car[1]] = '.'
        data[car[0]][car[1] + 1] = '!'
        car.push(car.pop() + 1)
      } 
    } else if (element === 'L') {
      if (data[car[0]] === undefined) {

      }
      else if (data[car[0]][car[1] - 1] !== '*' || data[car[0]][car[1] - 1] !== undefined  ) {
        data[car[0]][car[1]] = '.'
        data[car[0]][car[1] - 1] = '!'
        car.push(car.pop() - 1)
      }
    } else if (element === 'U') {
      if (data[car[0] - 1] === undefined) {
      } else if (data[car[0] - 1][car[1]] !== '*' || data[car[0] - 1][car[1]] !== undefined ) {
        data[car[0]][car[1]] = '.'
        data[car[0] - 1][car[1]] = '!'
        car.push(car.shift() - 1)
      }
    } else if (element === 'D') {
      if (data[car[0] + 1] === undefined) {
      } else if (data[car[0] + 1][car[1]] !== '*' || data[car[0] + 1][car[1]] !== undefined ) {
        data[car[0]][car[1]] = '.'
        data[car[0] + 1][car[1]] = '!'
        car.push(car.shift() + 1)
      }
    }
  })
  
  data = data.map((element) => element.join(''))

  return data
}

const store = ['..!....', '...*.*.']

const movements = ['D', 'L', 'R', 'R']
const result = autonomousDrive(store, movements)
 console.log(result)

 /*
 movements.forEach((element) => {
    if (element === 'R') {
      if (car[1] + 1 < data[car[0]].length && data[car[0]][car[1] + 1] !== '*') {
        data[car[0]][car[1]] = '.';
        car[1]++;
        data[car[0]][car[1]] = '!';
      }
    } else if (element === 'L') {
      if (car[1] - 1 >= 0 && data[car[0]][car[1] - 1] !== '*') {
        data[car[0]][car[1]] = '.';
        car[1]--;
        data[car[0]][car[1]] = '!';
      }
    } else if (element === 'U') {
      if (car[0] - 1 >= 0 && data[car[0] - 1][car[1]] !== '*') {
        data[car[0]][car[1]] = '.';
        car[0]--;
        data[car[0]][car[1]] = '!';
      }
    } else if (element === 'D') {
      if (car[0] + 1 < data.length && data[car[0] + 1][car[1]] !== '*') {
        data[car[0]][car[1]] = '.';
        car[0]++;
        data[car[0]][car[1]] = '!';
      }
    }
    */