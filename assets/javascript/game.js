//Declare variables

var cry1V = 0;
var cry2V = 0;
var cry3V = 0;
var cry4V = 0;

var pTarget = 0;
var pScore = 0;

// Declare functions

function randomNum(va, max, min) {
  va = Math.floor(Math.random() * max) + min;
}

function crystalValue(cryV) {
  randomNum(cryV, 12, 1);
}

function targetV() {
  randomNum(pTarget, 120, 19);
}

function dispPScore() {
  $('#player-score').html("Player Score: " + pScore);
}

function reset() {
  crystalValue(cry1V);
  crystalValue(cry2V);
  crystalValue(cry3V);
  crystalValue(cry4V);
  targetV();
  pScore = 0;
  $('#player-target').html("Target: " + pTarget);
  dispPScore();
}

// Gameplay

$(document).ready(function() {

  $('#btn-start').on('click', function() {
    reset();
  });

  $('#cry1').on('click', function() {
    pScore = pScore + cry1V;
    console.log("btn1");
    dispPScore();
  });

  $('#cry2').on('click', function() {
    pScore = pScore + cry2V;
    console.log("btn2");
    dispPScore();
  });

  $('#cry3').on('click', function() {
    pScore = pScore + cry3V;
    console.log("btn3");
    dispPScore();
  });

  $('#cry4').on('click', function() {
    pScore = pScore + cry4V;
    console.log("btn4");
    dispPScore();
  });


})
