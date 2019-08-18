var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255 )"
];

var pickedColor = colors[3];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
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