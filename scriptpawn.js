// selectinng the front two boxes of the chessboard when we click on any pawn
const pawnarr=[ ]
const filearr=["a","b","c","d","e","f","g","h"]
for (const i of filearr) {
    pawnarr.push(document.getElementById(i + 2));
//    console.log(i)
}
for (const i of filearr) {
    pawnarr.push(document.getElementById(i + 7));
//    console.log(i)
}
// console.log(pawnarr)

const dotarr=[]//for taking all the front boxes

for(const i of pawnarr){
    i.addEventListener('click',()=>{
    const currntid=i.getAttribute("id");
    // console.log(currntid)
    let make=parseInt(currntid[1])
    const step=[];
        if(make==2)
            {for (let i = 0; i < 2; i++) {
                make++;
                step.push(document.getElementById(currntid[0]+make));
            }}
        else if(make==7)
        {for (let i = 0; i < 2; i++) {
            make--;
            step.push(document.getElementById(currntid[0]+make));
        }}
    
    console.log(dotarr)
    // console.log(step)
    path(step)//for applying hte class that we created in path function
    })
}


// highlighting the front to boxes in which pawn will move when we click on them
// const path=([one,two])=>{
//             let way=document.createElement('div');
//             let way2=document.createElement('div')
//             way.setAttribute('class','way')
//             way2.setAttribute('class','way')
//             one.appendChild(way)
//             two.appendChild(way2)
//             console.log(one,two)
//             one.classList.add('flex')
//             two.classList.add('flex')
// }

let selectedPawns = [];

const path = ([one, two]) => {
  let way = one.querySelector('.way');
  let way2 = two.querySelector('.way');
  if (!way) {
    way = document.createElement('div');
    way.setAttribute('class', 'way');
    one.appendChild(way);
  }
  if (!way2) {
    way2 = document.createElement('div');
    way2.setAttribute('class', 'way');
    two.appendChild(way2);
  }
  selectedPawns.forEach(pawn => {
    if (pawn !== one && pawn !== two) {
      pawn.querySelector('.way').remove();
      pawn.classList.remove('flex');
    }
  });
  console.log(one, two);
  [one, two].forEach(el => el.classList.add('flex'));
  selectedPawns = [one, two];
}
