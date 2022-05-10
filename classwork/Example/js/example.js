//DECLARE VARIABLE
// Declaring a variable
let numSongs;

// Variable is assigned a number
numSongs = 5;

// Variable is declared and assigned a number (initialized)
let numAlbums = 20;

// Variable may be assigned a value without first being declared
hitCount = 10;

//INPUT AND OUTPUT
// Display the prompt dialog box
let name = prompt("What is your name?");

// Output to the console
console.log("Hello, " + name + "!");

//CONDITINAL
let age = 6;
if (age % 2 == 0) {
	console.log("age is even");
} else {
	console.log("age is odd");
}

if (age > 10) {
	console.log("age is greater than 10");
} else {
	console.log("age is not greater than 10");
}

//NESTED IF-ELSE
let userAge = 18;
if (userAge <= 12) {
	console.log("Enjoy your early years.");
} else {
	console.log("You are at least 13.");

	if (userAge >= 18) {
		console.log("You are old enough to vote.");
	} else {
		console.log("You are too young to vote.");
	}
}

//NESTED IF-ELSE VS ELSE -IF
// Nested if-else statements
if (score >= 90) {
	grade = "A";
} else {
	if (score >= 80) {
		grade = "B";
	} else {
		if (score >= 70) {
			grade = "C";
		} else {
			if (score >= 60) {
				grade = "D";
			} else {
				grade = "F";
			}
		}
	}
}

// else-if statements
if (score >= 90) {
	grade = "A";
} else if (score >= 80) {
	grade = "B";
} else if (score >= 70) {
	grade = "C";
} else if (score >= 60) {
	grade = "D";
} else {
	grade = "F";
}


//FALSTY VALUES
//Example Description
//if (0) Zero
//if ("") Empty string
//if (NaN) Not a number
//if (undefined) Variable that has not been assigned a value
//if (null) No object value

//CONDITIONAL OPERATOR
score = 75;
console.log(score >= 60 ? "passing" : "failing");

registeredEarly = false;
age = 20;
fee = registeredEarly || age <= 18 ? 10 : 15;
console.log("Fee is $" + fee);

//SWITCH STATEMENT
switch (expression) {
	case value1:
		// Statements executed when expression's value matches value1
		break; // optional
	case value2:
		// Statements executed when expression's value matches value2
		break; // optional

		// ...

	default:
		// Statements executed when no cases match
}

value = 10;
switch (value) {
	case 1:
		coin = "penny";
		break;
	case 5:
		coin = "nickel";
		break;
	case 10:
		coin = "dime";
		break;
	case 25:
		coin = "quarter";
		break;
	default:
		coin = "unknown";
}

console.log(coin);

//WHILE LOOP
i = 1;
while (i <= 4) {
	console.log(i);
	i++;
}
console.log("Done!");

//DO WHILE LOOP
do {
	body
} while (condition);

i = 1;
do {
	console.log(i);
	i++;
} while (i <= 4);
console.log("Done!");

//DO WHILE LOOP
do {
	body
} while (condition);

//FOR LOOP
for (i = 1; i <= 4; i++) {
	console.log(i);
}
console.log("Done!");

//BREAK AND CONTINUE STATEMENT
for (c = 1; c <= 5; c++) {
	if (c == 4) {
		break; // Leave the loop
	}
	console.log(c); // 1 2 3 (missing 4 and 5)
}

for (c = 1; c <= 5; c++) {
	if (c == 4) {
		continue; // Iterate again immediately
	}
	console.log(c); // 1 2 3 (missing 4) 5
} //DECLARE AND CALL A FUNCTION
function displaySum(x, y, z) {
	let sum = x + y + z;
	console.log(sum);
}

console.log("About to call function");
displaySum(2, 5, 3);
console.log("Returned from function");

//DRAW BOX
function drawBox(numRows, numCols, boxChar = "X") {
	for (let r = 0; r < numRows; r++) {
		let line = "";
		for (let c = 0; c < numCols; c++) {
			line += boxChar;
		}
		console.log(line);
	}
}

drawBox(5, 4, "?");
drawBox(2, 6);

//FUNCTION RETURN VALUE
function findAverage(num1, num2) {
	return (num1 + num2) / 2;
}

let ave = findAverage(6, 7);
console.log(ave);

//ASSIGN FUNCTION EXPRESSTION TO VARIABLE
// Function name is omitted
let displaySum = function (x, y, z) {
	console.log(x + y + z);
}

// Function call
displaySum(2, 5, 3);

//USING FUNCTION EXPRESSION BEFORE ASSIGNMENT
console.log(findLargest(5, 3));

