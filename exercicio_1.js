var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let a = lines[0];
let b = lines[1];
let c = lines[2];
let x1 = 0;
let x2 = 0;

let delta = b**2 - (4 * a * c);

if (delta >= 0)
{
    x1 = (b * -1 + (Math.sqrt(delta))) / 2*a;
    x2 = (b * -1 - (Math.sqrt(delta))) / 2*a;
    console.log(x1);
    console.log(x2);
}
else {
    console.log('Delta negativo não possui raiz');
}
