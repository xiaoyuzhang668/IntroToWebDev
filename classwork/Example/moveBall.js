let timerId;

window.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", startMoving);
});

function startMoving() {
	timerId = setInterval(moveBall, 10);
}

function moveBall() {
	let ballImage = document.getElementById("ball");
	let left = parseInt(ballImage.style.left);
	ballImage.style.left = left + 1 + "px";
}
