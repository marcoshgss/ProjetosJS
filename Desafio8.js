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
    console.log(a + ' equivale a ' + result * 100 + '% de ' + b);
}

qtnPorcento(50, 100);

const object = {
    nome: null,
    sobrenome: 'Henrique',
    idade: 22
}

// Desafio, verificar cada elemento do object, se estiver null, apague esse elemento e mostre o restante.
function excluirItemObject(object) {
    if (object.nome === null) {
        delete object.nome
    } else if (object.sobrenome === null){
        delete object.sobrenome
    } else if (object.idade === null){
        delete object.idade
    }
    console.log(object)
}

excluirItemObject(object)


