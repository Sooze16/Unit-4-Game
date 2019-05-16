// The start of the game - the computer generates a random number between 19 and 120. - this number will appear on the screen
// - Game will need an area where this value will be held in your HTML

var target

Math.floor (Math.random() *101) + 19

//You are given 4 crystals to choose from - all hold a numeric value between 1 - 12 - but you are not aware of the value.  The computer will assign number.
// - Game will need 4 icons that can be clicked in HTML


//The player is to chose crystals - not knowing their value - the player has to click on the crystal to find out its value.
// - Game will need an area in HTML that will calculate the value of each icon clicked.

//Each time the player clicks on the crystal - they add points to their score.

//The goal of the game it to match your score to the computer random number.
// - Game will need a wins/losses column.

// If you go over the computer number - player looses and game restarts.





//Variables  
//Creating counter for gems clicked.

var gem1Counter= 0;
var gem2Counter = 0;
var gem3Counter = 0;
var gem4Counter = 0;


//From JQuery API - function language for capturing the click - need to figure out how to add the computer pick number. 

Math.floor (Math.random() *11) + 1

$( "gem1" ).click(function() {
    alert( "Handler for .click() called." );
    gem1Counter++
  });

  $( "#gem2" ).click(function() {
    alert( "Handler for .click() called." );
    gem2Counter++
  });

  $( "#gem3" ).click(function() {
    alert( "Handler for .click() called." );
    gem3Counter++
  });

  $( "#gem4" ).click(function() {
    alert( "Handler for .click() called." );
    gem4Counter++
  });





