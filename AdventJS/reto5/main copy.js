const road = "S..|...|..";
const time = 10;
const result = cyberReindeer(road, time);

function cyberReindeer(road, time) {
  let roadList = road.split("");
  let saveState = ['.']
  let finalState = [road]

  for (let t = 1; t < time; t++) {
    let slet = roadList.findIndex((S) => S === "S")
    let nextSlet =  roadList[slet + 1]

    if (t === 5) {
      roadList = roadList.map((data) => data === "|" ? "*" : data);
      nextSletTransform(true);
    };
    
    function nextSletTransform(value){
      if (nextSlet !== '|' || value) {
        saveState.push(roadList[slet + 1]);
        roadList[slet + 1] = roadList[slet] 
        roadList[slet] = saveState.shift();
      }
    }
    nextSletTransform()

    finalState.push(roadList.join(''))
  }
  return finalState
}
console.log(result)