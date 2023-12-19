"use strict";

// Selecting elements
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");

const dice = document.querySelector(".dice");

score0El.textContent = 0;
score1El.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
let score = 0;

function rollDice(rand) {
  const imageSource = `dice-${rand}.png`; // Replace with your actual image filenames
  dice.src = imageSource;
  dice.style.display = "block";
}

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

rollBtn.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 6) + 1;
  rollDice(rand);
  console.log(rand);

  if (rand !== 1) {
    currentScore += rand;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    switchPlayer();

    // document
    //   .querySelector(`.player--${activePlayer}`)
    //   .classList.add("player--active");
  }
});

let somme = 0;
holdBtn.addEventListener("click", function () {
  // somme += Number(current0El.textContent);
  // console.log(somme);
  // score0El.textContent = somme;
  somme += Number(
    document.getElementById(`current--${activePlayer}`).textContent
  );
  console.log(somme);
  switchPlayer();

  if (
    Number(document.getElementById(`score--${activePlayer}`).textContent) >= 10
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
  }
});

newBtn.addEventListener("click", function () {
  somme = 0;
  score = [0, 0];
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  score0El.textContent = somme;
  score1El.textContent = somme;
  dice.style.display = "none";

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
});
