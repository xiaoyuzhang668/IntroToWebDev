//for (var i = 0; i < 100; i++) {
//	console.log(Math.floor(Math.random() * 6) + 1);
//}

//fixed to 6 sides
//function rollDice() {
//	return Math.floor(Math.random() * 6) + 1;
//}
//
//for (var i = 0; i < 100; i++) {
//	console.log(rollDice());
//}


//number of sides is flexible
var numSides = prompt("How many sides does the dice have?");
var numUses = prompt("How many times is the dice have?");

function rollDice(numSides, numUses) {
	return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < numUses; i++) {
	console.log(rollDice(numSides));
}
