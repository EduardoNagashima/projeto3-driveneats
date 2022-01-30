let nomePrato = null;
let precoPrato = null;

let nomeBebida = null;
let precoBebida = null;

let nomeSobremesa = null;
let precoSobremesa = null;

let soma = 0;

function selecionarPrato(pratoEscolhido, nome, preco) {
    let prato = document.querySelector("." + pratoEscolhido);
    let selecionado = document.querySelector(".prato .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    nomePrato = nome;
    precoPrato = preco;
    prato.classList.add("selecionado");
    checkout();
}

function selecionarBebida(bebidaEscolhida, nome, preco) {
    let bebida = document.querySelector("." + bebidaEscolhida);
    let selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    }
    bebida.classList.add("selecionado");
    nomeBebida = nome;
    precoBebida = preco;
    checkout();
}

function selecionarSobremesa(sobremesaEscolhida, nome, preco) {
    let sobremesa = document.querySelector('.' + sobremesaEscolhida);
    let selecionado = document.querySelector('.sobremesa .selecionado');
    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
    }
    sobremesa.classList.add('selecionado');
    nomeSobremesa = nome;
    precoSobremesa = preco;
    checkout();
}

function checkout() {
    if (nomePrato !== null && nomeBebida !== null && nomeSobremesa !== null) {

        let confirmar = document.querySelector(".confirmar");
        confirmar.classList.add('fechar-pedido');
        confirmar.innerHTML = 'Fechar Pedido';

    }
}

function fecharPedido() {
    soma = 0;
    let fecharPedido = document.querySelector('.fechar-pedido');

    if (fecharPedido !== null) {
        soma = (precoBebida + precoPrato + precoSobremesa);
        soma = soma.toFixed(2);
        let escondido = document.querySelector('.escondido');
        escondido.classList.remove('escondido');


        return soma;
    }


}

function cancelar() {
    let cancelar = document.querySelector(".confirmar-pedido");
    cancelar.classList.toggle('escondido');
}