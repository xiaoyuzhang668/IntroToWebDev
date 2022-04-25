< !DOCTYPE html >
	<
	html lang = "en" >
	<
	title > Password Strength < /title> <
script src = "password.js" > < /script> <
body >
	<
	div >
	<
	label
for = "password" > Password: < /label> <
input type = "text"
id = "password" >
	<
	span id = "strength" > < /span> < /
div >
	// After DOM is loaded, register event handlers
	window.addEventListener("DOMContentLoaded", function () {
		let passwordInput = document.querySelector("#password");
		passwordInput.addEventListener("keydown", preventSpaces);
		passwordInput.addEventListener("input", checkPassword);
	});

function preventSpaces(event) {
	// Ignore space input 
	if (event.key == " ") {
		event.preventDefault();
	}
}

function checkPassword() {
	let password = this.value;
	let passwordStrength = 0;

	// Password should be long enough
	if (password.length >= 6) {
		passwordStrength++;
	}

	// Password should not contain "qwerty" in upper or lowercase
	if (password.toLowerCase().indexOf("qwerty") == -1) {
		passwordStrength++;
	}

	// Password should have at least one digit 
	let containsDigit = false;
	for (let i = 0; i < password.length; i++) {
		let char = password.charCodeAt(i);
		if (char >= 48 && char <= 57) {
			containsDigit = true;
		}
	}

	if (containsDigit) {
		passwordStrength++;
	}

	// Convert passwordStrength into a descriptive word 
	let strengthWord = "";
	if (passwordStrength == 1) {
		strengthWord = "Weak";
	} else if (passwordStrength == 2) {
		strengthWord = "Moderate";
	} else if (passwordStrength == 3) {
		strengthWord = "Strong";
	}

	// Display strengthWord
	document.querySelector("#strength").innerHTML = strengthWord;
} <
/body> < /
html >
