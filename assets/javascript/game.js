$(document).ready(function() {
    //I saw most people not using the above function...when my daughter in SF helped me (over the edge) she said that every JS and JQ document needs to start with this function.  Working with Phil - he did agree.


    //This is where I added my Var statements.  I had 8 million more lines of code when working with Zoe as we did not have my snowflake pictures dynamic - they were static and placed in the HTML.  (this is why I drink!) 
    //My very sweet classmate Jimi brought me back down to earth and assisted me with the following code.

    var snowFlakeTotal = 0;
    var wins = 0;
    var losses = 0;

    //This is where we combined these vars with functions.   I had them individually listed and associated with static images in HTML. So sad...
    //Game number should be a value between 19 and 120.  Below is an example that was used in class..this made the most sense to me.
    var snoopysNumber = Math.floor(Math.random() * 101) + 19;

    //per a slack note from Ying - the number 12 was not attainable with using floor in this equation and ceiling (rounding to the higher number) would be most attainable.
    //Crystal number should have a value between 1 and 12 for this game
    var snowFlakesNumber = [Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1];

    //this is where I blew away the HTML individual pictures - Jimi assisted me with this array. 
    var imageArray = ["assets/images/sf0.PNG", "assets/images/sf1.PNG", "assets/images/sf2.PNG", "assets/images/sf3.PNG"];

    //Jimi also assisted with this for statement and gave me the "a-ha" moment of how everything in here will work.  I am still iffy on how I would tell someone what the append is doing.
    for (var i = 0; i < snowFlakesNumber.length; i++) {
        var snowFlakesPic = $("<img src='" + imageArray[i] + "' data-sfValue= '" + snowFlakesNumber[i] + "' alt='snowflake picture' class='flakeImg' />");

        $("#snowFlakes").append(snowFlakesPic);

    };





    //I had a LOT more code in here when I was working with Zoe.  This is where the game is reseting.  I do not need to call VAR again because that was already called on initialization. (Phil)

    function newGame() {

        snoopysNumber = Math.floor(Math.random() * 101) + 19;

        snowFlakesNumber = [Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1];



        //reseting the snowflake totals
        snowFlakeTotal = 0;
        $("#snoopysNumber").text(snoopysNumber);
        $("#snowFlakeTotal").text("0");

        //setting the wins and losses to memory
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#winOrLose").text("");
    }

    //This is not clearing when "play again" button is pressed...I need a TA's help with this.
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

    //I AM NOT SMART ENOUGH FOR THIS...THIS IS COMPLETLY ZOE KRAMER...ONLY HELPFUL THING SHE GAVE TO ME....DID NOT EVEN KNOW WHAT "OPACITY" WAS.... I THINK THIS MAKES THIS GAME
    $(".flakeImg").hover(function() {
            $(this).css({ opacity: 0.3 });
        },
        function() {
            $(this).css({ opacity: 1 });
        });



    newGame();


    // Function to add the snowflake values together
    $(".flakeImg").on("click", function() {

        if (snowFlakeTotal < snoopysNumber) {
            var sfValue = $(this).attr("data-sfValue");
            sfValue = parseInt(sfValue); //converts number string into numeric value
            snowFlakeTotal += sfValue;

            $("#snowFlakeTotal").text(snowFlakeTotal);

            if (snowFlakeTotal === snoopysNumber) {
                youWin();
                // isPlaying = false;


            } else if (snowFlakeTotal > snoopysNumber) {
                youLose();
                // isPlaying = false;

            }
        } else {
            alert("Please press PLAY AGAIN to continue.")
        }

    });
    //SOMEPLACE HERE I BELEIEVE I NEED TO CLEAR THE YOU WIN / LOSE TEXT.
    $(".btn").on("click", function() {
        newGame();
    });


});