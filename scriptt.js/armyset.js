// function for setting the white and black army in the board
export const setarmy=(obj)=>{
    const rank=obj.id[1];
    // white casterl army
    if(rank==2){
        return '♙'}
// kinght
    else if(obj.id=='b1' || obj.id=='g1'){
        return '♘'}
// bishop
    else if(obj.id=='c1' || obj.id=='f1'){
        return '♗'}
// rook
    else if(obj.id=='a1' || obj.id=='h1'){
        return '♖'}
// Queen
    else if(obj.id=='e1'){
        return '♕'}
// king
    else if(obj.id=='d1'){
        return '♔'}



// black castel army
    else if(rank==7){
        return '♟︎'}
// knight
    else if(obj.id=='b8' || obj.id=='g8'){
        return '♞'}
// bishop
    else if(obj.id=='c8' || obj.id=='f8'){
        return '♝'}
// roook
    else if(obj.id=='a8' || obj.id=='h8'){
        return '♜'}
// Queen
    else if(obj.id=='d8'){
        return '♛'}
//king
    else if(obj.id=='e8'){
        return '♚'}

}