const n = parseInt(readline()); // the number of temperatures to analyse
let nearZero = 5526;

for (let i = 0; i < n; i++) {
  const t = parseInt(i); // a temperature expressed as an integer ranging from -273 to 5526
  if (Math.abs(t) < Math.abs(nearZero)) nearZero = t;
  if (Math.abs(t) == Math.abs(nearZero)) if (t > 0) nearZero = t;
}
