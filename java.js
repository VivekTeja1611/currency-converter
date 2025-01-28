document.getElementById("convert").addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromcurrency").value;
  const toCurrency = document.getElementById("tocurrency").value;
  const result = document.getElementById("convertedTo");

  if (amount <= 0 || isNaN(amount)) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  fetch(
    `https://v6.exchangerate-api.com/v6/145c6a2f2037464748b82179/latest/${fromCurrency}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[toCurrency];
      result.textContent = rate
        ? `${amount} ${fromCurrency} = ${(amount * rate).toFixed(
            2
          )} ${toCurrency}`
        : "Invalid currency code or conversion error. Please try again.";
    })
    .catch(() => (result.textContent = "Conversion failed. Please try again."));
});
