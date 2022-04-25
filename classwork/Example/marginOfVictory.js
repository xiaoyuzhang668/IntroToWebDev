let game = {
	winner: {
		name: "a",
		score: 8
	},
	loser: {
		name: "b",
		score: 4
	}
};

game.getMarginOfVictory = function () {
	return this.winner.score - this.loser.score;
};
game.showSummary = function () {
	message = this.winner.name + ": " + this.winner.score + "\n";
	message += this.loser.name + ": " + this.loser.score + "\n";
	message += "Margin of victory: " + this.getMarginOfVictory();
	console.log(message);
	return message;
};

let result = game.showSummary();
