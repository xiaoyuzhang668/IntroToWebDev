//split text string into array seperated by space and return the array
function parseScores(scoresString) {
	//	parse string scores into array
	let parsedString = scoresString.split(" ");
	//	remove empty or null element from array
	parsedString = parsedString.filter(function (n) {
		return (n !== undefined && n !== null && n != '');
	});
	console.log(parsedString);
	//	return array
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
		document.getElementById("distributionTable").innerHTML = 
			'<tbody><tr><td> No graph to display </td></tr></tbody>';
		//		display one cell when it is empty user input
		//		document.getElementById("nograph").style.display = "block";
		//		document.getElementById("graph").style.display = "none";
	} else {
		//		display frequencies of grade when not all frequency are zero
		//		document.getElementById("graph").style.display = "block";
		//		document.getElementById("nograph").style.display = "none";		
		document.getElementById("distributionTable").innerHTML = 
			'<tbody><tr><td><div class = "bar0"></div></td><td><div class = "bar1" > </div></td><td><div  class = "bar2"></div></td><td><div 	class = "bar3" > </div></td><td><div class = "bar4"> </div></td></tr><tr><td>A</td><td>B</td><td>C</td><td>D</td><td>F</td><tr><td>'+graphNumber[0]+'</td><td>'+graphNumber[1]+'</td><td>'+graphNumber[2]+'</td><td>'+graphNumber[3]+'</td><td>'+graphNumber[4]+'</td></tbody>';
		
		for (let i=0; i<graphNumber.length; i++){
			document.querySelector(".bar"+i).style.setProperty("height", graphNumber[i]*10+"px");
		}
	}
}

setTableContent(" 45 78 98 83 86 99 90 59 ");
