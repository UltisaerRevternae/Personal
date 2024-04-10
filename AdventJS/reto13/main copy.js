function calculateTime(deliveries) {
  const timeTotal = 25200
  let timeSpent = 0

  deliveries.forEach((data) => {
    let [hour, minutes, seconds] = data.split(':').map(Number)
    timeSpent = timeSpent + (hour * 3600) + (minutes * 60) + seconds
  });
  
  let difference = Math.abs(timeSpent - timeTotal);
  let hour = parseInt(difference / 3600)
  let minutes = parseInt((difference % 3600) / 60)
  let seconds = parseInt((difference % 60))
  
  hour = `${hour}`.padStart(2, '0')
  minutes = `${minutes}`.padStart(3, ':0')
  seconds = `${seconds}`.padStart(3, ':0')

  const isTimeCorrect = ((timeSpent - timeTotal) < 0) ? '-' : ''
  const result = isTimeCorrect.concat(hour,minutes, seconds)
  return result
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]) )// '-02:20:00'
console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])) // "-00:00:01"


// calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// // '00:30:00'

// calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]); // '-05:29:00'
