**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let nearZero = 5526
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if(Math.abs(t) < Math.abs(nearZero))
        nearZero = t;
    if(Math.abs(t) == Math.abs(nearZero))
        if(t > 0)
            nearZero = t;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
if(nearZero != 5526)
    console.log(nearZero);
else
    console.log(0)