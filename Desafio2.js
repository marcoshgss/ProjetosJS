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
    return numero1>numero2 ? numero1:numero2
}
