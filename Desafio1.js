// IMPRIMIR 3 VARIÁVEIS DIFERENTES

let dados = {
    nome: "maria",
    idade: 38,
    sexo: "feminina"
}

console.log(dados.sexo)

let nome = "Patricia"
let sexo = "F"
let cidade = "Recife"

console.log(nome)
console.log(sexo)
console.log(cidade)

// IMPLEMENTAR UM ARRAY

let amigo = ['Adelson', 22, 'ipan']
console.log(amigo)
console.log(amigo.length)
console.log(amigo[0])
console.log(amigo[1])
console.log(amigo[2])

// APRENDENDO E IMPLEMENTANDO FUNÇÕES

let atual = 40

function mudarIdade(idade1, idade2) {
    atual = idade1 + ' ' + idade2
    return atual
}
console.log(mudarIdade(5,10))
console.log(atual)

// SOMANDO NÚMEROS
function somarNum(n1, n2, n3) {
    console.log(arguments)
    return n1 + n2 + n3
}
console.log(somarNum(20,20,20))

// FAÇA DE OUTRA FORMA SIMPLES
const n1 = 4
const n2 = 4
const n3 = 4
const multiplicando = n1 * n2 * n3
console.log(multiplicando)

function somasdosNumeros(n1, n2, n3) {
    let result = n1+n2+n3
    return result
}
console.log(somasdosNumeros(100,200,200))
