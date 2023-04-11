document.querySelector("#inputValor").addEventListener("change", calcularValor)
document.querySelector("#inputAvaliacao").addEventListener("change", calcularAvaliacao)

function calcularValor() {
    let valor = inputValor.value
    valor *= 10

    if (valor == 210) {
        outputValor.innerHTML = `+R$${valor-10},00`;
    } else {
        outputValor.innerHTML = `R$${valor},00`;
    }
}

function calcularAvaliacao() {
    let avaliacao = inputAvaliacao.value
    outputAvaliacao.innerHTML = `${avaliacao} estrelas`
}