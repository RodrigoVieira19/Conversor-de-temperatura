function abrirRea() {
  document.querySelector(".Rea").style.display = "block";
  document.querySelector(".Fah").style.display = "none";
  document.querySelector(".Kel").style.display = "none";
  document.querySelector(".Ran").style.display = "none";
  document.getElementsByTagName("h1")[0].innerHTML = "Celsius to Réaumur";
}

function abrirKel() {
  document.querySelector(".Kel").style.display = "block";
  document.querySelector(".Fah").style.display = "none";
  document.querySelector(".Rea").style.display = "none";
  document.querySelector(".Ran").style.display = "none";
  document.getElementsByTagName("h1")[0].innerHTML = "Celsius to Kelvin";
}

function abrirRan() {
  document.querySelector(".Ran").style.display = "block";
  document.querySelector(".Kel").style.display = "none";
  document.querySelector(".Fah").style.display = "none";
  document.querySelector(".Rea").style.display = "none";
  document.getElementsByTagName("h1")[0].innerHTML = "Celsius to Rankine";
}
function abrirFah() {
  document.querySelector(".Fah").style.display = "block";
  document.querySelector(".Kel").style.display = "none";
  document.querySelector(".Ran").style.display = "none";
  document.querySelector(".Rea").style.display = "none";
  document.getElementsByTagName("h1")[0].innerHTML = "Celsius to Fahrenheit";
}
//variaveis
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let reaumur = document.getElementById("reaumur");
let rankine = document.getElementById("rankine");

function celToFar() {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
  console.log(output);
}

function farToCel() {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
  console.log(output);
}

function celToRea() {
  let output = (parseFloat(celsius.value) * 4) / 5;
  reaumur.value = parseFloat(output.toFixed(2));
  console.log(output);
}

function celToKel() {
  let output = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(output.toFixed(2));
  console.log(output);
}

function celToRan() {
  let output = ((parseFloat(celsius.value) + 273.15) * 9) / 5;
  rankine.value = parseFloat(output.toFixed(2));
  console.log(output);
}