function findLargest(x, y) {
	let largest;
	if (x > y) {
		largest = x;
	} else {
		largest = y;
	}

	return largest;
}

displaySum(2, 5, 3);

let displaySum = function (x, y, z) {
	console.log(x + y + z);
}

//ARROW FUNCTIONS THAT SUM 2 NUMBERS AND SQUARE A NUMBER

let findSum = (a, b) => a + b;

let sum = findSum(3, 6);
console.log(sum);

let square = x => x * x;

console.log(square(5));

//INITIALIZE AN DISPLAY ARRAY ELEMENTS
let scores = [];

scores[0] = 6;
scores[1] = 15;
scores[2] = 8;

console.log(scores[0]);
console.log(scores[1]);
console.log(scores[2]);

let teams = ["Tigers", "Bisons",
             "Eagles", "Cobras"];

console.log(teams);

//LOOP THROUGH ARRAY WITH FOR LOOP
let groceries = ["bread", "milk", "peanut butter"];

// Display all elements in groceries array
for (i = 0; i < groceries.length; i++) {
	console.log(i + " - " + groceries[i]);
}

//LOOP THROUGH ARRAY WITH FOR-OF LOOP
let groceries = ["bread", "milk", "peanut butter"];

// Display all elements in groceries array
for (let item of groceries) {
	console.log(item);
}

//LOOP THROUGH ARRAY WITH FOREACH METHOD
let groceries = ["bread", "milk", "peanut butter"];

// Display all elements in groceries array
groceries.forEach(function (item, index) {
	console.log(index + " - " + item);
});


//PASSING ARRAY TO FUNCTION
function findAverage(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum / numbers.length;
}

function giveBonus(scores, bonus) {
	for (let i = 0; i < scores.length; i++) {
		scores[i] += bonus;
	}
}

let examScores = [79, 85, 60, 93];
console.log("Average is " + findAverage(examScores));

giveBonus(examScores, 5);
console.log("New average is " + findAverage(examScores));


//SEARCH FOR ARRAY ELEMENT
let scores = [80, 92, 75, 64, 88, 92];

s = scores.indexOf(92); // 1
s = scores.indexOf(92, 2); // 5
s = scores.indexOf(100); // -1
s = scores.lastIndexOf(92); // 5
s = scores.lastIndexOf(92, 4); // 1
s = scores.lastIndexOf(50); // -1

//SORT ARRAY OF NUMBERS
let numbers = [200, 30, 1000, 4];

// Sort based on Unicode values: [1000, 200, 30, 4]
numbers.sort();

// Sort numbers in ascending order: [4, 30, 200, 1000]
numbers.sort(function (a, b) {
	return a - b;
});

//CREATE OBJECT WTH OJECT LITERAL
let book = {};
book = {
	title: "Outliers",
	published: 2011,
	keywords: ["success", "high-achievers"]
};

book = {
	title: "Outliers",
	published: 2011,
	keywords: ["success", "high-achievers"],
	author: {
		firstName: "Malcolm",
		lastName: "Gladwell"
	}
};

console.log(book.title);
console.log(book.keywords[0]);
console.log(book.author.lastName);

//DEFINE METHOD IN AN OBJECT LITERAL
let book = {
	title: "Quiet",
	author: {
		firstName: "Susan",
		lastName: "Cain"
	},

	// Define a method
	getAuthorName: function () {
		return this.author.firstName + " " + this.author.lastName;
	}
};

// Call a method that returns "Susan Cain"
let name = book.getAuthorName();

//DEFINE A METHOD FOR AN EXISTING OBJECT
let book = {
	title: "Quiet",
	author: {
		firstName: "Susan",
		lastName: "Cain"
	}
};

// Define a method
book.getAuthorName = function () {
	return this.author.firstName + " " + this.author.lastName;
};

// Call a method that returns "Susan Cain"
let name = book.getAuthorName();

//FOR IN LOOP
for (variable in object) {
	body
}

let stateCapitals = {
	AR: "Little Rock",
	CO: "Denver",
	NM: "Sante Fe"
};

console.log("CO capital is " + stateCapitals["CO"]);

stateCapitals["TX"] = "Austin";

console.log("All capitals:");
for (let state in stateCapitals) {
	console.log(state + " is " + stateCapitals[state]);
}

//OBJECT MAP OPERATION EXAMPLE
let stateCapitals = {
	AR: "Little Rock",
	CO: "Denver",
	NM: "Sante Fe"
};

let states = Object.keys(stateCapitals);
console.log(states); // AR,CO,NM
console.log(states.length); // 3

