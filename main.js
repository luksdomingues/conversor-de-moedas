document.getElementById("convertButton").addEventListener("click", () =>{
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        alert("Por Favor, insira um valor válido!");
        return;
    }

    const rates = {
        USD: { BRL: 5.30, EUR: 0.85, USD: 1 },
        BRL: { USD: 0.19, EUR: 0.16, BRL: 1 },
        EUR: { USD: 1.18, BRL: 6.36, EUR: 1 },
    };

    const rate = rates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById("result").innerText = `Valor Convertido: ${convertedAmount} ${toCurrency}`;
});