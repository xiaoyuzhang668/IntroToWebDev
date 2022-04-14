let currentGame = {
	rowCount: 3,
	columnCount: 3,
	lights: [
      true, true, true,
      true, true, true,
      true, true, true
   ],
	startTime: new Date()
};

// Returns true if all lights in the game grid are off, false otherwise.
function allLightsOut(game) {
   for (let i = 0; i < game.lights.length; i++) {
      // Even 1 light being on implies that not all are out/off
      if (game.lights[i])
         return false;
   }
   
   // All lights were checked and none are on, so lights are out!
   return true;
}

// Toggles the light at (row, column) and each orthogonally adjacent light
function toggle(game, row, column) {
   const locations = [
      [row, column], [row - 1, column], [row + 1, column], 
      [row, column - 1], [row, column + 1]
   ];
   for (let location of locations) {
      row = location[0];
      column = location[1];
      if (row >= 0 && row < game.rowCount && 
         column >= 0 && column < game.columnCount) {
         // Compute array index
         const index = row * game.columnCount + column;
         
         // Toggle the light
         game.lights[index] = !game.lights[index];
      }
   }
}
