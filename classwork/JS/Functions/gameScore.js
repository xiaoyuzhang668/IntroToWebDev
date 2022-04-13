let game = {
   winner: {
    name: "name1",
    score: "9"
   }, 
  loser: {
    name: "name2",
    score: "4"
   }, 
getMarginOfVictory : function() {
   return this.winner.score - this.loser.score;
},
   // Define a method
   showSummary: function() {
      console.log(this.winner.name + " - "+this.winner.score);
         console.log(this.loser.name + " - " + this.loser.score);    
           console.log("Margin of victory: " + this.getMarginOfVictory());     
      }
};

let result = game.showSummary();