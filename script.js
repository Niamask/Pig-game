"use strict";

const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const player0El = document.getElementsByClassName("player--0");
const player1El = document.getElementsByClassName("player--1");

let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--&");

const dice = document.querySelector(".dice");

function rollDice(rand) {
  const imageSource = `dice-${rand}.png`; // Replace with your actual image filenames
  dice.src = imageSource;
  dice.style.display = "block";
}

let sum = 0;

rollBtn.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 6) + 1;
  rollDice(rand);
  console.log(rand);
  console.log(player0El ? "yes" : "no");
  console.log(player1El ? "yes" : "no");

  if (rand != 1) {
    sum += rand;
    current0El.textContent = sum;
  } else {
    current0El.textContent = 0;
    sum = 0;
  }
});

holdBtn.addEventListener("click", function () {
  let sum = 0;
  sum += current0El.textContent;
  score0El.textContent = sum;
});

newBtn.addEventListener("click", function () {
  score0El.textContent = 0;
  current0El.textContent = 0;
});
