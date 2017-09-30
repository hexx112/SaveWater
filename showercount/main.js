var final = 300;
var going = false;
var highscorenum = 0;

function setup() {
	document.getElementById("final").innerHTML = final;
    $( "#endbtn" ).fadeOut( 0, function() {});
    $( "#highscorecon" ).fadeOut( 0, function() {});
    $( "#returnbtn" ).fadeOut( 0, function() {});
    document.body.style.zoom="240%"
}

function start() {
    
    going = true;
    
	$( "#startbtn" ).fadeOut( "slow", function() {
        $("#final").animate({fontSize: "40px" }, 1000 );
        decrease();
        $( "#endbtn" ).fadeIn( "slow", function() {});
    });
	
}

function end() {
    going = false;    
    $( "#endbtn" ).fadeOut( "slow", function() {
        
        $("#final").animate({fontSize: "80px" }, 1000 );
        
        $("#pl").fadeOut(function() {
            $(this).text("You scored:")
        }).fadeIn();
        
        $( "#highscorecon" ).fadeIn( "slow", function() {});
        
        $( "#returnbtn" ).fadeIn( "slow", function() {});
        
        if (final > highscorenum){
            highscorenum = final;
            document.getElementById("highscore").innerHTML = highscorenum;
        }
    });
}

function decrease(){
    
    final = final - 1;
    document.getElementById("final").innerHTML = final;
    
    if (going == true){
        setTimeout(decrease, 1000);
    }
}

function restart(){

    $( "#returnbtn" ).fadeOut( 1000, function() {});
    
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
    

}