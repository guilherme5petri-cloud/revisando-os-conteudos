const listaEstudantes = ['joão','juliana','ana','Caio','Laura','Guilherme','Bruno','Gustavo','leticia','Luiz','Paula','Maria','Henrique','Isabeli','Jhonathan','camila','Isadora','Luciana','Vinicios','luan'];

const sala1 = listaEstudantes.slice(0,listaEstudantes.length /2);
const sala2 = listaEstudantes.slice(listaEstudantes.length /2)

console.log(sala2);
console.log(sala1);


const listaNumeros = [1,2,3,4,5,6,7,8,9,10];
const metadeDosNumeros1 = listaNumeros.slice(0,listaNumeros.length / 2);
const metadeDosNumeros2 = listaNumeros.slice(listaNumeros.length / 2);
console.log(metadeDosNumeros1);
console.log(metadeDosNumeros2);


const sobreNome = ['Paulo', 'Pedro', 'Lucas', 'Matheus', 'Gabriel', 'Rafael', 'Thiago', 'Bruno', 'Felipe', 'Gustavo'];

for (let sobre of sobreNome){
    console.log(sobre);
}


