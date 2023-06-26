// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor() - essa função arredonda para baixo
// var num = 13.15
// Math.floor(num) - a saída foi 13
// caso pontos maior que 12 -> "Carteira Suspensa"

verificarVelocidade(70)
verificarVelocidade(79)
verificarVelocidade(130)
function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5

    if (velocidade <= velocidadeMaxima) {
        console.log('OK')
    }
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
        if (pontos >= 12) {
            console.log('Carteira Suspensa')
        } else {
            console.log('Pontos', pontos)
        }
    }
}
