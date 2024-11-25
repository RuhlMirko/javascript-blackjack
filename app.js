"use strict";

const suits = ["diamonds", "clubs", "hearts", "spades"];
let current_hand = 0;
const hitBtn = document.querySelector(".btn--hit");

const images = document.querySelectorAll("img");
let score_p1 = document.querySelector(".score");
let hand = 0;
let current_score = 0;

// Starts with two cards
hit_player(true);
hit_player(true);

function get_new_rand(lower) {
  if (lower) {
    var random_num = Math.trunc(Math.random() * 8) + 1;
    var random_suit = Math.trunc(Math.random() * 4);
  } else {
    var random_num = Math.trunc(Math.random() * 13) + 1;
    var random_suit = Math.trunc(Math.random() * 4);
  }
  return [random_num, random_suit];
}

function hit_player(low = false) {
  if (hand <= 6) {
    if (low) {
      var random_array = get_new_rand(true);
    } else {
      var random_array = get_new_rand(false);
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

hitBtn.addEventListener("click", hit_player);
