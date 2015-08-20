// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(team) {
  //this.name = ...
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
