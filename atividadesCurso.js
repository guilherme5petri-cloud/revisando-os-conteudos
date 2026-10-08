// Exercício de fixação

const meApresendando = "Olá meu nome é Luiz e sou dentista";
//console.log(meApresendando.toUpperCase());

let valornull = null;
let undefalned;
//console.log(valornull)
//console.log(undefalned)

// Testando a transformação/conversão de tipos

const numero = 10;
const testo = "32";
//console.log(String(numero));
//console.log(Number(testo));
//console.log(typeof numero, typeof testo);

// Exercício de fixação

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
//console.log(`O resultado do cálculo é: ${resultado}`);

// testando a precedência de operadores

let volarFinal;
volarFinal = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
//console.log("O resultado da expressão é:", volarFinal);

let deposito = 5000;
let saque = 980;
let operacao = [deposito - saque, deposito + saque];

//console.log(`O resultado da operação é ${operacao[0]}`);
//console.log(`O resultado da operação é ${operacao[1]}`);


const valores = [10, 20, 30, 40, 50];
for (let i = 0; i < valores.length; i++){
   // console.log(`O Valor do indice ${i} é: ${valores[i]}`);
}


const notas = [7, 8, 9, 10, 6, 5, 4, 3, 2, 1];

function exibirNotas(notas){
    for(let i = 0; i < notas.length;i++){
        console.log(`O indice ${i} tem o valor de: ${notas[i]}`);
    }
}

exibirNotas(notas);
exibirNotas([100]);