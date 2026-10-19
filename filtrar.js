const alunos = ['Vini', 'Joao', 'Maria', 'Pedro', 'Ana','Lucas', 'Carla', 'Fernanda'];
const notas = [10, 7, 9, 6, 8, 5, 7, 9];

const alunosReprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < 7;
});
console.log(`Alunos reprovados: ${alunosReprovados}`);