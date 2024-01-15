const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const now = new Date().getTime();

const eventTime = new Date("April 8, 2024 12:17:13");

// const eventTime = new Date("January 15, 2024 15:30:13");

function countdownTimer() {
  const currentTime = new Date();
  const diff = eventTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  if (diff < 0) {
    clearInterval(countdownTimer);
    document.getElementById("info").innerHTML =
      "Countdown Timer is now Complete.";
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}

setInterval(countdownTimer, 1000);