// Evaluates true
if ("NM" in stateCapitals) {
	console.log("NM exists");
}

// Remove the NM/Santa Fe pair
delete stateCapitals["NM"];

// Evaluates false
if ("NM" in stateCapitals) {
	console.log("NM exists");
}

// Outputs undefined
console.log(stateCapitals["NM"]);


//STATE CAPITAL IN A MAP
let stateCapitals = new Map();
stateCapitals.set("AR", "Little Rock");
stateCapitals.set("CO", "Denver");
stateCapitals.set("NM", "Santa Fe");

console.log("Size of map is " + stateCapitals.size);

if (stateCapitals.has("CO")) {
	console.log("CO capital is " + stateCapitals.get("CO"));
}

console.log("All capitals:");
for (let [state, capital] of stateCapitals) {
	console.log(state + " is " + capital);
}

//COUNTING SPACES IN A STRING
let s = "I love JS";
let spaces = 0;

for (let i = 0; i < s.length; i++) {
	if (s.charAt(i) === " ") {
		spaces++;
	}
}

console.log(spaces + " spaces");

//SEARCH FOR A STRAING WITH INDEXOF AN LASTINDEXOF
let s = "Seek and you will find.";
s.indexOf("and"); // 5
s.indexOf("e"); // 1 (first occurrence)
s.lastIndexOf("e"); // 2 (last occurrence)
s.indexOf("SEEK"); // -1 (case-sensitive search)

//REPLACE A STRING WITH REPLACE()
let s = "Seek and you will find.";
s = s.replace("find", "discover"); // "Seek and you will discover"
s = s.replace("Seek", "Search"); // "Search and you will discover"
s = s.replace("SEARCH", "search"); // No change (case-sensitive search)


//SEARCH FOR A STRAING WITH INDEXOF AN LASTINDEXOF
let s = "Seek and you will find.";
s.indexOf("and"); // 5
s.indexOf("e"); // 1 (first occurrence)
s.lastIndexOf("e"); // 2 (last occurrence)
s.indexOf("SEEK"); // -1 (case-sensitive search)

//TEMPLATE LITERAL
x = 2;
y = 3;
result = x + " * " + y + " = " + (x * y);
console.log(result);

result = `${x} * ${y} = ${x * y}`;
console.log(result);

console.log(`line 1
line 2`);

//DATE OBJECT
let currDateTime = new Date();
console.log(currDateTime);

let oneSecPastEpoch = new Date(1000);
console.log(oneSecPastEpoch);

// Feb 22, 1732
let georgeBirthday = new Date(1732, 1, 22);
console.log(georgeBirthday);

// Oct 21, 2035 at 7:28:00
let theFuture = new Date(2035, 9, 21, 7, 28, 0);
console.log(theFuture);

//DISPLAY 5 RANDOM NUMBER
for (i = 0; i < 5; i++) {
	console.log(Math.random());
}

//DISPLAY 5 RANDOM NUMBER BETWEEN 1 AND 10
// Return a random number between min and max (inclusive).
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < 5; i++) {
	console.log(getRandomNumber(1, 10));
}


//DOM STRUCTURE
//<!DOCTYPE HTML>
//<html lang="en"> 
//   <title>DOM Example</title>  
//   <script src="script.js" defer></script>  
//   <body>     
//      <ol>
//         <li>Red</li>
//         <li>Green</li>
//      </ol>
//   </body>
//</html>

let listNode = document.createElement("li");
let textNode = document.createTextNode("Blue");
listNode.appendChild(textNode);

let colorList = document.querySelector("ol");
colorList.appendChild(listNode);

let itemNodes = colorList.querySelectorAll("li");
let clonedNode = itemNodes[0].cloneNode(true);
colorList.insertBefore(clonedNode, itemNodes[2]);

//FOCUS AND BLUR EVENT HANDLING
//
//	<
//	p >
//	<
//	label
//for = "name" > Name: < /label> <
//input type = "text"
//id = "name" >
//	<
//	/p> <
//p >
//	<
//	label
//for = "answer" > Answer: < /label> <
//input type = "number"
//id = "answer" >
//	<
//	/p>
let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
	let input = inputs[i];
	input.style.border = "1px solid red";
	input.addEventListener("focus", function () {
		this.style.border = "1px solid green";
	});
	input.addEventListener("blur", function () {
		this.style.border = "1px solid blue";
	});
}

//REGISTERING EVENT HANDLER WITH ADDEVETLISTENER
//<!DOCTYPE html>
//<html>
//  <title>Keypress Demo</title>
//  <script>

window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
	let textBox = document.querySelector("#name");
	textBox.addEventListener("keypress", keypressHandler);
}

