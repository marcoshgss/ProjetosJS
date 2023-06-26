// DIVISÍVEL POR 3 => Fizz
// DIVISÍVEL POR 5 => Buzz
// DIVISÍVEL POR 3 E 5 => FizzBuzz  
// NÃO DIVISIVEL POR 3 OU 5 => Entrada
// NÃO É UM NÚMERO => 'Não é um número!'              

const result = fizzBuzz(20);
console.log(result)
function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return 'Não é um número!'
    } if (entrada % 3 === 0) {
        return 'Fizz'
    } if (entrada % 5 === 0) {
        return 'Buzz'
    } if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz'
    } return entrada
} 

//const entradas = (20)
//console.log(entradas)