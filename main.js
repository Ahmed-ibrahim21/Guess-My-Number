let check = document.querySelector("#check");
let score = 10;
let highscore = 0;
let target = Math.trunc(Math.random() * 20) + 1;
let GameOn = true;

let guessMeter = document.querySelector("#guessMeter");
let theQuestionMark = document.querySelector("#theQuestionMark");
let scorewriter = document.querySelector("#score");
let again = document.querySelector("#again");

check.addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value);
  if (GameOn === true) {
    if (!guess) {
      guessMeter.textContent = "Please enter a number 🙄";
    } else if (guess === target) {
      theQuestionMark.textContent = target;
      document.querySelector("body").style.backgroundColor = "lime";
      guessMeter.textContent = " Correct 🥳";
      if (score > highscore) {
        highscore = score;
        document.querySelector(
          "#highscore"
        ).textContent = `🏆 highscore : ${highscore}`;
      }
      GameOn = false;
    } else if (guess > target) {
      score--;
      guessMeter.textContent = " Too high📈";
      if (score == 0) {
        GameOn = false;
      }
      scorewriter.textContent = `💯  score : ${score}`;
    } else if (guess < target) {
      score--;
      guessMeter.textContent = " Too Low 📉";
      if (score == 0) {
        GameOn = false;
      }
      scorewriter.textContent = `💯  score : ${score}`;
    }
  } else {
    guessMeter.textContent = "🎮 game over start again";
  }
});

again.addEventListener("click", function () {
  score = 10;
  GameOn = true;
  document.querySelector("body").style.backgroundColor = "#222";
  scorewriter.textContent = `💯  score : ${score}`;
  guessMeter.textContent = "start guessing...";
  target = Math.trunc(Math.random() * 20) + 1;
  theQuestionMark.textContent = "?";
});
