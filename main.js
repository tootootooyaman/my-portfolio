const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const display = document.getElementById("display");

let number = 0;

plus.onclick = function () {
  number += 1;
  counter.textContent = number;
  if (isPrimeNumber(number)) {
    display.textContent = "đâïžçŽ æ°đđđđ";
  } else {
    display.textContent = "đăçŽ æ°ăăăȘă...";
  }
  if (50 < number && number <= 100) {
    display.textContent += "...æăȘăźïŒ";
  }
  if (number > 100) {
    display.textContent += "...ă°ăăȘăźïŒïŒ";
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
