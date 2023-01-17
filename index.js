const n = parseInt(readline()); // the number of temperatures to analyse
let nearZero = Number.POSITIVE_INFINITY;
//if(nearZero === Number.POSITIVE_INFINITY)
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
  if (Math.abs(t) < Math.abs(nearZero)) nearZero = t;
  if (Math.abs(t) == Math.abs(nearZero)) if (t > 0) nearZero = t;
}
console.error(inputs);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
if (inputs[0] === "") {
  //[i] vide je log 0, else near zero)
  console.log(0);
} else {
  console.log(nearZero);
}
