// OOP Tic Tac Toe boilerplate code

// Execute this code only AFTER the document is ready
// Hint: use jQuery's `$(document).ready`

  // A starter Player constructor.
  function Player(team) {
    //Is the player X or O?
    //this.team = ...
  };

  // A starter Board constructor.
  function Board() {
    //The board needs 2 players!

    //Create a new instance of player 1 and store it in the board
    //this.player1 = ...

    //Do the same for a player 2
    //this.player2 = ...

    //Tracks the cells of the board
    //this.$cells = ...

    //Store any other properties that board may have below
    //this includes a reset option, currentPlayer, counter, etc
  };

  // Remember: prototypes are shared functions between all board instances
  Board.prototype.nextPlayer = function() {
    //Switch players
  };

  // `Board.prototype.init` initializes our event listeners
  Board.prototype.init = function() {
    //Initialize the event listeners
  };

  // Start the game!
  var board = new Board();
  board.init();
});