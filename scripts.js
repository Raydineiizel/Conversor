// 1. Mapear os elementos do HTML que vamos usar
const convertButton = document.querySelector(".convert-button");
const selectFrom = document.querySelector(".select-from");
const inputValue = document.querySelector(".input-value");

const valueToDisplay = document.querySelector(".value-to"); // Onde mostra o Real
const valueFromDisplay = document.querySelector(".value-from"); // Onde mostra a moeda estrangeira

const currencyNameFrom = document.getElementById("currency-name-from");
const currencyImgFrom = document.getElementById("currency-img-from");

// Taxas de câmbio fictícias (ajuste para os valores reais do dia)
const dolarHoje = 5.20;
const euroHoje = 5.60;

// Função principal que faz o cálculo
function converterMoedas() {
    const valorDigitado = parseFloat(inputValue.value);

    // Se o usuário não digitar nada ou digitar um valor inválido, para a execução
    if (isNaN(valorDigitado) || valorDigitado <= 0) {
        alert("Por favor, digite um valor válido.");
        return;
    }

    // Mostra o valor em Real formatado
    valueToDisplay.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado);

    // Verifica qual moeda foi selecionada para converter 'DE'
    if (selectFrom.value === "USD") {
        const valorConvertido = valorDigitado / dolarHoje;

        valueFromDisplay.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido);
    }

    if (selectFrom.value === "EUR") {
        const valorConvertido = valorDigitado / euroHoje;

        valueFromDisplay.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido);
    }
}

// Função para mudar os textos e imagens quando o usuário troca o Select
function mudarMoeda() {
    if (selectFrom.value === "USD") {
        currencyNameFrom.innerHTML = "Dólar Americano";
        currencyImgFrom.src = "./assets/dolar.svg";
    }

    if (selectFrom.value === "EUR") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImgFrom.src = "./assets/Euro.svg"; // Certifique-se de ter essa imagem na pasta
    }

    // Executa a conversão automaticamente ao mudar o select (opcional)
    if (inputValue.value) {
        converterMoedas();
    }
}

// Ouvintes de eventos (Listeners)
convertButton.addEventListener("click", converterMoedas);
selectFrom.addEventListener("change", mudarMoeda);