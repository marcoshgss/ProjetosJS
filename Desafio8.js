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
// function excluirItemObject(object) {
//     if (object.nome === null) {
//         delete object.nome
//     } else if (object.sobrenome === null) {
//         delete object.sobrenome
//     } else if (object.idade === null) {
//         delete object.idade
//     }
//     console.log(object)
// }

// excluirItemObject(object)


// Desafio, função que recebe um array de objetos com atributos : itsMe, admin, e nome.

const arrayObj = [
    { itsMe: false, admin: false, nome: 'Maria' },
    { itsMe: true, admin: true, nome: 'Marcos' }, // a
    { itsMe: false, admin: false, nome: 'Adelson' },
    { itsMe: false, admin: false, nome: 'Pedro' },
    { itsMe: false, admin: false, nome: 'Eduarda' }
];


const orgazinar = (objList) => {
    objList.sort((a, b) => {
        if (a.itsMe === true && b.itsMe === false) {
            return -1
        }
    });
    console.log(objList);
};

orgazinar(arrayObj)

// Desafio, função que receber uma string e retorna a mesma string com as letras embaralhadas.

function palavraEmbaralhada(palavra) {
    let letrasOrdenadas = palavra.split('')
    let letrasMisturadas = []

    while (letrasOrdenadas.length) {
        const sortearLetras = parseInt(Math.random() * letrasOrdenadas.length)
        const letraEscolhida = letrasOrdenadas.splice(sortearLetras, 1)[0]
        letrasMisturadas.push(letraEscolhida)

    }
    return letrasMisturadas.join('')
}
console.log(palavraEmbaralhada('paralelepipedo'))


// Desafio, função que recebe um número e um array de números. Essa função deve retornar o número de array que for mais
// próximo do primeiro número passado por parâmetro.



function valorMaisProximo(arr, valor) {
    var limite = -1, valores = arr.length;
    while (valores - limite > 1) {
        var mid = Math.round((limite + valores)/2);
        if (arr[mid] <= valor) {
            limite = mid;
        } else {
            valores = mid;
        }
    }
    if (arr[limite] == valor) valores = limite;
    return [arr[limite], arr[valores]];
}
console.log(valorMaisProximo([1,2,3,4,5,6,7,8,9,10], 3))


