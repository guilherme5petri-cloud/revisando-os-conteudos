const listaEstudantes = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas', 'Carla', 'Fernanda'];
console.log(listaEstudantes);


listaEstudantes.splice(1,2,'Rodrigo');
console.log(listaEstudantes);


// Exercício de fixação
const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)