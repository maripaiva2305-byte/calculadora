function adicionar(valor) {
    document.getElementById('tela').value += valor;
}

function calcular() {
    try {
        let conta = document.getElementById('tela').value;
        document.getElementById('tela').value = eval(conta);
    } catch {
        alert("Expressão inválida!");
    }
}

function excluir() {
    let tela = document.getElementById('tela');
    tela.value = tela.value.slice(0, -1);
}

function limpar() {
    document.getElementById('tela').value = '';
}
