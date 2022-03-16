var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let popA = parseInt(lines[0]);
let txA = parseFloat(lines[1]);

let popB = parseInt(lines[2]);
let txB = parseFloat(lines[3]);

let cont = 0;

if(popA > popB)
 {
     while(popB < popA)
     {
         popB = popB + (popB * (txB / 100));
         popA = popA + (popA * (txA /100));
         cont++;
     }
     console.log(`Levou ${cont} anos para B alcancar o A`);
 }
 else {
     while(popA < popB)
     {
         popB = popB + (popB * (txB / 100));
         popA = popA + (popA * (txA / 100));
         cont++;
     }
     console.log(`Levou ${cont} anos para A alcancar o B`);
 }
