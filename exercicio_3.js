var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let vlrHora = lines[0];
let hrsMes = lines[1];

let totalMes = vlrHora * hrsMes;
let inss = totalMes * 0.11;
let iprf = totalMes * 0.08;
let sindicato = totalMes *0.05;
let final = totalMes - inss - iprf - sindicato;

console.log(`O seu salário bruto é: ${totalMes}`);
console.log(`Você tem de desconto do IRPF o valor de R$ ${inss}`);
console.log(`Você tem de desconto do INSS o valor de R$ ${iprf}`);
console.log(`Você tem de desconto do SINDICATO o valor de R$ ${sindicato}`);
console.log(`E o valor final do seu salário é: ${final}`);