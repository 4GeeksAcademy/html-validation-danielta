/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function validator() {
  let cardNumber = document.querySelector("#inputcard");
  let cvcNumber = document.querySelector("#inputCVC");
  let amount = document.querySelector("#dollarAmount");
  let fName = document.querySelector("#firstName");
  let lName = document.querySelector("#lastName");
  let city = document.querySelector("#city");
  let state = document.querySelector("#inputState");
  let zip = document.querySelector("#zipCode");
  let cardType = document.querySelector("#selector");
  let message = document.querySelector("#message");
  let errorList = document.querySelector("#errorList");

  if (cardNumber.value.length < 15 || cardNumber.value.length > 16) {
    let newError = document.createElement("li");
    newError.innerHTML = "Your card number is an invalid length";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    cardNumber.classList.add("bg-danger", "bg-opacity-50");
  }
  if (cvcNumber.value.length != 3) {
    let newError = document.createElement("li");
    newError.innerHTML = "Your CVC number is an invalid length";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    cvcNumber.classList.add("bg-danger", "bg-opacity-50");
  }
  if (amount.value <= 0) {
    let newError = document.createElement("li");
    newError.innerHTML = "Payment amount must be greater than 0";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    amount.classList.add("bg-danger", "bg-opacity-50");
  }
  if (fName.value == "") {
    let newError = document.createElement("li");
    newError.innerHTML = "Please enter your first name";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    fName.classList.add("bg-danger", "bg-opacity-50");
  }
  if (lName.value == "") {
    let newError = document.createElement("li");
    newError.innerHTML = "Please enter your last name";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    lName.classList.add("bg-danger", "bg-opacity-50");
  }
  if (city.value == "") {
    let newError = document.createElement("li");
    newError.innerHTML = "Please enter your city";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    city.classList.add("bg-danger", "bg-opacity-50");
  }
  if (state.value == -1) {
    let newError = document.createElement("li");
    newError.innerHTML = "Please select your state of residence";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    state.classList.add("bg-danger", "bg-opacity-50");
  }
  if (zip.value.length != 5) {
    let newError = document.createElement("li");
    newError.innerHTML = "Your zip code is invalid";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    zip.classList.add("bg-danger", "bg-opacity-50");
  }
  var radios = document.getElementsByName("flexRadioDefault");
  let checked = 0;
  for (let radiobox of radios) {
    if (radiobox.checked) checked += 1;
  }
  if (checked <= 0) {
    let newError = document.createElement("li");
    newError.innerHTML = "Please select your card type";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    cardType.classList.add("bg-danger", "bg-opacity-50");
  }
  if (message.value.length < 1) {
    let newError = document.createElement("li");
    newError.innerHTML = "Please tell us what your payment is for";
    let myList = document.getElementById("errorList");
    myList.appendChild(newError);
    message.classList.add("bg-danger", "bg-opacity-50");
  }
  if (errorList.childElementCount > 0) {
    errorList.classList.remove("d-none");
  }
}

document.querySelector("#submit").addEventListener("click", function(event) {
  event.preventDefault();
  validator();
});
