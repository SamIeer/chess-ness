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
    element.forEach(el =>{
        const square = document.createElement('div');
        square.style.backgroundColor = square.color;
        el.renderedHtml  = square;
        console.log(el)
        square.classList.add(`color-${el.color}`);
        square.classList.add('square-common');
        
        // 
        square.setAttribute('id',el.id)

        square.classList.add('file-'+el.id[0])
        rank.appendChild(square);
    });

});
console.log(maincontainer);

}

export {renderui};        