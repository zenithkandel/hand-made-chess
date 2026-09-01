console.log(gameBoard);
let cells = boardDOM.querySelectorAll("td");


function elemToCell(elem) {
    a= elem.classList[1].slice(-2);
    a=JSON.parse(a);
    b=a%10;
    a = Math.floor(a/10);
    return {row: a,col: b, val: gameBoard[a][b]};
}

cells.forEach(cell => {
    cell.querySelector("img").onclick = function(){
        cells.forEach(cell=>{cell.classList.remove("focus")});
        this.parentElement.classList.add("focus");        
        console.log(elemToCell(cell).row,elemToCell(cell).col)
    }
    console.log(cell);
});
