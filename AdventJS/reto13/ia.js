function calculateTime(deliveries) {
  const timeTotal = 25200;
  let timeSpent = 0;

  deliveries.forEach((data) => {
    let [hour, minutes, seconds] = data.split(':').map(Number);
    timeSpent += (hour * 3600) + (minutes * 60) + seconds;
  });

  let total = timeSpent - timeTotal;
  const sign = total < 0 ? '-' : '';

  total = Math.abs(total);

  let hours = (Math.floor(total / 3600)).toString().padStart(2, '0');
  let minutes = (Math.floor((total % 3600) / 60)).toString().padStart(2, '0');
  let seconds = (total % 60).toString().padStart(2, '0');

  return `${sign}${hours}:${minutes}:${seconds}`;
}

// Ejemplo de uso
const deliveryTimes = ["01:30:00", "02:15:45", "03:10:15"];
console.log(calculateTime(deliveryTimes)); // Ejemplo de salida: -00:04:00
