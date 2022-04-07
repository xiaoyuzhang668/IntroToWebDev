// These elements will be used in both functions.
var displayEven = document.forms["displayEven"];
var startNum = document.getElementById("startNum");
var startNumM = document.getElementById("startNumM");
var endNum = document.getElementById("endNum");
var endNumM = document.getElementById("endNumM");
var stepNum = document.getElementById("stepNum");
var stepNumM = document.getElementById("stepNumM");
var submitButton = document.getElementById("submitButton");
var results = [];

function stepNegative() {
	var operand3 = parseInt(stepNum.value);
	if ((operand3 <= 0) && (operand3 !== '')) {
		stepNumM.style.display = "block";
		stepNumM.classList.add("invalid-feedback");
		return false;
	} else {
		stepNumM.style.display = "none";
		stepNumM.classList.remove("invalid-feedback");
	}
}

function startEnd() {
	var operand1 = parseInt(startNum.value);
	var operand2 = parseInt(endNum.value);
	if ((operand1 !== '') && (operand2 !== '') && (operand1 > operand2)) {
		startNumM.style.display = "block";
		startNumM.classList.add("invalid-feedback");
		endNumM.style.display = "block";
		endNumM.classList.add("invalid-feedback");
		return false;
	} else {
		startNumM.style.display = "none";
		startNumM.classList.remove("invalid-feedback");
		endNumM.style.display = "none";
		endNumM.classList.remove("invalid-feedback");
	}
}

function validate() {
	var operand1 = parseInt(startNum.value);
	var operand2 = parseInt(endNum.value);
	var operand3 = parseInt(stepNum.value);
	displayEven.className = "needs-validation";
	if (!displayEven.checkValidity()) {
		displayEven.className = "was-validated";
		return false;
	}
	stepNegative();
	startEnd();

	var textMessage = "Here are the even numbers between " + operand1 + " and " + operand2 +
		" by " + operand3 + "'s:";
	for (var i = operand1; i < operand2; i = i + operand3) {
		if (i % 2 === 0) {
			results.push(i);
		}
	}
	var text = results.join('\n');
	document.getElementById("results").innerText = textMessage + "\n" + text;
	return false;
}

stepNum.addEventListener("change", stepNegative);
startNum.addEventListener("change", startEnd);
endNum.addEventListener("change", startEnd);
