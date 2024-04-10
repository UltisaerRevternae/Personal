function cyberReindeer(road, time) {
  const roadStates = [road];
  let sledPosition = road.indexOf("S");
  let replacedChar = ".";

  for (let i = 0; i < time - 1; i++) {
    let currentRoadState = roadStates[i];
    if (i === 4) {
      currentRoadState = currentRoadState.replace(/[|]/g, "*");
    }
    if (currentRoadState[sledPosition + 1] !== "|") {
      const newSledPosition = `${replacedChar}S`;
      replacedChar = currentRoadState[sledPosition + 1];
      const firstPart = currentRoadState.substring(0, sledPosition);
      const lastPart = currentRoadState.substring(sledPosition + 2);
      currentRoadState = firstPart + newSledPosition + lastPart;
      sledPosition += 1;
    }
    roadStates.push(currentRoadState);
  }
  return roadStates;
}