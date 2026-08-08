const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

const rates = {
  USD: 1,
  BIF: 2960,
  EUR: 0.86,
  AED: 3.67,
  GBP: 0.74
};

function convertCurrency() {
  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    result.innerHTML = "Please enter an amount.";
    return;
  }

  const fromRate = rates[fromCurrency.value];
  const toRate = rates[toCurrency.value];

  const converted = (amount / fromRate) * toRate;

  result.innerHTML = `
    <p>${amount} ${fromCurrency.value}</p>
    <h2>${converted.toLocaleString(undefined, {
      maximumFractionDigits: 2
    })} ${toCurrency.value}</h2>
  `;
      }
