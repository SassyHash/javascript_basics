function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

// println("Loaded it up!");
// var input = prompt("Type in your input:");
// println(input);

var TowersOfHanoi = {
  play: function () {
    this.set_board();
    this.print_board();
    while (!(this.game_over())) {
      var move = this.get_move();
      clear();
      if (this.valid_move(move[0],move[1])) {
        this.move(move[0],move[1]);
        this.print_board();
      }
      else {
        println("Invalid move. Try again");
        this.print_board();
      }
    }
    println("You won!");
  },
  set_board: function () {
    this.board = [[3, 2, 1], [], []];
  },
  move: function (from, to) {
    this.board[to].push(this.board[from].pop());
  },
  valid_move: function (from, to) {
    if (this.board[from].length == 0) {
      return false;
    }
    else if (this.board[to].length == 0) {
      return true;
    }
    else if (this.board[from][(this.board[from].length - 1)] < this.board[to][(this.board[to].length - 1)]) {
      return true;
    }
    else {
      return false;
    }
  },
  game_over: function () {
    if (this.board[1].length == 3 || this.board[2].length == 3) {
      return true;
    }
    else {
      return false;
    }
  },
  get_move: function () {
    var move = prompt("What's your move? (from, to)")

    function returnInt(element){
      return parseInt(element,10);
    }

    function sub_one (element) {
      return element - 1;
    }

    return move.split(', ').map(returnInt).map(sub_one);
  },
  print_board: function () {
    println( "tower 1:" );
    println(this.board[0].join(' '));
    println( "tower 2:" );
    println(this.board[1].join(' '));
    println( "tower 3:" );
    println(this.board[2].join(' '));
  }
}

TowersOfHanoi.play();

// move from to
// valid_move?
// game_over?
// this.board
// prompt for move
// print_this.board
// play loop