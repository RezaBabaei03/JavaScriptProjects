
// Countdown from entered number to 0

const timer = function (_time) {
  if (_time > 0) {
      document.querySelector("#head3").textContent = _time    ;
      window.setTimeout(function () {timer(_time - 1)}, 1000);
  } else {
      document.querySelector("#head3").textContent = 0;
      window.setTimeout(function () {alert("Time ended.")}, 10);
  }
}

const _time = Number(prompt("Seconds: "));
timer(_time);
