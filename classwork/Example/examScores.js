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

