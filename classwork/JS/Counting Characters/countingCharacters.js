function countingCharacters(stringToCount) {
	console.log(stringToCount + " has " + stringToCount.length + " characters. ")
}

function countingCharacters2(stringToCount, characterToFind) {
	var characterCount = 0;
	for (var position = 0; position < stringToCount.length; position++) {
		if (stringToCount[position] == characterToFind) {
			characterCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears: " + characterCount);
}


//str - string to search
//search - characters to find in str
function countingCharacters3(str, search) {
	var count = 0; // number of times found
	var numChars = search.length; //length of search str

	// We need to stop looping based on multiple characters.
	// Example: if searching "Ohio" with 3 characters at a time we want to stop at 'h' 
	// so we do not go past the end of the string. 
	var lastIndex = str.length - numChars;
	// This time, we are looking for a series of characters - a substring. 
	for (var index = 0; index <= lastIndex; index++) {
		// substring gets a part of a string from a start to end index         
		var current = str.substring(index, index + numChars);
		// if the substring matches our series, increase our counter         
		if (current == search) {
			count++;
		}
	}
	//	console.log("String to search in: " + str);
	//	console.log("Character to find: " + search);
	//	console.log("Number of times the character appears: " + count);
	return count;
}
