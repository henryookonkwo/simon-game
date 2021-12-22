// alert("Hello");
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


$("body").keydown(function() {
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function(){
    // alert("Clicked button" + this.id);
    // let userChosenColour = this.id;
    let userChosenColour = $(this).attr("id");

    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});



function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    
   
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);   
};

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        $("#"+currentColour).removeClass("pressed");
        }, 100);
};


   
