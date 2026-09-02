// console.log(gameBoard);
let cells = boardDOM.querySelectorAll("td");
const selectSound = new Audio("../assets/select.mp3");
const captureSound = new Audio("../assets/capture.mp3");

function elemToCell(elem) {
    a = elem.classList[1].slice(-2);
    a = JSON.parse(a);
    b = a % 10;
    a = Math.floor(a / 10);
    return { row: a, col: b, val: gameBoard[a][b] };
}

function cellToElem(r, c) {
    var elem = boardDOM.querySelector(`.cell${r}${c}`);
    return elem;
}

function showValidMoves(arr) {
    // console.log("showing valid moves: ",arr)
    // removing prevous highlight
    cells.forEach(cell => { cell.classList.remove("playable") });
    // identifying piece type
    var piece = Math.floor(arr.val / 10);
    var color = arr.val % 10;
    console.log(piece, color)
    /*
        piece mapping:
        1 - pawn
        2 - rook
        3 - knight
        4 - bishop
        5 - queen
        6 - king
        
        0 trailing after the piece signifies that the piece is black and trailing 1 signifies that the piece is white
        eg: 
        10 means black pawn
        11 means white pawn
    */
    // we know that the max val for row & col is 7 and min is 0 

    // pawn handling
    if (piece == 1) {
        console.log("apparently piece is 1")
        if (color == 1) {
            // console.log("apparently color also is 1")
            // console.log(arr.row, arr.col, arr.col-1,gameBoard[arr.row][arr.col-1])
            if (arr.row - 1 >= 0 && arr.row - 1 <= 7 && arr.col >= 0 && arr.col <= 7) {
                cellToElem(arr.row - 1, arr.col).classList.add("playable");
                // this.parentElement.classList.add("focus");
            }
            if(arr.row==6){
                cellToElem(arr.row-2,arr.col).classList.add("playable");
            }
        }

        if (color ==0) {
            if (arr.row + 1 >= 0 && arr.row + 1 <= 7 && arr.col >= 0 && arr.col <= 7) {
                cellToElem(arr.row + 1, arr.col).classList.add("playable");
                // this.parentElement.classList.add("focus");
            }
            if(arr.row==1){
                cellToElem(arr.row+2,arr.col).classList.add("playable");
            }
        }
    }
}

cells.forEach(cell => {
    cell.querySelector("img").onclick = function () {
        cells.forEach(cell => { cell.classList.remove("focus") });
        this.parentElement.classList.add("focus");
        // console.log(elemToCell(cell).row,elemToCell(cell).col);
        selectSound.playbackRate = 2.5;
        selectSound.volume = 0.3;
        selectSound.play();

        // call function to show the possible moves
        showValidMoves(elemToCell(cell));
    }
    // console.log(cell);
});
