let nomePrato = null;
let preciPrato = null;
let nomeBebida = null;
let precoBebida = null;
let nomeSobremesa = null;
let precoSobremesa = null;
let soma = null;

function selecionarPrato(pratoEscolhido, nome, preco) {
    let prato = document.querySelector('.' + pratoEscolhido);
    let check = document.querySelector('.' + pratoEscolhido + ' ion-icon');
    let checkado = document.querySelector('.prato .check');
    let selecionado = document.querySelector('.prato .selecionado');

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        checkado.classList.remove('check');
    }

    nomePrato = nome;
    precoPrato = preco.toFixed(2);
    prato.classList.add("selecionado");
    check.classList.add("check");
    checkout();
}

function selecionarBebida(bebidaEscolhida, nome, preco) {
    let bebida = document.querySelector('.' + bebidaEscolhida);
    let check = document.querySelector('.' + bebidaEscolhida + ' ion-icon');
    let checkado = document.querySelector('.bebida .check');
    let selecionado = document.querySelector('.bebida .selecionado');

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        checkado.classList.remove('check');
    }
    bebida.classList.add('selecionado');
    check.classList.add('check');
    nomeBebida = nome;
    precoBebida = preco.toFixed(2);


    checkout();
}

function selecionarSobremesa(sobremesaEscolhida, nome, preco) {
    let sobremesa = document.querySelector('.' + sobremesaEscolhida);
    let selecionado = document.querySelector('.sobremesa .selecionado');
    let checkado = document.querySelector('.sobremesa .check');
    let check = document.querySelector('.' + sobremesaEscolhida + ' ion-icon');

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        checkado.classList.remove('check');
    }
    sobremesa.classList.add('selecionado');
    check.classList.add('check');
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
        valorPrato.innerHTML = (precoPrato.replace('.', ','));

        bebida = document.querySelector('.bebida-pedido .bebida');
        bebida.innerHTML = nomeBebida;

        valorBebida = document.querySelector('.bebida-pedido .precoBebida');
        valorBebida.innerHTML = (precoBebida.replace('.', ','));

        sobremesa = document.querySelector('.sobremesa-pedido .sobremesa');
        sobremesa.innerHTML = nomeSobremesa;

        valorSobremesa = document.querySelector('.sobremesa-pedido .precoSobremesa');
        valorSobremesa.innerHTML = (precoSobremesa.replace('.', ','));

        precoTotal = document.querySelector('.total-pedido .precoTotal');
        precoTotal.innerHTML = ('R$ ' + soma.toFixed(2).replace('.', ','));

        let escondido = document.querySelector('.escondido');
        escondido.classList.remove('escondido');


    }
}

function pedir() {
    nome = prompt('Qual é o seu nome?');
    endereco = prompt('Qual é seu endereço?');

    msg = encodeURIComponent('Olá, gostaria de fazer o pedido:' + '\n' + '- Prato: ' + nomePrato + '\n' + '- Bebida: ' + nomeBebida + '\n' + '- Sobremesa: ' + nomeSobremesa + '\n' + 'Total: R$ ' + soma.toFixed(2) + '\n' + '\n' + 'Nome: ' + nome + '\n' + 'Endereço: ' + endereco);
    window.open('https://wa.me/5544999931650?text=' + msg);
}

function cancelar() {
    let cancelar = document.querySelector(".confirmar-pedido");
    cancelar.classList.toggle('escondido');
}