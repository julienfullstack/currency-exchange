
export default class ConvertCurrency {
  var amount = document.getElementById("amount").value;
  var currency = document.getElementById("currency").value;

  const API_URL = process.env.API_KEY;

  // var apiUrl = "https://v6.exchangerate-api.com/v6/${API_URL}/latest/USD";

  fetch(`https://v6.exchangerate-api.com/v6/${API_URL}/latest/USD`)
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

// UI Logic

// function handleFormSubmission(event) {
//   event.preventDefault();
//   convertCurrency();  
//   document.getElementById("amount").value = null;
//   document.getElementById("currency").value = null;
// }

// window.addEventListener("load", function () {
//   document.querySelector('form').addEventListener("submit", handleFormSubmission);
// });
