
const box=document.getElementsByClassName('square')
// console.log(box)

for (const x of box) {
  x.addEventListener("click", ()=> {

    let idOfElement = x.getAttribute("id");
    let innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;
    console.log(idOfElement);
    if (
       innerHtmlOfElement.includes("null")
    //   innerHtmlOfElement.includes("white")
    ) {
       document.getElementById(idOfElement).style.backgroundColor = "yellow";
    }
    else{
      document.getElementById(idOfElement).style.innerHTML ==" "
    }
  });
}






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
  