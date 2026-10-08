const alunos = ['Guilherme','Gustavo','Bruno','Maria'];
const media = [10,8,9.5,8.5];

const lista = [alunos,media];

function exibirNomeEMedia(aluno) {
    if (lista[0].includes(aluno)){
        const [alunos,medias] = lista;
        const incluide = alunos.indexOf(aluno);
        const mediaAluno = medias[incluide];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log('Este nome não esta a lista');
    }
}

exibirNomeEMedia('Guilherme');
exibirNomeEMedia('Maria');
exibirNomeEMedia('joão');