function keypressHandler(event) {
	if (event.charCode == 13) {
		let textBox = event.target;
		alert("Hello, " + textBox.value + "!");
	}
}

//  </script>
//  <body>                
//    Name? <input type="text" id="name">
//  </body>        
//</html>

//MOUSE EVENT
function myMouseoverHandler(event) {
	event.target.style.backgroundColor = "yellow";
}

function myMouseoutHandler(event) {
	event.target.style.backgroundColor = "white";
}

function myMouseclickHandler(event) {
	event.target.style.color = "black";
}

// Register the event handlers here
let elements = document.getElementsByClassName("highlight");
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("mouseover", myMouseoverHandler);
	elements[i].addEventListener("mouseout", myMouseoutHandler);
	elements[i].addEventListener("click", myMouseclickHandler);
}

//CAPTURING AND BUBBLING
//<!DOCTYPE html>
//<html>
//<title>Meteors</title>
//<script src="meteors.js" defer></script>
//<body>
//  <p>3 biggest meteor strikes on Earth:</p>
//  <ol id="ol">
//    <li>Vredefort Dome, South Africa</li>
//    <li>Chicxulub Crater, Mexico</li>
//    <li>Sudbury Basin, Ontario, Canada</li>
//  </ol>
//</body>
//</html>

list = document.getElementById("ol");

list.addEventListener("mouseover",
	function (e) {
		e.target.style.fontSize = "18pt";
	});

list.addEventListener("mouseout",
	function (e) {
		e.target.style.fontSize = "14pt";
	}, true);

//PREVENT DEFAULT BEHAVIOUR
//<!DOCTYPE html>
//<html lang="en">
//<title>Password Strength</title>
//<script src="password.js"></script>
//<body>
//   <div>
//      <label for="password">Password:</label>
//      <input type="text" id="password">
//      <span id="strength"></span>
//   </div>
//</body>
//</html>
// After DOM is loaded, register event handlers
window.addEventListener("DOMContentLoaded", function () {
	let passwordInput = document.querySelector("#password");
	passwordInput.addEventListener("keydown", preventSpaces);
	passwordInput.addEventListener("input", checkPassword);
});

function preventSpaces(event) {
	// Ignore space input 
	if (event.key == " ") {
		event.preventDefault();
	}
}

function checkPassword() {
	let password = this.value;
	let passwordStrength = 0;

	// Password should be long enough
	if (password.length >= 6) {
		passwordStrength++;
	}

	// Password should not contain "qwerty" in upper or lowercase
	if (password.toLowerCase().indexOf("qwerty") == -1) {
		passwordStrength++;
	}

	// Password should have at least one digit 
	let containsDigit = false;
	for (let i = 0; i < password.length; i++) {
		let char = password.charCodeAt(i);
		if (char >= 48 && char <= 57) {
			containsDigit = true;
		}
	}

	if (containsDigit) {
		passwordStrength++;
	}

	// Convert passwordStrength into a descriptive word 
	let strengthWord = "";
	if (passwordStrength == 1) {
		strengthWord = "Weak";
	} else if (passwordStrength == 2) {
		strengthWord = "Moderate";
	} else if (passwordStrength == 3) {
		strengthWord = "Strong";
	}

	// Display strengthWord
	document.querySelector("#strength").innerHTML = strengthWord;
}

//COUNT CHARACTERS
let inputElement = document.getElementById("yourName");

function countChars(event) {
	document.getElementById("stringLength").innerHTML = event.target.value.length;
}
inputElement.addEventListener("focus", countChars);

//DISPLAY TEXT
let h3Element = document.getElementsByTagName("h3")[0];

h2Element.addEventListener("mouseover", displayText);

function displayText() {
	console.log("Event fired");
}

//TIMER
//<div id="special">
//  <h1>Today Only!</h1>
//  <p>2 widgets for $10!</p>
//</div>
//#special {
//   display: none;
//   border: solid red 1px;
//   ...
//}

let timerId = setTimeout(showSpecial, 3000);

function showSpecial() {
	let special = document.getElementById("special");
	special.style.display = "block";
}
// SAME AS ABOVE
let timerId = setTimeout(function () {
	let special = document.getElementById("special");
	special.style.display = "block";
}, 3000);

//DISAPPEAR AFTER 10 
function showSpecial() {
	let special = document.getElementById("special");
	special.style.display = "block";
	setTimeout(hideSpecial, 10000);
}

function hideSpecial() {
	let special = document.getElementById("special");
	special.style.display = "none";
}

