document.querySelector("#playBtn").addEventListener("click", () => {
  counter();
});

function counter() {
  let minutes = 5;
  let seconds = 0;

  let TurnCountdown = setInterval(() => {
    let display = document.querySelector("#playBtn");

    playBtn.classList.remove("centerPlay");
    playBtn.classList.add("centerCount");

    display.innerHTML = verifyMinutes(minutes, seconds);
    seconds--;

    if (seconds == -1 && minutes == 0) {
      document.getElementById('coinAudio').play();

      display.innerHTML = ">";
      playBtn.classList.remove("centerCount");
      playBtn.classList.add("centerPlay");

      clearInterval(TurnCountdown);
    }
    if (seconds <= -1) {
      minutes--;
      seconds = 59;
    }
  }, 1000);

  function verifyMinutes(minutes, seconds) {
    if (minutes < 10 && seconds >= 10) {
      return (minutesSeconds = `0${minutes}:${seconds}`);
    }
    if (minutes >= 10 && seconds < 10) {
      return (minutesSeconds = `${minutes}:0${seconds}`);
    }
    if (minutes >= 10 && seconds >= 10) {
      return (minutesSeconds = `${minutes}:${seconds}`);
    }
    if (minutes < 10 && seconds < 10) {
      return (minutesSeconds = `0${minutes}:0${seconds}`);
    }
  }
}
