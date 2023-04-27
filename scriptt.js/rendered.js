``
import { Pmoves} from "../scriptt.js/pawnskills.js";
import { setarmy, highlight } from "../scriptt.js/armyset.js";
const renderui=(squares)=>{
    // maincontainer from markup
    const maincontainer = document.querySelector('.container')
    // console.log(maincontainer)

    // console.log(squares);
    let rankno=8;
   // create square of size 70 x 70    
   squares.forEach(element => {

    let rank = document.createElement("div");
    rank.classList.add('rank-style');
    rank.setAttribute('id','i'+rankno--)
    maincontainer.appendChild(rank);

    //for the squares 
    element.forEach(el =>{
        el.ispiece=setarmy(el)
        el.isHighlighted=highlight(el)
        console.log(el)

        const square = document.createElement('div');
        square.style.backgroundColor = square.color;
        el.renderedHtml  = square;
    
        square.classList.add(`color-${el.color}`);
        square.classList.add('square-common');
        
        
        // 
        square.setAttribute('id',el.id)
        // adding files to the each square
        square.classList.add('file-'+el.id[0])
        rank.appendChild(square);
        // inserting the pawns and other charecter in the board
        const pawnsym=document.createTextNode(``)
        if(el.ispiece){
            const psing=document.createElement('div')
            pawnsym.textContent=el.ispiece
            psing.appendChild(pawnsym)
            square.appendChild(psing)

            psing.addEventListener('click',()=>{
                Pmoves(el,psing,square)
                el.isHighlighted
            })
        }
      
    });

});
console.log(maincontainer);

}

export {renderui};        