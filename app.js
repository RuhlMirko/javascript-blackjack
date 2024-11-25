"use strict";

const suits = ["diamonds", "clubs", "hearts", "spades"];

let current_hand = 0;

let first_hand_img = document.querySelector(".hand--0");
let second_hand_img = document.querySelector(".hand--1");

let random_array = get_new_rand();

first_hand_img.src = `cards/${random_array[0]}_of_${
  suits[random_array[1]]
}.png`;
random_array = get_new_rand();
second_hand_img.src = `cards/${random_array[0]}_of_${
  suits[random_array[1]]
}.png`;

function get_new_rand() {
  let random_num = Math.trunc(Math.random() * 13) + 1;
  let random_suit = Math.trunc(Math.random() * 4);
  return [random_num, random_suit];
}

let hand = 2;
function hit_player() {
  random_array = get_new_rand();

  let current_hand = document.querySelector(`hand--${hand}`);
  current_hand.src = `cards/${random_array[0]}_of_${
    suits[random_array[1]]
  }.png`;
  current_hand.classList.remove("hidden");
  hand += 1;
}

let hitBtn = document.querySelector("btn--hit");

hitBtn.addEventListener("click", hit_player);
