let numberOfSquares = 6;

let colors;

const squares = document.querySelectorAll(".square");

let pickedColor;
const pickedColorDisplay = document.querySelector("#pickedColor");
const tryAgainDisplay = document.querySelector("#tryAgain");
const headDisplay = document.querySelector(".header");
const resetBtn = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init(); //function which runs just after page is loaded

function init(){
    //mode buttons event listener
    modeBtnsSetUp()
    //squares event listener
    squaresSetUp()
    //calling reset function to define picked color at the refresh
    reset();
};

function modeBtnsSetUp(){
    for(let i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "EASY"){
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            };
            reset();
        });
    }
}

function squaresSetUp(){
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                resetBtn.textContent = "PLAY AGAIN?";
                tryAgainDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                headDisplay.style.backgroundColor = pickedColor;	
            }	else {
                this.style.backgroundColor = "#323232";
                tryAgainDisplay.textContent = "Try Again!";
            }
        });
    }
}


function reset(){
	//generate new random colors
	colors = randomColors(numberOfSquares);
	//pick the new color
	pickedColor = pickColor();
	//change haedDisplay to match the new color
	pickedColorDisplay.textContent = pickedColor;
	//change colors of the squares, depends on numberOfSquares
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
    
    tryAgainDisplay.textContent = "";
    
	//reset headDisplay color
	headDisplay.style.backgroundColor = null;
	resetBtn.textContent = "NEW COLORS";
};

resetBtn.addEventListener("click", function() {
	reset();
});

function changeColors(color){
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//choose random numbers from 0 to array's length
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColors(num) {
	let arr = [];
	for(i = 0; i < num; i++) {
		arr.push(randomRGB())
	}

	return arr;
}

function randomRGB() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);

		//put rgb to an array
		return "rgb(" + r + ", " + g + ", " + b + ")";
}





