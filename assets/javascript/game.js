//Declare variables

var cry1V = 0;
var cry2V = 0;
var cry3V = 0;
var cry4V = 0;

var pTarget = 0;
var pScore = 0;

var winCount = 0;
var loseCount = 0;

var announcement = $('#announcement')

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
  $('#win-counter').html("Wins: " + winCount);
  $('#lose-counter').html("Losses: " + loseCount);
}

function reset() {
  crystalValueGen();
  targetV();
  pScore = 0;
  $('#player-target').html("Target: " + pTarget);
  dispPScore();
  setTimeout(function() {
    $('.card-img-top').attr("src", "./assets/images/indy_pensive.gif");
    $('#announce').text("");
  }, 5200);
}

function win() {
  $('#win-lose').css({"opacity":"1"});
  $('#announce').text("You Win!");
  $('.card-img-top').attr("src", "./assets/images/indy_happy.gif");
}

function lose() {
  $('#win-lose').css({"opacity":"1"});
  $('#announce').text("You Lose!");
  $('.card-img-top').attr("src", "./assets/images/face_melting.webp")
}

function winLoseCheck() {
  if (pScore === pTarget) {
  // Win condition
  //  alert("you win");
    reset();
    win();
    winCount++;
  } else if (pScore > pTarget) {
  // Lose condition
  //  alert("you lost, your score was too high");
    reset();
    lose();
    loseCount++;
  };
  dispPScore();
}

// Gameplay

$(document).ready(function() {

  $('#btn-start').on('click', function() {
    $('.card-img-top').attr("src", "./assets/images/indy_pensive.gif");
    $('.middle').css("opacity", "1");
    reset();
  });

  $('#cry1').on('click', function() {
    pScore = pScore + cry1V;
    dispPScore();
    winLoseCheck();
  });

  $('#cry2').on('click', function() {
    pScore = pScore + cry2V;
    dispPScore();
    winLoseCheck();
  });

  $('#cry3').on('click', function() {
    pScore = pScore + cry3V;
    dispPScore();
    winLoseCheck();
  });

  $('#cry4').on('click', function() {
    pScore = pScore + cry4V;
    dispPScore();
    winLoseCheck();
  });
})
