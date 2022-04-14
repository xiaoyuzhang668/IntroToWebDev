window.addEventListener("DOMContentLoaded", domLoaded);
let btn = document.getElementById("convertButton");
let txtC = document.getElementById("cInput");
let txtF = document.getElementById("fInput");
let img = document.getElementById("weatherImage");
let err = document.getElementById("errorMessage");

function domLoaded() {
	// TODO: Complete the function
	btn.addEventListener("click", submitE);
	txtC.addEventListener("input", clearF);
	txtF.addEventListener("input", clearC);
}

function convertCtoF(degreesCelsius) {
	// TODO: Complete the function
	let c = parseFloat(degreesCelsius);
	if (isNaN(c)) {
		err.innerHTML = degreesCelsius + " is not a number";
	} else {
		err.innerHTML = "";
		txtF.value = c * 9 / 5 + 32;
	}
}

function convertFtoC(degreesFahrenheit) {
	// TODO: Complete the function
	let f = parseFloat(degreesFahrenheit);
	if (isNaN(f)) {
		err.innerHTML = degreesFahrenheit + " is not a number";
	} else {
		err.innerHTML = "";
		txtC.value = (f - 32) * 5 / 9;
	}
}

function clearF() {
	txtF.value = "";
}

function clearC() {
	txtC.value = "";
}

function submitE() {
	if (txtC.value != "") {
		convertCtoF(txtC.value);
	}
	if (txtF.value != "") {
		convertFtoC(txtF.value);
	}
	let f = parseFloat(txtF.value);
	switch (true) {
		case f > 50:
			img.setAttribute("src", "warm.png");
			break;
		case f >= 32:
			img.setAttribute("src", "cool.png");
			break;
		case f < 32:
			img.setAttribute("src", "cold.png");
			break;
		default:
			img.setAttribute("src", "warm.png");
	}
}
