// ITERANDO UM ARRAY
const numeros = [10,11,12,13,14,15]

// forEach - essa é a melhor forma e, mais bonita
numeros.forEach((numero) => console.log(numero))

// pode ser dessa forma embaixo também
for(numero of numeros)
    console.log(numero)


const frase = 'Olá meu nome é Marcos Henrique e estou estudando Javascript.'
const result = frase.split(' ');
console.log(result)
console.log(result.join('-'));

// INPUT - RECEBENDO DADOS DE UM USUÁRIO. - MANIPULANDO O DOM
