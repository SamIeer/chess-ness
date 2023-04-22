

export let  Pmoves=(el,psing)=>{
 const row = Number(el.id[1])
 const column=el.id[0]
 

//  for white castle pawns
 if(row===2){
    front2(row,column,psing)}

// for black castle pawns
 else if(row===7){
    front2(row,column,psing)}

}



// function for the initail movements of pawn
const front2=(row,column,psing)=>{
    let pawnar=[]
    let newrow = row
     if(newrow===2)
     {for (let i = 0; i < 2; i++) {
        newrow++;
        const highlightId=document.getElementById(column+ newrow)
        pawnar.push(highlightId.id)
    }}

    else if(newrow===7)
    {for (let i = 0; i < 2; i++) {
        newrow--;
        const highlightId=document.getElementById(column+ newrow)
        pawnar.push(highlightId.id)}}
   
        for(const i of pawnar){
             
            const myTag = document.getElementById(i);
            console.log(myTag)
            const dot = document.createElement("div");
            myTag.appendChild(dot);
            dot.classList.add("dot");
            // moving the pawn and removing the dot
            myTag.addEventListener('click', ()=>{
                myTag.innerHTML = psing.innerHTML;
                const removecircle = pawnar.filter((el) => el != i);
                document.getElementById(removecircle[0]).innerHTML = '';
                psing.textContent = '';
                console.log(i)
              }, {once: true});
        }
    }






  
