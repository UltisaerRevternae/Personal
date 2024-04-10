function calculateTime(deliveries) {
  const timeTotal = [ 7 , 0, 0 ]
  const timeSpent = [ 0 , 0 , 0]

  deliveries.forEach((data) => {
    let [horas, minutos, segundos] = data.split(':').map(Number)
    timeSpent[0] = timeSpent[0] + horas
    timeSpent[1] = timeSpent[1] + minutos
    timeSpent[2] = timeSpent[2] + segundos
  });

  timeSpent.reverse().map((data, index) => {
    if (data >= 60 ) {
      if (index === 0) {
        timeSpent[1] = timeSpent[1] + parseInt(data / 60)
        timeSpent[0] = data % 60
      }
      if (index === 1) {
        timeSpent[2] = timeSpent[2] + parseInt(data / 60)
        timeSpent[1] = data % 60
      }
    }
  })
  timeSpent.reverse()

  const totalSegundosSpent = timeSpent[0] * 3600 + timeSpent[1] * 60 + timeSpent[2];
  const totalSegundosTotal = timeTotal[0] * 3600 + timeTotal[1] * 60 + timeTotal[2];

  console.log(totalSegundosTotal)
  // Calcular la diferencia
  const diferencia = totalSegundosSpent - totalSegundosTotal;

  // Convertir de vuelta a horas, minutos y segundos
  const horas = Math.floor(Math.abs(diferencia) / 3600);
  const minutos = Math.floor((Math.abs(diferencia) % 3600) / 60);
  const segundos = Math.abs(diferencia) % 60;

  return (`${(timeSpent[0] < 7 ? '-' : '')}${(horas < 10 ? `0${horas}` : horas)}:${(minutos < 10 ? `0${minutos}` : minutos)}:${(segundos < 10 ? `0${segundos}` : segundos)}`)
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]) // '-02:20:00'
)
calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']) // "-00:00:01"


// calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// // '00:30:00'

// calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]); // '-05:29:00'
