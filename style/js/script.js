document.querySelector("#inputValor").addEventListener("change", calcularValor)
document.querySelector("#inputAvaliacao").addEventListener("change", calcularAvaliacao)

function calcularValor() {
    let valor = inputValor.value
    outputValor.innerHTML = `R$${valor}`
}

function calcularAvaliacao() {
    let avaliacao = inputAvaliacao.value
    outputAvaliacao.innerHTML = `${avaliacao} estrelas`
}