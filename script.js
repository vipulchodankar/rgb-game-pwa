var colors = generateRandomColors(6);
var pickedColor = pickColor(); 

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#212121";
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

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

