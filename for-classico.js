// Aprendendo a usar o For
const notas = [10,3,8,7,10];

//for(let i = 0; i < notas.length;i++){
//    console.log(`O indice é ${i} e na a nota dele é ${notas[i]}`);
//}


//for(let indice = 3; indice <notas.length; indice++ ){
//    console.log(`O indice é ${indice} e na a nota dele é ${notas[indice]}`);
//}


let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média da notas é ${media}`);

