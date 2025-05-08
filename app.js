"use strict";

/* Player logic section */
const suits = ["diamonds", "clubs", "hearts", "spades"];
let cardScore = 0;

function getRandCard() {
  var random_num = Math.trunc(Math.random() * 13) + 1;
  var random_suit = Math.trunc(Math.random() * 4);

  return [random_num, random_suit];
}

function startGame() {
  hit();
}

function hit() {
  let card_number = getRandCard()[0];
  let card_suit = getRandCard()[1];

  renderGame(card_number, card_suit);
  cardScore += card_number;
  document.getElementById("player-score").textContent = cardScore;
}

function stay() {}

/* Page game render section */
let hand = 0;
function renderGame(num, suit) {
  document.querySelector(`.hand--${hand}`).classList.remove("hidden");
  document.querySelector(
    `.hand--${hand}`
  ).src = `cards/${num}_of_${suits[suit]}.png`;
  hand++;
}

/*
const suits = ["diamonds", "clubs", "hearts", "spades"];
let current_hand = 0;
const hitBtn = document.querySelector(".btn--hit");

const images = document.querySelectorAll("img");
let score_p1 = document.querySelector(".score");
let hand = 0;
let current_score = 0;

// Starts with two cards
hit_player();
hit_dealer();

function get_new_rand(first_hand) {
  if (first_hand === 0) {
    var random_num = Math.trunc(Math.random() * 8) + 1;
    var random_suit = Math.trunc(Math.random() * 4);
  } else {
    var random_num = Math.trunc(Math.random() * 13) + 1;
    var random_suit = Math.trunc(Math.random() * 4);
  }

  return [random_num, random_suit];
}

function hit_player() {
  if (hand <= 6) {
    if (hand <= 2) {
      var random_array = get_new_rand(0);
      hit_dealer();
    } else {
      random_array = get_new_rand();
    }

    let card_number = random_array[0];
    let card_suit = random_array[1];
    document.querySelector(`.hand--${hand}`).classList.remove("hidden");
    document.querySelector(
      `.hand--${hand}`
    ).src = `cards/${card_number}_of_${suits[card_suit]}.png`;

    if (card_number >= 10) {
      current_score += card_number;
      score_p1.textContent = current_score;
    } else {
      current_score += card_number;
      score_p1.textContent = current_score;
    }

    if (current_score > 21) {
      document.querySelector(".score").style.color = "red";
    }

    hand += 1;
  }
}

function hit_dealer() {
  let random_array = get_new_rand(0);
  let card_number = random_array[0];
  let card_suit = random_array[1];
  document.querySelector(".dealer--hide").classList.remove("hidden");
  document.querySelector(
    ".dealer--hand"
  ).src = `cards/${card_number}_of_${suits[card_suit]}.png`;
}

hitBtn.addEventListener("click", hit_player);*/
