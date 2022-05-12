alert("te");

let playerTurn = true;
let computerMoveTimeout = 0;
let turnInfo = document.getElementById("turnInfo");
let x = document.getElementById("x");

let y = document.getElementById("y");

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () {
			boardButtonClicked(button);
		});
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {

	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {

			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			} else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
}

function boardButtonClicked(button) {
	// TODO: Complete the function
}

function switchTurn() {
	checkForWinner();
	if (gameStatus.MORE_MOVES_LEFT) {

	}
	if (gameStatus.gameStatus.HUMAN_WINS || gameStatus.gameStatus.COMPUTER_WINS || gameStatus.MORE_MOVES_LEFT) {
		playerTurn = false;
		if (gameStatus.gameStatus.HUMAN_WINS) {
			turnInfo.innerHTML = "You win!";
		} else if (gameStatus.gameStatus.COMPUTER_WINS) {
			turnInfo.innerHTML = "Computer win!";
		} else {
			turnInfo.innerHTML = "Draw game";
		}
	}

}

function makeComputerMove() {
	let buttons = document.getElementsByTagName("button");
	for (let i = 0; i < buttons.length; i++) {
		if (!buttons[i].disabled) {
			console.log("true");
		} else {
			console.log("false");
		}
	}
}

makeComputerMove();
//	for (let button of buttons) {
//		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
//			return gameStatus.MORE_MOVES_LEFT;
//		}
//	}
//
//	for (let i = 0; i < game.lights.length * 2; i++) {
//		const randRow = Math.floor(Math.random() * game.rowCount);
//		const randCol = Math.floor(Math.random() * game.columnCount);
//	}
//x.getAttribut////e('disabled');
//y.getAttribute("disabled");
