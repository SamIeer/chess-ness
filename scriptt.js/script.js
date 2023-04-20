// 
const chararr = [];
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;
}

for (let i = 8; i > 0; i--) {
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        // create object of squares
        const square = new Square();

        // set Properties
        square.id = id;

        // color
        // odd row => odd element
        // (769656)
        // even row => odd element (EEEED2)
        // odd row => even element
        // even row => odd element (EEEED2)
        // even row => even element
        // (769656)



        // push array
        rowArray.push(square);
    }
    chararr.push(rowArray);
}

console.log(chararr);
  