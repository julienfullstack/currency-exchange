import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency-converter.js'; 

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyConverter = new CurrencyConverter();
  currencyConverter.convertCurrency();
  document.getElementById("amount").value = null;
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});