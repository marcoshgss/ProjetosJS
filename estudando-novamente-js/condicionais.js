// 6:00 até 12:00 : Bom dia!
// 12:00 até 18:00 : Boa tarde!
// caso contrário : Boa noite!

let hora = 10;

if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

