const idSecondTens = document.querySelector("#secondTens");
const idSecondOnes = document.querySelector("#secondOnes");
const idMsHundreds = document.querySelector("#msHundreds");
const idMsTens = document.querySelector("#msTens");
const digits = document.querySelectorAll(".digits");

// const secondTimer = setInterval(secondCounter, 1000);
const milisecondTimer = setInterval(milisecondCounter, 10);
let secondsCounter = 0;
let secondOnes = 0;
let secondTens = 0;
let msHundreds = 0;
let msTens = 0;

// function secondCounter() {
//   secondOnes += 1;
//   if (secondOnes < 10) {
//     idSecondOnes.textContent = secondOnes;
//   } else if (secondOnes === 10) {
//     idSecondOnes.textContent = 0;
//     idSecondTens.textContent = 1;
//   }
// }

function milisecondCounter() {
  secondsCounter += 1;

  if (secondsCounter % 1000 === 0) {
    idSecondTens.textContent = 1;
  }

  if (secondsCounter % 100 === 0) {
    idSecondOnes.textContent = secondOnes += 1;

    if (secondOnes === 10) {
      idSecondOnes.textContent = 0;
      idMsHundreds.textContent = 0;
      idMsTens.textContent = 0;

      digits.forEach(digit => {
        digit.style.color = "red";
      });

      clearInterval(milisecondTimer);
    }
  }
}
