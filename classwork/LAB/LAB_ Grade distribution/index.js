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
	console.log(distributeArray);
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
		document.querySelector(".bar0").setAttribute("style", "height: 10px;");
		document.querySelector(".bar1").setAttribute("style", "height: 20px;");
		document.querySelector(".bar2").setAttribute("style", "height: 30px;");
		document.querySelector(".bar3").setAttribute("style", "height: 40px;");
		document.querySelector(".bar4").setAttribute("style", "height: 50px;");
	}

	//		set bar height for css style
	let barHeight = [];
	let barCss = [];
	for (var j = 0; j < graphNumber[j]; j++) {
		if (graphNumber[j] == 0) {
			barHeight[j] = "height: 0px;";
		} else {
			barHeight[j] = graphNumber[j] * 10;
			barHeight[j] = "height: " + barHeight[j] + "px;";
		}
		barCss.push(barHeight[j]);
	}
	console.log(barCss);
	return barCss;
}

//original grade entry of string scores
setTableContent("5 63 68 65 87 654 76 54 77 75 46 45 32 32 45 85 6 343  5");
