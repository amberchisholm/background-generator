// var _ = require('lodash');

// var array = [1,2,3,4,5,6,7,8];
// console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// Takes from the input color pickers (see html) and add text with them on the page.
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// Adds linear gradient text info to "h3" tag
	css.textContent = body.style.background + ";";
}

// Variable "letters" contain all possible hex values.
// Variable "color" gets initialized with # sign.
// Math.random returns random numbers between 0 and 1.
// You have to multipy by 16 to get numbers between 0 & 16.
// Math.floor rounds to full numbers.
// We use array syntax to access each character in the
// letters string.
function randomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// The value of color1 & 2 here is from the
// randomColor function, which is being called.
// Then the setGraient background is called.
function setRandomColor() {
	color1.value = randomColor();
	color2.value = randomColor();

	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);