// Desafio, mostrar a quantidade de vezes que uma letra aparece em uma palavra.

function stringCounter(letter, string) {
    contador = 0;
    for (const i in string) {
        if (letter === string[i]) {
            contador++
        }
    }
    //  console.log('Essa letra aparece ' + contador + ' vezes!')
    console.log(`Essa letra aparece ${contador} vezes!`)
}

stringCounter('a', 'samara')


// Desafio, receber dois números (a e b). Deve retornar quantos % b é de a

function qtnPorcento(a, b) {
    let result = a / b;
    console.log(a + ' equivale a ' + result * 100 +'% de ' + b);
}

qtnPorcento(50, 100);