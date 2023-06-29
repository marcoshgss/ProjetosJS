// DATE
let data1 = new Date();
let data2 = new Date('July 29 2023 10:00');
let data3 = new Date(2023, '03', '06', 10, 30);

console.log(data1);
console.log(data3);

// Javascript - OBJETO ENDEREÇO
// CRIAR UM OBJETO ENDEREÇO QUE CONTÉM 
// - Rua
// - Cidade 
// - CEP
// - exibirEndereco(endereco) - no console.log();
let endereco = {
    rua: 'São vicente',
    cidade: 'São Paulo',
    CEP: 43554
};

function mostrarEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave])
}

mostrarEndereco(endereco)

// IGUALDADE DE OBJETOS
function Endereco(rua, cidade, CEP) {
    this.rua = rua,
        this.cidade = cidade,
        this.CEP = CEP
}

const endereco1 = new Endereco('São vicente', 'São Paulo', 43554)
const endereco2 = new Endereco('São vicente', 'São Paulo', 43554)

function saoIguais(endereco1, endereco2) {
    // Comparar de as propriedades são iguais   
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.CEP === endereco2.CEP
}

console.log(saoIguais(endereco1, endereco2))

function enderecoMemoriaIgual(endereco1,endereco2) {
    //  comparando se o objeto aponta para o mesmo local na memória 
    return endereco1 === endereco2
}

console.log(enderecoMemoriaIgual(endereco1,endereco2))

// CRIE UM OBJETO DE POSTAGEM DE BLOG QUE VAI CONTER AS SEGUINTES PROPRIEDADES:
// O NOME VAI SER - POSTAGEM

// - titulo
// - mensagem
// - autor 
// - vizualizacoes
// - comentarios 
//     (autor, mensagem)
// estarAovivo

let postagem = {
    titulo: 'Receitas Fitness',
    mensagem: '4 dicas sobre alimentação',
    autor: 'Fulano',
    visualizacoes: 1000,
    comentarios: [
         { autor: 'Beltrano',mensagem: 'Gostei muito, vou aderir'},
         { autor: 'Beltrano',mensagem: 'Gostei muito, vou aderir'}
        ],
    estarAovivo: true
}

 console.log(postagem)
// console.log(chave,postagem.comentarios)

function mostrarPostagem(postagem){
    for(let chave in postagem){
        console.log(chave, postagem[chave])
    }
}
mostrarPostagem(postagem)