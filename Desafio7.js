// ENCONTRAR O ERRO NO LOOP, NO EXERCÍCIO DE MÉDIA DO ALUNOS.

function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let media = soma / notas.length;
    return media
}

const notasAluno = [7, 10, 5, 8, 9]
const mediaFinal = calcularMedia(notasAluno)
console.log(mediaFinal)


