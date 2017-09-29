var final = 90;
var going = false;

function setup() {
	document.getElementById("final").innerHTML = final;
    $( "#endbtn" ).fadeOut( 0, function() {});
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
        $("#final").animate({fontSize: "60px" }, 1000 );
        $("#pl").fadeOut(function() {
            $(this).text("You scored:")
        }).fadeIn();
    });
}

function decrease(){
    
    final = final - 1;
    document.getElementById("final").innerHTML = final;
    
    if (going == true){
        setTimeout(decrease, 1000);
    }
}
