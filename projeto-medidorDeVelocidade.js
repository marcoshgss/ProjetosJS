// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor() - essa função arredonda para baixo
// var num = 13.15
// Math.floor(num) - a saída foi 13
// caso pontos maior que 12 -> "Carteira Suspensa"

verificarVelocidade(85)
function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        return 'OK'
    }
    else {
        const pontos = Math.floor(((velocidade - 70) / 5))
        if (pontos >= 12) {
            return 'Carteira Suspensa'
        } else {
            console.log('Pontos', pontos)
        }
    }
}
