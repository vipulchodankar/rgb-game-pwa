var colors = generateRandomColors(6);
var pickedColor = pickColor(); 
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var gameModeButtons = document.querySelectorAll(".gameMode");

init();

function init(){
    initModeButtons();
    initSquares();
    reset();
}

function initModeButtons(){
    for(var i = 0; i < gameModeButtons.length; i++){
        gameModeButtons[i].addEventListener("click", function(){
            gameModeButtons[0].classList.remove("selected");
            gameModeButtons[1].classList.remove("selected");
            gameModeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Hard") {
                numSquares = 6;
            } else {
                numSquares = 9;
            }

            reset();
        });
    }
}

function initSquares(){
    for(var i = 0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
            }
            else{
                this.style.backgroundColor = "#212121";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#0069FF";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color){
    for(var i = 0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numberOfColors){
    var tempArr = [];
    for(var i =0 ; i<numberOfColors;i++){
        tempArr.push(randomColor());
    }
    return tempArr;
}

function randomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}