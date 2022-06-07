function humanReadable (seconds) {
  if (seconds>359999) {
    return "Too big number";
  }

  let hours = Math.floor(seconds/3600);
  let minutes = Math.floor( (seconds - hours*3600)/60 );
  let sec = seconds - 3600*hours - 60*minutes;

  let formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    sec.toString().padStart(2, '0')
  ].join(':');

  return formatted;
}

console.log(humanReadable(0));
console.log(humanReadable(59));//, '00:00:59', 'humanReadable(59)'
console.log(humanReadable(3599));//, '00:59:59'
console.log(humanReadable(3600));

/*
SOLUTIONS
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');


*/
