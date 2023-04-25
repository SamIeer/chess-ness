

export let Pmoves = (el, psing) => {
    const row = Number(el.id[1])
    const column = el.id[0]
  
    //  for white castle pawns
    if (row === 2) {
      front2(row, column, psing)
    }
  
    // for black castle pawns
    else if (row === 7) {
      front2(row, column, psing)
    }
  }
  
  // function for the initial movements of pawn
  const front2 = (row, column, psing) => {
    let pawnar = []
    let newrow = row
    if (newrow === 2) {
      for (let i = 0; i < 2; i++) {
        newrow++;
        const highlightId = document.getElementById(column + newrow)
        pawnar.push(highlightId.id)
      }
    } else if (newrow === 7) {
      for (let i = 0; i < 2; i++) {
        newrow--;
        const highlightId = document.getElementById(column + newrow)
        pawnar.push(highlightId.id)
      }
    }
  
    // Remove previously created dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      if (pawnar.indexOf(dot.parentNode.id) === -1) {
        dot.parentNode.removeChild(dot);
      }
    });
  
    for (const i of pawnar) {
      const myTag = document.getElementById(i);
    //   console.log(myTag)
      const dot = document.createElement("div");
      myTag.appendChild(dot);
      dot.classList.add("dot");
      const c=pawnar.indexOf[i]
      console.log(c)
      // moving the pawn and removing the dot
      
      if(pawnar.indexOf(i)==1)
      {
        myTag.addEventListener('click', () => {
            myTag.innerHTML = psing.innerHTML;
            document.getElementById(removecircle[0]).innerHTML = '';
            const removecircle = pawnar.filter((el) => el != i);
            psing.textContent = '';
            console.log(pawnar.indexOf(i))
          }, {
            once: true
          })
        }}
  }