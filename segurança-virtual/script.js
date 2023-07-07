function verificarEntrada() {
    let nomeConvidado = document.getElementById('name').value;
    listaDeConvidados = ['Matheus', 'Maria', 'João', 'Beto', 'Nathan', 'Izabela']

    if (listaDeConvidados.includes(nomeConvidado)) {
        document.getElementById('permissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('permissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}