// Escreva  uma função que usa 2 números e retorna o maior entre eles.

function maiorEntreEles(num1, num2) {
    if (num1 > num2) {
        return (`Esse número é maior: ${num1}`)
    } else if (num2 > num1) {
        return (`Esse número é maior que o outro: ${num2}`)
    }
}
console.log(maiorEntreEles(1, 2))


const maximo = (7, 10)
function oMaiorNumero(n1, n2) {
    if (n1 > n2) {
        return n1
    } else return n2
}
console.log(maximo)



const oMaiorNumeroo = (numero1, numero2) => {
    return numero1 > numero2 ? numero1 : numero2
}


// CRIAR UM MÉTODO PARA LER PROPRIEDADES DE UM OBJETO E
// EXIBIR SOMENTE AS PROPRIEDADES DO TIPO STRING QUE ESTÃO NESSE OBJETO
const livro = {
    cordolivro: 'Azul',
    qntpagina: 100,
    escritor: 'Mario',
    categoria: 'ficticio'
}

mostrarAsPropriedades(livro)
function mostrarAsPropriedades(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop])
        }
    }
}

// CRIAR FUNÇÃO SOMAR QUE RETORNA A SOMA DE TODOS OS MULTIPLOS DE 3 E 5

// MULTIPLOS DE 3
// 3,6,9
// MULTIPLOS DE 5
// 5,10

// SOMANDO OS MULTIPLOS
// ARMAZENAR OS MULTIPLOS DE 3
// ARMAZENAR OS MULTIPLOS DE 5
// SOMAR OS DOIS

somar(10)
function somar(limites) {
    let multiplosDe3 = 0
    let multiplosDe5 = 0
    for (i = 0; i <= limites; i++) {
        if (i % 3 === 0) {
            multiplosDe3 += i
        } if (i % 5 === 0) {
            multiplosDe5 += i
        }
    }
    console.log(multiplosDe3 + multiplosDe5)
}

// EXERCÍCIO NOTA ESCOLAR
// OBTER A MÉDIA A PARTIR DE UM ARRAY

const arrayDasNotas = [70, 70, 80]

console.log(mediaDoAluno(Array))
function mediaDoAluno(notas) {
    let somar = 0
    for (let nota in notas) {
        somar += nota
    }
    const media = somar / (notas.length)

    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
}
