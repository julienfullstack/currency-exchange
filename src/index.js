import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './business-logic.js'; 

function handleFormSubmission(event) {
  event.preventDefault();
  CurrencyConverter;  
  document.getElementById("amount").value = null;
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});