const renderui=(suares)=>{
    // maincontainer from markup
    const maincontainer = document.querySelector('.container')
    console.log(maincontainer)

    console.log(squares);

    squares.forEach((element) => {
        let rank=document.createElement("div");
        rank.classList.add('rank-style');
        maincontainer.appendChild(rank);
        element.forEach(el=>{
            const square =document.createElement('div');
            square.classList.add(`color-${el.color}`);
            square.classList.add()
            el.renderedhtml=square;
             console.log(el)
        })
        
    });

}
export{renderui}