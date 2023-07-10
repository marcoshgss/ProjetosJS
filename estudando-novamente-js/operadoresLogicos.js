// Operador ternário
let pontos = 300
let tipo = pontos > 100 ? 'Premium' : 'comum'
console.log(tipo)

// Operadores lógicos e(&&) ou(||)

let maiorDeIdade = true
let possueCarteiraDeTrabalho = false
let podeAplicarPraVaga = maiorDeIdade && possueCarteiraDeTrabalho
let podeAplicarPraVaga1 = maiorDeIdade || possueCarteiraDeTrabalho
console.log('Pode Aplicar', podeAplicarPraVaga)

let candidatoRecusado = !podeAplicarPraVaga
console.log('Candidato Recusado', candidatoRecusado)