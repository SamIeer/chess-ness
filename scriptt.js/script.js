// 
const chararr = [];
class Square {
    color;
    isHighlighted;
    isHint;
    ispiece;
    id;
}

for (let i = 8; i > 0; i--) {

   const isroweven =i%2==0? true:false

    const rowArray = [];
    for (let j = 97; j < 105; j++) {

      const iseleven=j%2==0? true:false

        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        // create object of squares
        const square = new Square();

        // set Properties
        square.id = id;

        // color
        // odd row => odd element
        // (769656)
        if(!isroweven && !iseleven){
          square.color='dark';
        }
        // even row => odd element (EEEED2)
        if(isroweven && !iseleven){
          square.color='light';
        }
        // odd row => even element
        if(!isroweven && iseleven){
          square.color='light';
        }
        // even row => odd element (EEEED2)
        if(isroweven && iseleven){
          square.color='dark';
        }
        // even row => even element
        // (769656)



        // push array
        rowArray.push(square);
    }
    chararr.push(rowArray);
}


import * as ness from "../scriptt.js/rendered.js";
ness.renderui(chararr)
