let nomePrato, preciPrato, nomeBebida, precoBebida, nomeSobremesa, precoSobremesa, soma = null;

function selecionarPrato(pratoEscolhido, nome, preco) {
    let prato = document.querySelector("." + pratoEscolhido);
    let selecionado = document.querySelector(".prato .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    nomePrato = nome;
    precoPrato = preco.toFixed(2);
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
    precoBebida = preco.toFixed(2);
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
    precoSobremesa = preco.toFixed(2);
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
    // resetando o valor total da compra.
    let fecharPedido = document.querySelector('.fechar-pedido');

    if (fecharPedido !== null) {
        soma = parseFloat(precoBebida) + parseFloat(precoPrato) + parseFloat(precoSobremesa);

        prato = document.querySelector('.prato-pedido .prato');
        prato.innerHTML = nomePrato;

        valorPrato = document.querySelector('.prato-pedido .precoPrato');
        valorPrato.innerHTML = ('R$ ' + precoPrato);

        bebida = document.querySelector('.bebida-pedido .bebida');
        bebida.innerHTML = nomeBebida;

        valorBebida = document.querySelector('.bebida-pedido .precoBebida');
        valorBebida.innerHTML = ('R$ ' + precoBebida);

        sobremesa = document.querySelector('.sobremesa-pedido .sobremesa');
        sobremesa.innerHTML = nomeSobremesa;

        valorSobremesa = document.querySelector('.sobremesa-pedido .precoSobremesa');
        valorSobremesa.innerHTML = ('R$ ' + precoSobremesa);

        precoTotal = document.querySelector('.total-pedido .precoTotal');
        precoTotal.innerHTML = ('R$ ' + soma.toFixed(2));

        let escondido = document.querySelector('.escondido');
        escondido.classList.remove('escondido');
    }
}

function cancelar() {
    let cancelar = document.querySelector(".confirmar-pedido");
    cancelar.classList.toggle('escondido');
}