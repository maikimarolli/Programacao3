var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let ini = parseInt(lines[0]);
let fim = parseInt(lines[1]);
let primos = [];
let contDiv = 0;

for(let i = ini; i < fim; i++)
{
    contDiv = 0;
    for(let j = 0; j < 100; j++)
    {
        if(i % j == 0)
        {
            contDiv++;
        }
    }
    if(contDiv === 2)
    {
        primos.push(i);
    }
}

console.log(primos);