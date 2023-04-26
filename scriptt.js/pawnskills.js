

export let Pmoves = (el, psing,square) => {
    const row = Number(el.id[1])
    const column = el.id[0]
  
    //  for white castle pawns
    if (row === 2) {
      front2(row, column, psing,square)
    }
  
    // for black castle pawns
    else if (row === 7) {
      front2(row, column, psing,square)
    }
  }
  
  // function for the initial movements of pawn
  const front2 = (row, column, psing,square) => {
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
      const dot = document.createElement("div");
      myTag.appendChild(dot);
      dot.classList.add("dot");
      
      if (pawnar.indexOf(i) === 1 || pawnar.indexOf(i) === 0) {
        myTag.addEventListener('click', handleClick);
      }
    }
    
    function handleClick() {
      const clickedElement = this;
      
      // Remove event listener from both elements
      for (const i of pawnar) {
        const element = document.getElementById(i);
        element.removeEventListener('click', handleClick);
      }
      
      clickedElement.innerHTML = psing.innerHTML;
      const removecircle = pawnar.filter((el) => el !== clickedElement.id);
      document.getElementById(removecircle[0]).innerHTML = '';
      square.removeChild(psing)
    }
    
  }