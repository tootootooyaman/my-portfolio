const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const display = document.getElementById("display");

let number = 0;

plus.onclick = function () {
  number += 1;
  counter.textContent = number;
  if (isPrimeNumber(number)) {
    display.textContent = "👀❗️素数😍😍😍😍";
  } else {
    display.textContent = "👀　素数じゃない...";
  }
  if (50 < number && number <= 100) {
    display.textContent += "...暇なの？";
  }
  if (number > 100) {
    display.textContent += "...ばかなの？？";
  }
};
const isPrimeNumber = function (n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
