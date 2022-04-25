function showAnswer() {
	let answerElement = document.getElementsByClassName("answer")[0];

	answerElement.style.display = "block";
}

setTimeout(showAnswer, 2500
	/* Your solution goes here */
);


const progressIndicator = document.getElementById("progress");
let progress;
let timerId;

let startButton = document.getElementById("startBtn");
startButton.addEventListener("click", startDownload);

function addProgress() {
	progress += 20;
	progressIndicator.style.width = progress + "px";

	if (progress >= 100) {
		clearInterval(timerId);
	}
}

function startDownload() {
	progress = 0;
	progressIndicator.style.width = progress;
	timerId = setInterval(
		addProgress, 100)
};



let count = 0;
let counterElement = document.getElementById("counter");
counterElement.innerHTML = count;
let countingId;


function counting() {
	let count = parseInt(counterElement.value) + 1;
	if (count >= 5) {
		count = 0;
		// stop countdown (countdowntimerId)
		clearInterval(countingId);
	}
	counterElement.value = count;
}
countingId = setInterval(counting, 300);
