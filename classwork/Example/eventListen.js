!DOCTYPE html >
	<
	html >
	<
	title > Keypress Demo < /title> <
script >


	window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
	let textBox = document.querySelector("#name");
	textBox.addEventListener("keypress", keypressHandler);
}

function keypressHandler(event) {
	if (event.charCode == 13) {
		let textBox = event.target;
		alert("Hello, " + textBox.value + "!");
	}

	<
	/script> <
	body >
		Name ? < input type = "text"
	id = "name" >
		<
		/body>         < /
	html >




		let hide = document.querySelectorAll(".hide");

	function myClickHandler(event) {
		event.target.style.color = "black";
	}

	for (let i = 0; i < hide.length; i++) {
		hide[i].addEventListener("click", myClickHandler);

	}


	function myMouseoverHandler(event) {
		event.target.style.backgroundColor = "yellow";
	}

	function myMouseoutHandler(event) {
		event.target.style.backgroundColor = "white";
	}

	// Register the event handlers here
	let elements = document.getElementsByClassName("highlight");
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener("mouseover", myMouseoverHandler);
		elements[i].addEventListener("mouseout", myMouseoutHandler);
	}
