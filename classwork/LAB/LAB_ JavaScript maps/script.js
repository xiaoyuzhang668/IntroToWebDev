function calcWordFrequencies() {
	let arrListed = [];
	const objListed = {};
	let listWords = prompt("Please enter a list of words seperated by space:");
	arrListed = listWords.split(" ");

	//	get map object; including key and value of total count 
	for (const a of arrListed) {
		if (objListed[a]) {
			objListed[a] += 1;
		} else {
			objListed[a] = 1;
		}
	}

	//key value pair displayed in map, excluding when key is empty space
	for (let e in objListed) {
		if (e != "") {
			console.log(e + " " + objListed[e]);
		}
	}
}

calcWordFrequencies();
