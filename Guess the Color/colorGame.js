let numberOfSquares = 6;

let colors = randomColors(numberOfSquares);

let squares = document.querySelectorAll(".square");

let pickedColor = pickColor();
let pickedColorDisplay = document.querySelector("#pickedColor");
let tryAgainDisplay = document.querySelector("#tryAgain");
let headDisplay = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	headDisplay.style.backgroundColor = null;
	numberOfSquares = 3;
	colors = randomColors(numberOfSquares);
	pickedColor = pickColor();
	pickedColorDisplay.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected")
	headDisplay.style.backgroundColor = null;
	numberOfSquares = 6;
	colors = randomColors(numberOfSquares);
	pickedColor = pickColor();
	pickedColorDisplay.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
})

pickedColorDisplay.textContent = pickedColor;
changeSquaresColors();
resetBtn.textContent = "NEW COLORS";

resetBtn.addEventListener("click", function(){
	//generate new random colors
	colors = randomColors(numberOfSquares);
	//pick the new color
	pickedColor = pickColor();
	//change haedDisplay to match the new color
	pickedColorDisplay.textContent = pickedColor;
	//change colors of the squares
	changeSquaresColors();
	//reset headDisplay color
	headDisplay.style.backgroundColor = null;
	resetBtn.textContent = "NEW COLORS";
})


function changeSquaresColors() {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
		
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


function changeColors(color){
	for(i = 0; i < squares.length; i++) {
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





