// These JavaScript comments are instructions.
// Follow them step by step.
// When asked, write code to complete the task described.

// 1. FIND MAX
// ============
// Create a function named `findMax` that takes one parameter: an array of numbers named `numbers`.
// Find the maximum number in the array and return it.
// Tip: Start with 2 numbers in the array. Once the function works with 2 numbers, add a third, and so on.
// Write your code here:

function findMax(numbers) {
	var largestNumber = numbers[0];

	for (var i = 0; i < numbers.length; i++) {
		if (largestNumber < numbers[i]) {
			largestNumber = numbers[i];
		}
	}
	console.log(`The largest number in the array: ${largestNumber}`);
	return largestNumber;
}
// Open index.html in your browser, open the JavaScript console, confirm the result.

// Uncomment the code below to verify your function is working.
console.log("findMax =====");
var numbers = [46, 3, 40, 74, 63];
var actual = findMax(numbers);
console.log("[46, 3, 40, 74, 63] -> expected: 74, actual: %s", actual);
numbers = [3, 3, 3, 3];
actual = findMax(numbers);
console.log("[3, 3, 3, 3] -> expected: 3, actual: %s", actual);
numbers = [-1];
actual = findMax(numbers);
console.log("[-1] -> expected: -1, actual: %s", actual);


// 2. COMBINE ARRAYS
// =================
// Create a function named `combine` that takes two array parameters. Any type of array will do.
// The function should create a new, empty array and then add all elements from each parameter array to it.
// The function should NOT alter either parameter.
// Write your code here:

function combine(arr1, arr2) {
	var arr1;
	var arr2;
	var combined = [];

	for (var i = 0; i < arr1.length; i++) {
		combined += arr1[i] + ", ";
	}

	for (var j = 0; j < arr2.length - 1; j++) {
		combined += arr2[j] + ", ";
	}
	combined = combined + arr2[j];
	return combined;
}

// Uncomment the code below to verify your function is working.
console.log("combine =====");
var merged = combine(["Oak", "Maple", "Birch"], ["Hydrogen", "Helium"]);
console.log("expected: Oak,Maple,Birch,Hydrogen,Helium\nactual: %s", merged);
merged = combine([12.5, 3, 855], [true, false, true]);
console.log("expected: 12.5,3,855,true,false,true\nactual: %s", merged);
merged = combine(["Saturn"], ["Black Lab", "Borzoi", "Pug"]);
console.log("expected: Saturn,Black Lab,Borzoi,Pug\nactual: %s", merged);


// 3. CHALLENGE: SUBTRACT AN ARRAY
// ====================
// Create a function named `subtractArray` that takes two array parameters.
// The function should return a new array that includes all elements from the first array
// that do not exist in the second array. In effect, we "subtract" the elements in the second array
// from the first and return the result.
// The function should NOT alter either parameter.
// Write your code here:
function subtractArray(arr1, arr2) {
	var arr1;
	var arr2;
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i] == arr2[j]) {
				arr1.splice(i, 1);
			}
		}
	}
	return arr1;
}

// Uncomment the code below to verify your function is working.
console.log("subtractArray =====");
var result = subtractArray([1, 2, 3, 4, 5], [2, 4, 6]);
console.log("expected: 1,3,5\nactual: %s", result);
result = subtractArray(["Neptune", "Uranus", "Saturn", "Pluto"], ["Pluto"]);
console.log("expected: Neptune,Uranus,Saturn\nactual: %s", result);
result = subtractArray([1, 2, 3, 1, 2, 3, 1, 2, 3], [1, 3]);
console.log("expected: 2,2,2\nactual: %s", result);


/**********************************
 * The Software Guild
 * Copyright (C) 2019 Wiley edu LLC - All Rights Reserved
 *********************************/
