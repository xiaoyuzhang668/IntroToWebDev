// Too short
let password = "pass";

// Contains a space 
password = "Containsw2 space";

// Doesn't use a digit
//password = "my-password";

// Repeats first and last 3 chars
password = "abc123abc";

// Strong password
password = "StrongPassword1";

function testPassword(password) {
	if ((password.length < 6) && (password.length != 0)) {
		return "Password must be at least 6 characters.";
	}

	for (let i = 0; i < password.length; i++) {
		if (password.charAt(i) === " ") {
			return "Password may not contain a space.";
		}
	}

	if (!isSingleDigit(password)) {
		return "Password must have at least one digit.";
	}

	if (password.substr(0, 3) === password.substr(password.length - 3)) {
		return "The password may not begin and end with the same 3 characters.";
	}
	return "";
}

// Returns true if n is a string with a single digit, false otherwise
function isSingleDigit(n) {
	let unicodeValue = n.charCodeAt(0);
	return n.length === 1 && unicodeValue >= 48 && unicodeValue <= 57;
}

// See if function returns an error message or not
let message = testPassword(password);
if (message) {
	console.log(message);
} else {
	console.log("Password accepted.");
}
