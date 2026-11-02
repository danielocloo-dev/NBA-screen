const firstScreen = document.getElementById("first-screen");
const secondScreen = document.getElementById("second-screen");
let number = 0;
let number2 = 0;
function plus1() {
  number += 1;
  firstScreen.innerHTML = number;
}
function plus2() {
  number += 2;
  firstScreen.innerHTML = number;
}
function plus3() {
  number += 3;
  firstScreen.innerHTML = number;
}

function add1() {
  number2 += 1;
  secondScreen.innerHTML = number2;
}
function add2() {
  number2 += 2;
  secondScreen.innerHTML = number2;
}
function add3() {
  number2 += 3;
  secondScreen.innerHTML = number2;
}
function reset() {
  number = 0;
  number2 = 0;
  firstScreen.innerHTML = number;
  secondScreen.innerHTML = number2;
}
