export default class CurrencyConverter {
  
  var amount = document.getElementById("amount").value;z
  var currency = document.getElementById("currency").value;
  const apiKey = process.env.API_KEY;
  const baseCurrency = "USD";

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

  return fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (data.result === "success") {
      var conversionRates = data.conversion_rates;
      var convertedAmount = amount * conversionRates[currency];
      document.getElementById("result").innerHTML = convertedAmount.toFixed(2);
    } else {
      document.getElementById("result").innerHTML = "Error retrieving conversion rates.";
    }
  })
  .catch(function(error) {
    console.log(error);
    document.getElementById("result").innerHTML = "Error retrieving conversion rates.";
  });
}
