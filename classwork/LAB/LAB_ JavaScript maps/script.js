function calcWordFrequencies() {
	let arr = [];
	const obj = {};
	let listWords = prompt("Please enter a list of words seperated by space:");
	arr = listWords.split(" ");

	for (const element of arr) {
		if (obj[element]) {
			obj[element] += 1;
		} else {
			obj[element] = 1;
		}
	}

	for (let objElement in obj) {
		console.log(objElement + " " + obj[objElement]);
	}
}
calcWordFrequencies();
