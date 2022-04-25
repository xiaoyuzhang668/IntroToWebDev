let movie = { // Code will be tested with different actors and movies
	name: "Forrest Gump",
	director: "Robert Zemeckis",
	composer: "Alan Silvestri",
	cast: {
		"Tom Hanks": "Forrest Gump",
		"Michael Connor Humphreys": "Young Forrest Gump",
		"Robin Wright": "Jenny Curran",
		"Gary Sinise": "Lieutenant Dan Taylor"
	},
	roleOf: function (actorName) {
		//		for (let i in this.cast) {
		if (this.cast[actorName] !== undefined) {
			console.log(this.cast[actorName]);
			return true;
		} else {
			let message = "Not in this movie.";
			console.log(message);
			return true;
		}
		//		}
	}
};
let result = movie.roleOf("Garyd Sinise");
