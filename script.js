//H3 Element that has to display the code:
const cssOutput = document.querySelector("h3");
//Body Element:
const body = document.getElementById("background");
//Array of the two color inputs
const colors = document.getElementsByTagName("input");

//Gradient Color Selection &&
//CSS code display
const setGradient = () => {
	body.style.background = 
		"linear-gradient(to right, " 
		+ colors[0].value 
		+ ", " 
		+ colors[1].value 
		+ ")";
	cssOutput.textContent = body.style.background;
}