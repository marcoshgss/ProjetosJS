// INTRODUÇÃO AO ARRAYS
// ADD NOVOS ELEMENTOS
// ENCONTRAR ELEMENTOS
// REMOVER ELEMENTOS
// DIVIDIR ELEMENTOS
// DIVIDIR ARRAYS
// COMBINAR ARRAYS



// ADD NOVOS ELEMENTOS
const numeros = [1,2,3];
const numeros1 = [1,2,3];
// ADD ELEMENTO NO INÍCIO DO ARRAY
numeros.unshift(0);
console.log(numeros);

// ADD ELEMENTO NO MEIO DO ARRAY
numeros1.splice(1,0,'a');
console.log(numeros1);

// ADD ELEMENTO NO FINAL DO ARRAY
numeros1.push(4)
console.log(numeros1)



// ENCONTRAR ELEMENTOS
const numeros3 = [19,20,21,22]
console.log(numeros3.indexOf(19))

console.log(numeros3.includes(19))

// ENCONTRAR ELEMENTOS(Tipos de referência)

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}               
]

const objectMarcas = marcas.find(function(objectMarcas){
    return objectMarcas.nome === 'a';
});

console.log(objectMarcas)

// REMOVER ELEMENTOS

const caracteres = [1, 'a', 2, 'b', 3, 'c']
caracteres.push();
caracteres.unshift();
caracteres.splice();

// INÍCIO
const inicio = caracteres.shift();
console.log(inicio)
console.log(caracteres)

// MEIO
const meio = caracteres.splice(2,1);
console.log(meio)

// FIM
const fim = caracteres.pop();
console.log(fim)
console.log(caracteres)


// COMBINAR ARRAYS (juntar os arrays)
const caracteres1 = ['a', 'b', 'c', 'd', 'e']
const caracteres2 = [1, 'a', 2, 'b', 3, 'c']

// COMBINAR
const combinar = caracteres1.concat(caracteres2)
console.log(combinar)
// DIVIDIR
const cortado = combinar.slice(1,8);
console.log(cortado)