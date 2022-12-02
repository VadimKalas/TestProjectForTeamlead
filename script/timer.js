const minutes = document.querySelector(".timer__minutes");
const seconds = document.querySelector(".timer__seconds");

let sec = 1800,
  countDiv = document.querySelector(".order__timer"),
  countDown = setInterval(function () {
    secpass();
  }, 1000);

function secpass() {
  "use strict";

  var min = Math.floor(sec / 60),
    remSec = sec % 60;

  if (remSec < 10) {
    remSec = "0" + remSec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  countDiv.innerHTML = min + ":" + remSec;

  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);

    countDiv.innerHTML = "Акция закансивается, успей заказать!";
  }
}
