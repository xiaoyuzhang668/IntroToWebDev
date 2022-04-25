let dukeScores  = [72, 74, 84, 92, 93, 66, 69, 73, 70, 85, 75, 67, 79];
let ncScores    = [76, 73, 77, 90, 81, 74, 53, 68, 88, 84, 58, 81, 73];
let winningTeam = [];

// Who won the first game?
if (dukeScores[0] > ncScores[0]) {
   console.log("Duke won " + dukeScores[0] + "-" + ncScores[0] + ".");
}
else {
   console.log("North Carolina won " + ncScores[0] + "-" + dukeScores[0] + ".");
}

for (i=0; i<dukeScores.length; i++) {
 if (dukeScores[i] > ncScores[i]) {
  winningTeam.push("D");  
 } else {
    winningTeam.push("N");  
 }
}
console.log(winningTeam);

for (let item of winningTeam) {
   console.log(item);
}


// Display all elements in groceries array
winningTeam.forEach(function(item, index) {
   console.log(index + " - " + item);
});