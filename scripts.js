// Mapear os elementos do HTML que vamos usar
const convertButton = document.querySelector(".convert-button");
const selectTo = document.querySelector(".select-to"); // Mapear o destino
const inputValue = document.querySelector(".input-value");

const valueFromDisplay = document.querySelector(".value-from"); // O de cima (Real, Moeda a ser convertida)
const valueToDisplay = document.querySelector(".value-to"); // O de baixo (Moeda Estrangeira)

const currencyNameTo = document.getElementById("currency-name-to");
const currencyImgTo = document.getElementById("currency-img-to");

// Taxas de câmbio fictícias
const dolarHoje = 5.20;
const euroHoje = 5.60;
const libraHoje = 6.20;
const bitcoinHoje = 328000.28;

// Função principal que faz o cálculo
function converterMoedas() {
    const valorDigitado = parseFloat(inputValue.value);

    // Alerta se o valor digitado não for um número ou for menor ou igual a zero
    if (isNaN(valorDigitado) || valorDigitado <= 0) {
        alert("Por favor, digite um valor válido.");
        return;
    }

    // Mostra o valor de origem digitado em Real formatado
    valueFromDisplay.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado);

    // Verifica a moeda selecionada no 'selectTo' e calcula o destino
    if (selectTo.value === "USD") {
        const valorConvertido = valorDigitado / dolarHoje;
        valueToDisplay.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido);
    }

    if (selectTo.value === "EUR") {
        const valorConvertido = valorDigitado / euroHoje;
        valueToDisplay.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido);
    }

    if (selectTo.value === "GBP") {
        const valorConvertido = valorDigitado / libraHoje;
        valueToDisplay.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido);
    }

    if (selectTo.value === "BTC") {
        const valorConvertido = valorDigitado / bitcoinHoje;
        const valorFormatado = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(valorConvertido);

        valueToDisplay.innerHTML = valorFormatado.replace("BTC", "₿"); // Formata o valor em Bitcoin e substitui "BTC" por "₿"
    }
}

// Função para mudar os textos e imagens quando o usuário troca o Select
function mudarMoeda() {
    if (selectTo.value === "USD") {
        currencyNameTo.innerHTML = "Dólar Americano";
        currencyImgTo.src = "./assets/dolar.svg";
    }

    if (selectTo.value === "EUR") {
        currencyNameTo.innerHTML = "Euro";
        currencyImgTo.src = "./assets/Euro.svg";
    }

    if (selectTo.value === "GBP") {
        currencyNameTo.innerHTML = "Libra";
        currencyImgTo.src = "./assets/Libra.svg";
    }

    if (selectTo.value === "BTC") {
        currencyNameTo.innerHTML = "Bitcoin";
        currencyImgTo.src = "./assets/Bitcoin.svg";
    }
    // Executa a conversão automaticamente ao mudar o select
    if (inputValue.value) {
        converterMoedas();
    }
}

// Ouvintes de eventos
convertButton.addEventListener("click", converterMoedas);
selectTo.addEventListener("change", mudarMoeda);
