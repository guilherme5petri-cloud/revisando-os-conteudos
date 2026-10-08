const notas = [10,3,8,7,10];

let somaDasNotas = 0;
for(let nota of notas){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A sua média é ${media}`);
