//FACTORY FUNCIONS
 const celular = {
    marcaCelular: 'NOKIA',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...');
    }
 }

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar: function(){
            console.log('Fazendo ligação...');
        }
     }
}

const celular1 = criarCelular('Iphone',6.5,4000);
console.log(celular1)


// CONSTRUCTOR FUNCIONS

// Pascal Case
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...");
    }
}

const celular2 = new Celular('Xiaomi', 6.4, 6000);
console.log(celular2)

function Carro(fabricacao, modelo, ano, proprietario,mostreCarro) {
    this.fabricacao = fabricacao,
    this.modelo = modelo,
    this.ano = ano,
    this.proprietario = proprietario,
    this.mostreCarro = mostreCarro,
    this.retornar = function() {
        console.log()
    }
  }

const carro = new Carro('nacional', 'Gol', 2015, 'João Pedro', null);
console.log(carro)

