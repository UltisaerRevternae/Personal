function optimizeIntervals(intervals) {
  // Ordena los intervalos por su hora de inicio.
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let currentInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
      // Si el intervalo actual se superpone con el siguiente
      if (currentInterval[1] >= intervals[i][0]) {
        console.log({ currentInterval : currentInterval[1], intervals: intervals[i][0]})
          // Actualiza el final del intervalo actual si es necesario
          currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
      } else {
          // Agrega el intervalo actual a resultado y empieza con un nuevo intervalo
          result.push(currentInterval);
          currentInterval = intervals[i];
      }
  }

  // Agrega el último intervalo procesado
  result.push(currentInterval);

  return result;
}

console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])) // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])) // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])) // [[1, 2], [3, 4], [5, 6]]