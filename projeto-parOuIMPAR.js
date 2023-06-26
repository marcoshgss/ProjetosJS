// RECEBER UMA QUANTIDADE DE VALORES PARA AVALIAR 
// FUNÇÃO EXIBE SE CADA VALOR É PAR OU IMPAR

// FIZ COM CADA VALOR
exibirTipo(4)
function exibirTipo(limite) {
    if (limite % 2 === 0) {
        console.log('PAR')
    } else {
        console.log('IMPAR')
    }
}


parOuImpar(5)
function parOuImpar(valores) {
    for (i = 0; i <= valores; i++) {
        if (i %2 === 0) {
            console.log(i,'PAR')
        } else {
            console.log(i,'IMPAR')
        }
    }
}