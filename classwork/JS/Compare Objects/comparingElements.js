// JavaScript is dynamically typed - which means we can mix types in our arrays.
// That can cause all sorts of confusion. 
// Mixing types in arrays is a *bad* practice. 
// The following is for demonstration only.
var testArray = [0, 1, 1, "1", 3, "311"];

// We compare an element with the following element, 
// we need to stop with the last 2 elements
// testArray.length - 1 will stop us at the element before the last.
for (var position = 0; position < testArray.length - 1; position++) {
	// Store the elements we are comparing to make the code more readable 
	var currentElement = testArray[position];
	var nextElement = testArray[position + 1];

	// Is currentElement greater than nextElement?    
	console.log("Testing " + currentElement + " and " + nextElement +
		"(greater than): " + (currentElement > nextElement));

	// Is currentElement less than or equal to nextElement?
	console.log("Testing " + currentElement + " and " + nextElement +
		"(less than or equal to): " + (currentElement <= nextElement));

	// Are they equal to (==) each other?
	if (currentElement == nextElement) {

		// If they are equal to (==) each other, 
		// are they strictly equal(===) to each other?
		console.log("Testing " + currentElement + " and " + nextElement +
			"(strictly equal to): " + (currentElement === nextElement));

		// If they are not strictly equal (===), what are their types?
		if (currentElement !== nextElement) {
			// Use the typeof operator to identify the type of an element
			console.log(currentElement + " is " + typeof currentElement);
			console.log(nextElement + " is " + typeof nextElement);
		}
	} else {
		console.log("Testing " + currentElement + " and " + nextElement +
			"(equal to): false");
	}
}
