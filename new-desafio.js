// 1)Função que recebe um nome como parâmetro e exibe uma saudação personalizada no console
let nomeSaudacao = (nome) => console.log(`Olá, ${nome}! Seja bem-vindo(a) ao meu teste !`);
//nomeSaudacao("Guilherme");
//nomeSaudacao("Gustavo");
//nomeSaudacao("Vera");
//nomeSaudacao("Bruno");

// 2) função recebe a idade de uma pessoa como parâmetro e retorna true se a pessoa for maior de idade e false se não for
function maiorIdade(idade){
    if (idade >= 18) {
        return true;
    } else{
        return false;
    }
}
//console.log(maiorIdade(17));
//console.log(maiorIdade(20));

//
const valores = [];

valores[1] = "Elemento 1";
valores[3] = "Elemento 3";
valores[7] = "Elemento 7";

//console.log(valores)
//console.log(valores.length)


// Inicializando o array com cinco elementos
let meuArray = [10, 20, 30, 40, 50];

// Exibindo o array antes da alteração
//console.log("Array antes da alteração: ", meuArray);

// Atribuindo um novo valor para a primeira posição (índice 0) do array
meuArray[0] = 5;

// Exibindo o array depois da alteração
//console.log("Array depois da alteração: ", meuArray);


function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2); // Concatena os dois arrays
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); // Saída: [1, 2, 3, 4, 5, 6]

let i = 5;
console.log(i++); // Saída: 5 (retorna o valor atual de i)
console.log(i);   // Saída: 6 (i foi incrementado após a execução)

let j = 8;
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)