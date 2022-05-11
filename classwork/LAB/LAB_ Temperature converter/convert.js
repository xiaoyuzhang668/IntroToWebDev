let btn = document.getElementById("convertButton");
let txtC = document.getElementById("cInput");
let txtF = document.getElementById("fInput");
let img = document.getElementById("weatherImage");
let err = document.getElementById("errorMessage");

function domLoaded() {
	// TODO: Complete the function
	btn.addEventListener("click", submitE);
	txtC.addEventListener("input", function () {
		txtF.value = "";
	});
	txtF.addEventListener("input", function () {
		txtC.value = "";
	});
}
window.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(degreesC) {
	// TODO: Complete the function
	if (degreesC != null) {
		if (isNaN(degreesC)) {
			err.innerHTML = degreesC + " is not a number";
		} else {
			err.innerHTML = "";
			txtF.value = parseFloat(degreesC) * 9 / 5 + 32;
		}
	}
}

function convertFtoC(degreesF) {
	// TODO: Complete the function
	if (degreesF != null) {
		if (isNaN(degreesF)) {
			err.innerHTML = degreesF + " is not a number";
		} else {
			err.innerHTML = "";
			txtC.value = (parseFloat(degreesF) - 32) * 5 / 9;
		}
	}

}

function submitE() {
	if (txtC.value != "") {
		convertCtoF(txtC.value);
	}
	if (txtF.value != "") {
		convertFtoC(txtF.value);
	}
	let f = txtF.value;
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
