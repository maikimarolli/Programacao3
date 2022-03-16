var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let nome = lines[0];
let idade = lines[1];

console.log(`${nome}, você já viveu ${idade*365} dias.`);