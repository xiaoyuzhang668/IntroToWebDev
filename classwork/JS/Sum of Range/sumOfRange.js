var testArray = [];
var sum = 0;

for (var i = 0; i < 5; i++) {
	var newElement = prompt("Enter a number of your choice:");
	newElement = parseInt(newElement);
	testArray.push(newElement);
}


for (var position = 0; position < testArray.length; position++) {
	sum += testArray[position];
}

console.log("The sum of " + testArray + " is: " + sum);
