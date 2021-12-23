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
})


$(".btn").click(function(){
    // alert("Clicked button" + this.id);
    // let userChosenColour = this.id;
    let userChosenColour = $(this).attr("id");

    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log("userClickedPattern"+userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});



function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("gamepattern:" + gamePattern)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);   
}

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        $("#"+currentColour).removeClass("pressed");
        }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel] ){
        console.log("success");
    }
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
    }
    else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            //your code to be executed after 1 second
            $("body").removeClass("game-over");
            }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;

}

   
