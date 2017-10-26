//Declare variables

var cry1V = 0;
var cry2V = 0;
var cry3V = 0;
var cry4V = 0;

var pTarget = 0;
var pScore = 0;

// Declare functions

function crystalValueGen() {
  cry1V = Math.floor(Math.random() * 12) + 1;
  cry2V = Math.floor(Math.random() * 12) + 1;
  cry3V = Math.floor(Math.random() * 12) + 1;
  cry4V = Math.floor(Math.random() * 12) + 1;
}

function targetV() {
  pTarget = Math.floor(Math.random() * 120) + 19;
}

function dispPScore() {
  $('#player-score').html("Player Score: " + pScore);
}

function reset() {
  crystalValueGen();
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
