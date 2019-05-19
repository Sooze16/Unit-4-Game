$(document).ready(function() {



    var snowFlakeTotal = 0;
    var wins = 0;
    var losses = 0;


    var snoopysNumber = Math.floor(Math.random() * 101) + 19;

    var snowFlakesNumber = [Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1];

    var imageArray = ["assets/images/sf0.PNG", "assets/images/sf1.PNG", "assets/images/sf2.PNG", "assets/images/sf3.PNG"];

    for (var i = 0; i < snowFlakesNumber.length; i++) {
        var snowFlakesPic = $("<img src='" + imageArray[i] + "' data-sfValue= '" + snowFlakesNumber[i] + "' alt='snowflake picture' class='flakeImg' />");

        $("#snowFlakes").append(snowFlakesPic);

    };






    function newGame() {

        snoopysNumber = Math.floor(Math.random() * 101) + 19;

        snowFlakesNumber = [Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1, Math.ceil(Math.random() * 11) + 1];




        snowFlakeTotal = 0;
        $("#snoopysNumber").text(snoopysNumber);
        $("#snowFlakeTotal").text("0");

        $("#wins").text(wins);
        $("#losses").text(losses);
        //   $("#winOrLose").text("");
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
            $(this).css({ opacity: 0.3 });
        },
        function() {
            $(this).css({ opacity: 1 });
        });



    newGame();


    // Function to add the snowflake values together
    $(".flakeImg").on("click", function() {
        if (snowFlakesNumber >= snoopysNumber) {
            return;
        }

        var sfValue = $(this).attr("data-sfValue");
        sfValue = parseInt(sfValue); //converts number string into numeric value
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


});