//BALL MOVE WITH SETINTERVAL()
//<img src="ball.png" id="ball" alt="ball" 
//   style="position:absolute; left:0">
let ballImage;
let timerId;

function startMoving() {
	ballImage = document.getElementById("ball");
	timerId = setInterval(moveBall, 10);
}

function moveBall() {
	let left = parseInt(ballImage.style.left);
	ballImage.style.left = left + 5 + "px";
}
//CANCEL MOVEMENT
function moveBall() {
	let left = parseInt(ballImage.style.left);
	if (left + ballImage.width > document.body.clientWidth) {
		clearInterval(timeid);
	} else {
		ballImage.style.left = left + 2 + "px";
	}
}
//MOVE DIFFERENT DIRECTION
function moveBall(distance) {
	let left = parseInt(ballImage.style.left);
	ballImage.style.left = left + distance + "px";
}

setInterval(function () {
	moveBall(-5);
}, 20);


//COUNT DOWN
let countdowntimerId = null; // stores unique identifier of interval timer
let number = document.getElementById("number");
let startbutton = document.getElementById("startbutton");
let stopbutton = document.getElementById("stopbutton");

function countdown() {
	let num = parseInt(number.value) - 1;
	if (num <= 0) {
		num = 0;
		startbutton.disabled = false;
		stopbutton.disabled = true;
		clearInterval(countdowntimerId);

	}
	number.value = num;
}

startbutton.addEventListener("click", function () {
	startbutton.disabled = true;
	stopbutton.disabled = false;
	countdowntimerId = setInterval(countdown, 1000);

});

stopbutton.addEventListener("click", function () {
	startbutton.disabled = false;
	stopbutton.disabled = true;
	clearInterval(countdowntimerId);

});

//PROGRESS SETTIMEOUT
const progressIndicator = document.getElementById("progress");
let progress;
let timerId;

let startButton = document.getElementById("startBtn");
startButton.addEventListener("click", startDownload);

function addProgress() {
	progress += 20;
	progressIndicator.style.width = progress + "px";

	if (progress >= 100) {
		clearInterval(timerId);
	}
}

function startDownload() {
	progress = 0;
	progressIndicator.style.width = progress;
	timerId = setInterval(
		addProgress, 200
	);
}


//MODIFY CSS
//<div id="mydiv" style="width: 100px; height: 100px; 
//                        background-color: green">
//</div>
//
//<div>
let myDiv = document.getElementById("mydiv");
let width = myDiv.style.getPropertyValue("width");
width = parseInt(width) + 100;
myDiv.style.setProperty("width", width + "px");
myDiv.style.setProperty("background-color", "red");
myDiv.style.removeProperty("width");

//ENSURE CHECKBOX IS SELECTED BEFORE THE FORM IS SUBMITTED
function checkForm(event) {
	let tosWidget = document.querySelector("#tos");

	// Cancel form submission if tos not checked
	if (!tosWidget.checked) {
		event.preventDefault();
	}
}

let formWidget = document.querySelector("#tosForm");
formWidget.addEventListener("submit", checkForm);

//VALIDATE FORM
function validateForm(event) {
	let form = document.getElementById("ageForm");
	let userAge = form.userAge;

	userAge.style.backgroundColor = "LightGreen";
	if (userAge.value < 0) {
		userAge.style.backgroundColor = "Orange";
		event.preventDefault();
	}
}

let form = document.getElementById("ageForm");
ageForm.addEventListener("submit", validateForm);

//VALIATE FORM
let form = document.getElementById("userForm");

function validateForm(event) {
	let phoneNumber = form.phoneNumber.value;
	let userName = form.userName.value;

	if (isNaN(phoneNumber)) {
		console.log("Phone number is invalid");
		event.preventDefault();
	}

	if (userName.length < 11) {
		console.log("User name is invalid");
		event.preventDefault();
	}
}

form.addEventListener("submit", validateForm);

//VALIDATE FORM
let validColor = "LightGreen";
let invalidColor = "Orange";
let userAgeInput = document.getElementById("userAge");
let formWidget = document.getElementById("userForm");
let userAgeValid = false;

function userAgeCheck(event) {

	if (userAgeInput.value > 15 && userAgeInput.value < 120) {
		event.target.style.backgroundColor = "LightGreen";
		userAgeValid = true;
	} else {
		event.target.style.backgroundColor = "Orange";
		userAgeValid = false;
		event.preventDefault();

	}
}

function formCheck(event) {
	if (!userAgeValid) {
		event.preventDefault();
	}
}

userAgeInput.addEventListener("input", userAgeCheck);
formWidget.addEventListener('submit', formCheck);
