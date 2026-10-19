const nota = [9,10,6,8.5,7.5];

//Exemplo(1) de função callback

//const notasAtualizadas = nota.map(function(nota){
//    return nota + 1;
//});

//Exemplo(2) de função callback
const notasAtualizadas = nota.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);

// usando map para padronizar nomes
const nomes = ['guilherme PETri','GUStavo OLIVEira','BRUNO trevisan'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizados);

// teste de for para transformar uma string em maiúsculas
const nome = "Alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

// teste para concatenar strings
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura";
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto);  //Fundamentos de JS Alura