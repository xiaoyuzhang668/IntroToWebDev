//split text string into array seperated by space and return the array
function parseScores(scoresString) {
	//	parse string scores into array
	let parsedString = scoresString.split(" ");
	//	remove empty or null element from array
	parsedString = parsedString.filter(function (n) {
		return (n !== undefined && n !== null && n != '');
	});
	console.log(parsedString);
	return parsedString;
}

//function to calculate grade distribution
function buildDistributionArray(scoresArray) {
	let distributeArray = [];
	distributeArray[0] = 0;
	distributeArray[1] = 0;
	distributeArray[2] = 0;
	distributeArray[3] = 0;
	distributeArray[4] = 0;

	for (let i = 0; i < scoresArray.length; i++) {
		if (scoresArray[i] >= 90) {
			distributeArray[0]++;
		} else if (scoresArray[i] >= 80) {
			distributeArray[1]++;
		} else if (scoresArray[i] >= 70) {
			distributeArray[2]++;
		} else if (scoresArray[i] >= 60) {
			distributeArray[3]++;
		} else if (scoresArray[i] < 60 && scoresArray[i] >= 0) {
			distributeArray[4]++;
		}
	}

	return distributeArray;
}

function setTableContent(userInput) {
	//	parse userInput, run parseScores function
	let parsedS = parseScores(userInput);
	//run function to calculate grad distribution and assign array value for output
	//	run buildDistributionArray function
	let graphNumber = buildDistributionArray(parsedS);

	//display frequencies of grade in html file when the user input is not empty string
	const isAllZero = graphNumber.every(item => item === 0);
	if (isAllZero) {
		//		display one cell when it is empty user input
		document.getElementById("nograph").style.display = "block";
		document.getElementById("graph").style.display = "none";
	} else {
		//		display frequencies of grade
		document.getElementById("graph").style.display = "block";
		document.getElementById("nograph").style.display = "none";

		document.getElementById("a").innerHTML = graphNumber[0];
		document.getElementById("b").innerHTML = graphNumber[1];
		document.getElementById("c").innerHTML = graphNumber[2];
		document.getElementById("d").innerHTML = graphNumber[3];
		document.getElementById("e").innerHTML = graphNumber[4];
		return graphNumber;
	}
}
let result = setTableContent("568 65 87 654 76 5 45 32 32 45 85 6 343 5");
console.log(result);
//		set bar height for css style
let barHeight = [];
let barCss = [];
for (var j = 0; j < result[j]; j++) {
	if (result[j] == 0) {w
		barHeight[j] = "height: 0px;";
	} else {
		barHeight[j] = result[j] * 10;
		barHeight[j] = "height: " + barHeight[j] + "px;";
	}
	barCss.push(barHeight[j]);
}
console.log(barCss);



//original grade entry of string scores
