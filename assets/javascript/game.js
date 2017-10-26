//Declare variables

var cry1V;
var cry2V;
var cry3V;
var cry4V;

var pTarget;
var pScore;

// Declare functions

function randomNum(v, max, min) {
  v = Math.floor(Math.random() * max) + min;
}

function crystalValue(cryV) {
  randomNum(cryV, 12, 1);
}

function targetV() {
  randomNum(pTarget, 120, 19);
}

function dispPScore() {
  $('player-score').html("Player Score: " + pScore);
}

function reset() {
  crystalValue(cry1V);
  crystalValue(cry2V);
  crystalValue(cry3V);
  crystalValue(cry4V);
  targetV();
  $('player-target').html("Target: " + pTarget);
  pScore = 0;
}

// Gameplay

$(document).ready(function() {

  $('btn-start').on('click', function() {
    reset();
    console.log("btn");
  });

  $('cry1').on('click', function() {
    pScore = pScore + cry1V;
    dispPScore();
  });

  $('cry2').on('click', function() {
    pScore = pScore + cry2V;
    dispPScore();
  });

  $('cry3').on('click', function() {
    pScore = pScore + cry3V;
    dispPScore();
  });

  $('cry4').on('click', function() {
    pScore = pScore + cry4V;
    dispPScore();
  });


})
