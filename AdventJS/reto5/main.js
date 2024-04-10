const road = "S..|...|..";
const time = 10;
const result = cyberReindeer(road, time);

function cyberReindeer(road, time) {
  let list = road.split("");
  let state = ['.']
  let result = [road]

  for (let t = 1; t < time; t++) {

    if (t === 5) {
      list = list.map((data) => data === "|" ? "*" : data);
    };
    
    let slet = list.findIndex((S) => S === "S")

    if (list[slet + 1] !== '|' ) {
      state.push(list[slet + 1]);
      list[slet + 1] = list[slet] 
      list[slet] = state.shift();
    }

    result.push(list.join(''))
  }
  return result
}

console.log(result)