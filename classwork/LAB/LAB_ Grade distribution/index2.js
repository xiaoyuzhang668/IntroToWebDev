//original grade entry
let gradeEntry = ("98 78 98 83 86   test  0    99 45 90 90 59");

//split text string into array seperated by space and return the array
function parseScores(scoresString) {
	let parsedString = scoresString.split(" ");
	return parsedString;
}

//filter out the empty string and null string
let result = parseScores(gradeEntry);
result = result.filter(function (n) {
	return (n !== undefined && n !== null && n != '');
});
//run function to calculate grad distribution and assign array value for output

let graphNumber = buildDistributionArray(result);

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

document.getElementById("a").innerHTML = graphNumber[0];
document.getElementById("b").innerHTML = graphNumber[1];
document.getElementById("c").innerHTML = graphNumber[2];
document.getElementById("d").innerHTML = graphNumber[3];
document.getElementById("e").innerHTML = graphNumber[4];


function setTableContent(userInput) {

}
//
//// The argument can be changed for testing purposes
//setTableContent("45 78 98 83 86 99 90 59");
