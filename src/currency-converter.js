export default class CurrencyConverter {
  convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    const apiKey = process.env.API_KEY;
    const baseCurrency = "USD";

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data.result === "success") {
          const conversionRates = data.conversion_rates;
          if (currency in conversionRates) {
            const convertedAmount = amount * conversionRates[currency];
            document.getElementById("result").innerHTML = convertedAmount.toFixed(2);
          } else {
            document.getElementById("result").innerHTML = "Invalid currency entered.";
          }
        } else {
          document.getElementById("result").innerHTML = "Error retrieving conversion rates.";
        }
      })
      .catch(function(error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error retrieving conversion rates.";
      });
  }
}
