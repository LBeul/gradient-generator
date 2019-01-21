//H3 Element that has to display the code:
var cssOutput = document.querySelector("h3");
//Body Element:
var body = document.getElementById("background");
//Array of the two color inputs
var colors = document.getElementsByTagName("input");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ colors[0].value 
		+ ", " 
		+ colors[1].value 
		+ ")";
	cssOutput.textContent = body.style.background;
}