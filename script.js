"use strict";

//--select elements--//
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".label-score");
const highScoreLabel = document.querySelector(".label-highscore");
const numberSpan = document.querySelector(".number");
const againBtn = document.querySelector(".again");

//--all our numbers and scores
let winnerNum = Math.round(Math.random() * 19 + 1);
let currentScore = 20;
let highScore = 0;
let guessNum;

const displayMessage = (text) => {
  message.textContent = text;
};

const checkBtnHandler = () => {
  console.log(Math.floor(Math.random() * 2 + 1));
  //console.log(winnerNum);
  //when user didnt put anything
  if (!guessNum) {
    return displayMessage("📌 Please enter number");
  }
  // 1st case right answer
  if (guessNum === winnerNum) {
    document.querySelector("body").style.backgroundColor = "#3EC70B";
    displayMessage("🏆 You got the winner number");
    numberSpan.textContent = guessNum;
    numberSpan.classList.add("rotate-num");
    highScore = currentScore > highScore ? currentScore : highScore;
    highScoreLabel.textContent = `🥇 Highscore: ${highScore}`;
  } else {
    displayMessage(guessNum > winnerNum ? "too high..." : "too low...");
    currentScore--;
    scoreLabel.textContent = `💯 Score: ${currentScore}`;
  }
};
guessInput.addEventListener("change", (e) => {
  guessNum = parseInt(e.target.value);
});

const againBtnHandler = () => {
  document.querySelector("body").style.backgroundColor = "#222";
  numberSpan.textContent = "?";
  currentScore = 20;
  scoreLabel.textContent = `💯 Score: ${currentScore}`;
  guessInput.value = "";
  winnerNum = Math.round(Math.random() * 20);
  numberSpan.classList.remove("rotate-num");
  message.textContent = "Start Guessing...";
};

checkBtn.addEventListener("click", checkBtnHandler);
againBtn.addEventListener("click", againBtnHandler);
//

//

//--Math object
//console.log("Math.floor", Math.floor(3.76)); //3
//console.log("Math ceiling", Math.ceil(3.16)); //4
//console.log("Math round", Math.round(3.59)); //4
