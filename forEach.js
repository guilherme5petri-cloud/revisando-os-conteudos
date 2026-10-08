// metodo 1
const notas = [7, 8, 9, 10];

let somaDasNotas = 0;

notas.forEach(function(nota){
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);

// metodo 2


const notas2 = [7, 8, 9, 10];
let somaDasNotas2 = 0;
notas2.forEach(somaNotas);

function somaNotas(nota){
    somaDasNotas2 += nota;
}

const media2 = somaDasNotas2 / notas2.length;
console.log(`A média das notas é: ${media2}`);