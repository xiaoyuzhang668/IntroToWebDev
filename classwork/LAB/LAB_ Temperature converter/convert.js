//SET VARIABLE
let btn = document.getElementById("convertButton");
let txtC = document.getElementById("cInput");
let txtF = document.getElementById("fInput");
let img = document.getElementById("weatherImage");
let err = document.getElementById("errorMessage");

//EVENT AFTER LOADING
function domLoaded() {
	btn.addEventListener("click", submitE);
}
window.addEventListener("DOMContentLoaded", domLoaded);

//ADD EVENT LISTENER ON C INPUT - CLEAR OPPOSITE FIELD AND CHECK IF IT IS NUMERIC 
txtC.addEventListener("input", function () {
	txtF.value = "";
})
txtC.addEventListener("change", function () {
	isNumeric(txtC.value);
}, false)

//ADD EVENT LISTENER ON F INPUT - CLEAR OPPOSITE FIELD AND CHECK IF IT IS NUMERIC 
txtF.addEventListener("input", function () {
	txtC.value = "";
})
txtF.addEventListener("change", function () {
	isNumeric(txtF.value);
}, false)

//FUNCTION TO CHECK IF IT IS NUMERIC
function isNumeric(deg) {
	if (deg != null) {
		if (isNaN(parseFloat(deg))) {
			err.innerHTML = deg + " is not a number";
		} else {
			err.innerHTML = "";
		}
	}
}

//FUNCTION TO CONVERT DEGREE BETWEEN F AND C
function convertCtoF(dC) {
	if (dC != null) {
		txtF.value = parseFloat(dC) * 9 / 5 + 32;
	}
}

function convertFtoC(dF) {
	if (dF != null) {
		txtC.value = (parseFloat(dF) - 32) * 5 / 9;
	}
}

//FORM SUBMIT EVENT
function submitE() {
	if (txtC.value.length != 0) {
		if (isNaN(parseFloat(txtC.value))) {
			return false;
		} else {
			convertCtoF(txtC.value);
		}
	}
	if (txtF.value.length != 0) {
		if (isNaN(parseFloat(txtF.value))) {
			return false;
		} else {
			convertFtoC(txtF.value);
		}
	}
	//CHANGE IMAGE BASED ON F DEGREE
	let f = txtF.value;
	if (txtF.value.length != 0) {
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
}
