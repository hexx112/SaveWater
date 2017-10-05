var final = 300;
var going = false;
var highscorenum = 0;
var totalscorenum = 0;
var clickedend = false;

function setup() {

    //setup
	  document.getElementById("final").innerHTML = final;
    $( "#endbtn" ).fadeOut( 0, function() {});
    $( "#highscorecon" ).fadeOut( 0, function() {});

    $( "#totalscorecon" ).fadeOut( 0, function() {});
    $( "#returnbtn" ).fadeOut( 0, function() {});

    //zoom
    document.body.style.zoom="225%"
}

function start() {
    //on click of start button
    going = true;

    //fade out start button
	$( "#startbtn" ).fadeOut( "slow", function() {
        $("#final").animate({fontSize: "40px" }, 1000 );
        decrease();
    });

}

function end() {
    //change going to false
    going = false;


    //after fadeout of endbutton
    $( "#endbtn" ).fadeOut( "slow", function() {

        $("#final").animate({fontSize: "80px" }, 1000 );

        $("#pl").fadeOut(function() {
            $(this).text("You scored:")
        }).fadeIn();

        $( "#highscorecon" ).fadeIn( "slow", function() {});
        $( "#totalscorecon" ).fadeIn( "slow", function() {});

        $( "#returnbtn" ).fadeIn( "slow", function() {});

        //update highscore
        if (final > highscorenum){
            highscorenum = final;
            document.getElementById("highscore").innerHTML = highscorenum;
        }

        //update totalscore
        totalscorenum = final + totalscorenum;
        document.getElementById("totalscore").innerHTML = totalscorenum;

    });

}

function decrease(){
    clickedend = true;
    //decrease
    final = final - 1;
    document.getElementById("final").innerHTML = final;

    if (going == true){
        setTimeout(decrease, 1000);
    }
    //turn red
    if (final == 0){

        $("*:not(button)").css('background', '#d73232');
    }
    //only add endbtn after 100 secs
    if (final < 200){
        if(going == true){
            $( "#endbtn" ).fadeIn( "slow", function() {});
        }
    }
}

function restart(){
    //fade everything out and add only the bits you need back in
    $( "#returnbtn" ).fadeOut( 0000, function() {});

    $( "#endbtn" ).fadeOut( 5000, function() {});

    $( "#final" ).fadeOut( 1000, function() {
        final = 300;
        document.getElementById("final").innerHTML = final;
        $( "#final" ).fadeIn( 1000, function() {});
    });

    $( "#pl" ).fadeOut( 1000, function() {
        $("#pl").text("Time remaining:")
        $( "#pl" ).fadeIn( 1000, function() {});
    });

    $( "#startbtn" ).fadeIn( 1000, function() {});

    $( "#highscorecon" ).fadeIn( 1000, function() {});
    $( "#totalscorecon" ).fadeIn( 1000, function() {});

    $("*:not(button)").css('background', '#e6e8e6');

}
