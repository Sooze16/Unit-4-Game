// $(document).ready(function() {

var snoopysNumber;
var snowFlakeTotal = 0;
var wins = 0;
var losses = 0;
var snowFlake0Num;
var snowFlake1Num;
var snowFlake2Num;
var snowFlake3Num;
// var imageArray ["."]

function numbers() {
  snoopysNumber = Math.floor(Math.random() *101) + 19;
  snowFlake0Num = Math.ceil(Math.random() *11) + 1;
  snowFlake1Num = Math.ceil(Math.random() *11) + 1;
  snowFlake2Num = Math.ceil(Math.random() *11) + 1;
  snowFlake3Num = Math.ceil(Math.random() *11) + 1;
  // console.log(snoopysNumber)
}

function game () {
  numbers();
  snowFlakeTotal = 0;
  $("#snoopysNumber").text(snoopysNumber);
  $("#snowFlakeTotal").text(snowFlakeTotal);
  $("#snowFlake0").attr("data-sfValue", snowFlake0);
  $("#snowFlake1").attr("data-sfValue", snowFlake1);
  $("#snowFlake2").attr("data-sfValue", snowFlake2);
  $("#snowFlake3").attr("data-sfValue", snowFlake3);
  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#winOrLose").text("");

  

}

function youWin() {
  $("#winOrLose").text("YOU WIN!");
  wins++;
  $("#wins").text(wins);
}

function youLose() {
  $("#winOrLose").text("YOU LOSE");
  losses++;
  $("#losses").text(losses);
}

$(".flakeImg").hover(function() {
  $(this).css({opacity: 0.3});
},
function() {
  $(this).css({opacity: 1});
});

newGame();


// Function to add the snowflake values together
$(".flakeImg").on("click", function() {
  if (snowFlakeTotal >= snoopysNumber) {
    return;
  }

  var sfValue = $(this).attr("data-sfValue");
  sfValue = parseInt(sfValue);
  snowFlakeTotal += sfValue;
  $("#snowFlakeTotal").text(snowFlakeTotal);

  if (snowFlakeTotal === snoopysNumber) {
    youWin();
  } else if (snowFlakeTotal > snoopysNumber) {
    youLose();
  }
});

$(".btn").on("click", function() {
  newGame();
});
