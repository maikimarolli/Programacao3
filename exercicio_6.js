var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

let alunos = [];

let codAlto;
let codBaixo;
let codGordo;
let codMagro;

let pesoMagro = 9999.0;
let pesoGordo = 0.0;
let altM = 0.0;
let altB = 9999.0;

for(let i = 0; i < lines.length; i++)
{
    let string = lines[i].split(',');
    let aluno = {
        cod: string[0],
        altura: string[1],
        peso: string[2].trim()
    }

    alunos.push(aluno);
}

 for(let aluno of alunos)
 {
     if(parseFloat(aluno.peso) < pesoMagro)
     {
         codMagro = aluno.cod;
         pesoMagro = aluno.peso;
     }
     if(parseFloat(aluno.peso) > pesoGordo)
     {
         codGordo = aluno.cod;
         pesoGordo = aluno.peso;
     }

     if(parseFloat(aluno.altura) > altM)
     {
         codAlto = aluno.cod;
         altM = aluno.altura;
    }
    if(parseFloat(aluno.altura) < altB)
    {
        codBaixo = aluno.cod;
        altB = aluno.altura;
    }
 }

for(let aluno of alunos)
{
    if(aluno.cod == codAlto)
    {
        console.log(`O aluno mais alto é o aluno ${aluno.cod} com ${aluno.altura} metros.`);
    }

    if(aluno.cod == codBaixo)
    {
        console.log(`O aluno mais baixo é o aluno ${aluno.cod} com ${aluno.altura} metros.`);
    }

    if(aluno.cod == codMagro)
    {
        console.log(`O aluno mais magro é o aluno ${aluno.cod} com ${aluno.peso} kg.`);
    }

    if(aluno.cod == codGordo)
    {
        console.log(`O aluno mais gordo é o aluno ${aluno.cod} com ${aluno.peso} kg.`);
    }
}

let mediaP = 0;
let mediaA = 0;
let cont = 0;

for(let aluno of alunos)
{
    cont++;
    mediaP += parseFloat(aluno.peso);
    mediaA += parseFloat(aluno.altura);
}

console.log(`Media de altura => ${mediaA/cont} m`);
console.log(`Media de peso => ${mediaP/cont} kg`);
