
const squares = document.getElementsByClassName('square');

for (const square of squares) {
  square.addEventListener("click", ()=> {
    let idOfElement = square.getAttribute("id");
    let innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;
    
    // Remove yellow background color from all squares
    for (const s of squares) {
      s.style.backgroundColor = "";
    }
    
    if (innerHtmlOfElement.trim() === "") {
      // If the square is empty, do nothing
      return;
    }
    else {
      // If the square is not empty, change its background color
      square.style.backgroundColor = "yellow";
    }
  });
}





// function for the sum




// class Piece {
//     constructor(color, type) {
//       this.color = color;
//       this.type = type;
//     }
    
//     isValidMove(from, to) {
//       // Define rules for moving each piece
//     }
    
//     canCapture(at, piece) {
//       // Define rules for capturing with each piece
//     }
//   }
  
//   class Chessboard {
//     constructor() {
//       // Create the initial board state
//     }
    
//     move(from, to) {
//       // Update the board state based on a move
//     }
    
//     capture(at, piece) {
//       // Update the board state based on a capture
//     }
//   }
  
//   // Initialize the game
//   const board = new Chessboard();
  