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
    this.marcaCelular,
    this.tamanhoTela,
    this.capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }
}

const celular2 = new Celular('Xiome', 6.4, 6000)