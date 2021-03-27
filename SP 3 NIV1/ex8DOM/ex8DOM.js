"use strictly";
//get elements

let num1 = parseInt(document.getElementById("1stnum").value);
let num2 = parseInt(document.getElementById("2ndnum").value);
let result = parseInt(document.getElementById("result"));

function multiply() {
  let multiplication = num1 * num2;
  result.innerHTML = multiplication;
}
