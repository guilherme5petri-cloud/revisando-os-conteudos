const alunos = ['Guilherme','Gustavo','Bruno','Maria'];
const media = [10,8,9.5,8.5];

const lista = [alunos,media];

function exibirNomeEMedia(aluno) {
    if (lista[0].includes(aluno)){
        const incluide = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][incluide];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log('Este nome não esta a lista');
    }
}

//exibirNomeEMedia('Guilherme');
//exibirNomeEMedia('Maria');
//exibirNomeEMedia('joão');


const professores = ['Leticia','Luiz','Paula','Maria','Henrique','Gabriel'];

// notas dos professores de concurso para uma vaga em uma escola privada
const notas = [8,3,1,9,7,10];

const lista02 =[professores,notas];

function exibirNomeENotasProf(professor) {
    if(lista02[0].includes(professor)){
        const incluides02 = lista02[0].indexOf(professor);
        const notasProf = lista02[1][incluides02];
        console.log(`${professor} tirou um ${notasProf} na prova`);
    }else{
        console.log('Essa nome não esta aqui na lista do concurso');
    }
}

exibirNomeENotasProf('Maria');
exibirNomeENotasProf('Henrique');
exibirNomeENotasProf('Leticia');
exibirNomeENotasProf('Gustavo');







