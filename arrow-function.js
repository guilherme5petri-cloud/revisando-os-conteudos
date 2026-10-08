const estudanteReprovado = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovado(6, 5));
console.log(estudanteReprovado(10, 1));
