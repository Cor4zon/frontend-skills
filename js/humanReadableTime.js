function humanReadable(seconds) {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  seconds %= 60;

  minutes = (minutes > 9) ? minutes : '0' + minutes;
  hours = (hours > 9) ? hours : '0' + hours;
  seconds = (seconds > 9) ? seconds : '0' + seconds;

  return `${hours}:${minutes}:${seconds}`;
}



function humanReadable(seconds) {
    const pad = (x) => (x > 10) ? x : '0'
}