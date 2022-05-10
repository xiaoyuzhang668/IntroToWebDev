let count = 0;
let counterElement = document.getElementById("counter");
counterElement.innerHTML = count;


function increaseByOne() {
	let num = parseInt(counterElement.innerHTML) + 1;
counterElement.value = num;
	counterElement.innerHTML = num;

	if (parseInt(num) === 4) {
		clearInterval(countUpTimerId);
	}

}

let countUpTimerId = setInterval(increaseByOne, 300);
