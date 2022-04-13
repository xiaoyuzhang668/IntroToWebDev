let password = "Qwerty123";

function isStrongPassword(password) {
	let valueL = 0;
	let valueP = 0;
	let valueC = 0;
	let result = 0;
	if (password.length >= 8) {
		valueL = 1;
	}

	if (password.indexOf("password") == -1) {
		valueP = 1;
	}

	for (let i = 0; i < password.length; i++) {
		if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
			valueC = 1;
		}
	}
	result = valueC + valueP + valueL;
	if (result == 3) {
		console.log("Password accepted");
		return true;
	} else {
		console.log("Password failed.");
		return false;
	}
}

isStrongPassword(password);
