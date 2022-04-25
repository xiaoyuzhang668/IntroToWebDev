// Return a random number between min and max (inclusive).
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < 5; i++) { 
   console.log(getRandomNumber(1, 10)); 
}