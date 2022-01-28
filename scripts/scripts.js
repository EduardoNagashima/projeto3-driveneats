function selecionarPrato1() {
    let prato = document.querySelectorAll(".prato .card");
    if (prato[0].classList.contains("selecionado") == false) {
        prato[0].classList.add("selecionado");
        prato[1].classList.remove("selecionado");
        prato[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarPrato2() {
    let prato = document.querySelectorAll(".prato .card");
    if (prato[1].classList.contains("selecionado") == false) {
        prato[1].classList.add("selecionado");
        prato[0].classList.remove("selecionado");
        prato[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarPrato3() {
    let prato = document.querySelectorAll(".prato .card");
    if (prato[2].classList.contains("selecionado") == false) {
        prato[2].classList.add("selecionado");
        prato[1].classList.remove("selecionado");
        prato[0].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarBebida1() {
    let bebida = document.querySelectorAll(".bebida .card");
    if (bebida[0].classList.contains("selecionado") == false) {
        bebida[0].classList.add("selecionado");
        bebida[1].classList.remove("selecionado");
        bebida[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarBebida2() {
    let bebida = document.querySelectorAll(".bebida .card");
    if (bebida[1].classList.contains("selecionado") == false) {
        bebida[1].classList.add("selecionado");
        bebida[0].classList.remove("selecionado");
        bebida[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarBebida3() {
    let bebida = document.querySelectorAll(".bebida .card");
    if (bebida[2].classList.contains("selecionado") == false) {
        bebida[2].classList.add("selecionado");
        bebida[1].classList.remove("selecionado");
        bebida[0].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarSobremesa1() {
    let sobremesa = document.querySelectorAll(".sobremesa .card");
    if (sobremesa[0].classList.contains("selecionado") == false) {
        sobremesa[0].classList.add("selecionado");
        sobremesa[1].classList.remove("selecionado");
        sobremesa[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarSobremesa2() {
    let sobremesa = document.querySelectorAll(".sobremesa .card");
    if (sobremesa[1].classList.contains("selecionado") == false) {
        sobremesa[1].classList.add("selecionado");
        sobremesa[0].classList.remove("selecionado");
        sobremesa[2].classList.remove("selecionado");
    }
    fecharPedido();
}

function selecionarSobremesa3() {
    let sobremesa = document.querySelectorAll(".sobremesa .card");
    if (sobremesa[2].classList.contains("selecionado") == false) {
        sobremesa[2].classList.add("selecionado");
        sobremesa[1].classList.remove("selecionado");
        sobremesa[0].classList.remove("selecionado");
    }
    fecharPedido();
}

function fecharPedido() {
    let pratoSelecionado = false;
    let bebidaSelecionada = false;
    let sobremesaSelecionada = false;

    let prato = document.querySelectorAll(".prato .card");
    prato.forEach(prato => {
        if (prato.classList.contains("selecionado")) {
            pratoSelecionado = true;

        }
    });

    let bebida = document.querySelectorAll(".bebida .card");
    bebida.forEach(bebida => {
        if (bebida.classList.contains("selecionado")) {
            bebidaSelecionada = true;

        }
    });

    let sobremesa = document.querySelectorAll(".sobremesa .card");
    sobremesa.forEach(sobremesa => {
        if (sobremesa.classList.contains("selecionado")) {
            sobremesaSelecionada = true;

        }
    });

    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
        let botaoConfirmar = document.querySelector(".confirmar");
        botaoConfirmar.innerHTML = "Fechar Pedido"
        botaoConfirmar.classList.add("fechar-pedido");
    }
}