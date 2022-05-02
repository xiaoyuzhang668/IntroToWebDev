//Set element variable
var contactUs = document.forms["contactUs"];
var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var info = document.getElementById("info");
var error = document.getElementById("error");
var invalidFeedback = document.querySelectorAll(".invalid-feedback");
var message = document.getElementById("message");

var sendRequest = document.getElementById("sendRequest");
var reset = document.getElementById("reset");

//to run name.addeventlistener after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
	var name = document.getElementById("name");
	name.addEventListener('input', () => {
		// handle the change event
		if (name.value.length === 0 || name.value.trim().length === 0 || name.value === false) {
			alert("Name is mandatory field");
			return false;
		}
	});
});
//email field should not be empty
function validateEmail() {
	if (email.value.length === 0 || email.value.trim().length === 0 || email.value === false) {
		alert("Email is mandatory field");
		return false;
	}
}
email.addEventListener('change', validateEmail);
//phone field should contain only number
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {
		alert("Phone should contain only numbers.");
		evt.preventDefault();
		return false;
	}
	return true;
}
//phone field should not be empty
function validatePhone() {
	if (phone.value.length === 0 || phone.value.trim().length === 0 || phone.value === false) {
		alert("Phone is mandatory field");
		return false;
	}
}
phone.addEventListener('keypress', isNumberKey);
phone.addEventListener('input', validatePhone);
//additional information field should not be empty
function validateInfo() {
	if (info.value.length === 0 || info.value.trim().length === 0 || info.value === false) {
		alert("Additional information is mandatory field");
		return false;
	}
}
info.addEventListener('input', validateInfo);

//multiple checkbox field is required
// Select all checkboxes with the name 'contact' using querySelectorAll.
var contacts = document.querySelectorAll("input[type=checkbox][name=contact]");
let checkedAnswer = [];

// Use Array.forEach to add an event listener to each checkbox.
contacts.forEach(function (contact) {
	contact.addEventListener('change', function () {
		checkedAnswer =
			Array.from(contacts) // Convert checkboxes to an array to use filter and map.
			.filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
			.map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

		//		console.log(checkedAnswer);
		if (checkedAnswer.length === 0) {
			alert("Best day for call is mandatory field.");
			error.removeAttribute("hidden");
		} else {
			error.setAttribute("hidden", true);
		}
	})
});

//valiate form
function validate() {
	var isValid = false;
	contactUs.className = "needs-validation";
	if (!contactUs.checkValidity()) {
		event.preventDefault();
		event.stopPropagation();
		contactUs.className = "was-validated";
	}
	isValid = true;

	var contacts = document.getElementsByName("contact");
	var isChecked = false;
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].checked) {
			isChecked = true;
			error.setAttribute("hidden", true);
			break;
		} else {
			error.removeAttribute("hidden");
			event.preventDefault();
		}
	}

	if ((isChecked) && (name.value != null) && email.value != null && phone.value != null && info.value != null && emal.indexOf("@") != -1 && name.value != "" & email.value != "" && phone.value != "" && info.value != "") {
		message.innerHTML = "All fields in the form are valid. ";
	} else {
		message.innerHTML = "At least one field in the form is not valid.";
		event.preventDefault();
		event.stopPropagation();
	}
}

function resetView() {
	contactUs.className = "needs-validation";
	error.setAttribute("hidden", true);
	message.innerHTML = "";

}
