let boardDOM = document.querySelector("#board");
let color = "black";
let gameBoard;
function renderEmptyTable() {
    for (i = 0; i < 8; i++) {
        rowDOM = document.createElement("tr");
        color == "black" ? color = "white" : color = "black";
        for (j = 0; j < 8; j++) {
            cellDOM = document.createElement("td");
            cellDOM.classList.add(color);
            cellDOM.classList.add(`cell${i}${j}`);
            color == "black" ? color = "white" : color = "black";
            rowDOM.appendChild(cellDOM);
        }
        boardDOM.appendChild(rowDOM);
    }
}
let image_list = JSON.parse(`{
"black": {
    "king": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/60px-Chess_kdt45.svg.png",
    "queen" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/60px-Chess_qdt45.svg.png",
    "rook": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/60px-Chess_rdt45.svg.png",
    "bishop": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/60px-Chess_bdt45.svg.png",
    "knight": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/60px-Chess_ndt45.svg.png",
    "pawn": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/60px-Chess_pdt45.svg.png"
},

"white": {
    "king": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/60px-Chess_klt45.svg.png",
    "queen" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/60px-Chess_qlt45.svg.png",
    "rook": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/60px-Chess_rlt45.svg.png",
    "bishop": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/60px-Chess_blt45.svg.png",
    "knight": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/60px-Chess_nlt45.svg.png",
    "pawn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/60px-Chess_plt45.svg.png"
}}
`);
/*
piece mapping:
1 - pawn
2 - rook
3 - knight
4 - bishop
5 - queen
6 - king

0 trailing after the piece signifies that the piece is white and trailing 1 signifies that the piece is black
eg: 
10 means white pawn
11 means black pawn
*/
function createNewBoard() {
    gameBoard = [];
    for (j = 0; j < 8; j++) {
        let row = [];
        if (j == 0) {
            row = [20, 30, 40, 50, 60, 40, 30, 20];
        }
        else if (j == 1) {
            row = [10, 10, 10, 10, 10, 10, 10, 10];
        }
        else if (j == 6) {
            row = [11, 11, 11, 11, 11, 11, 11, 11];
        }
        else if (j == 7) {
            row = [21, 31, 41, 51, 61, 41, 31, 21];
        }
        else {
            row = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        gameBoard.push(row);
    }
    localStorage.setItem("zenith-chess-board",JSON.stringify(gameBoard));
    return gameBoard;
}

function renderBoardToDOM() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            // var gameBoard = gameBoard;
            var url = "";
            var elem = gameBoard[i][j];
            var col = "";
            if (elem % 10 == 1) {
                col = "black";
            }
            else { col = "white" }
            elem /= 10;
            elem = Math.round(elem);
            if (elem == 1) url = image_list[col]["pawn"];
            if (elem == 2) url = image_list[col]["rook"];
            if (elem == 3) url = image_list[col]["knight"];
            if (elem == 4) url = image_list[col]["bishop"];
            if (elem == 5) url = image_list[col]["queen"];
            if (elem == 6) url = image_list[col]["king"];
            document.querySelector(`.cell${i}${j}`).innerHTML = `
            <img src="${url}">
            `
        }

    }
}

renderEmptyTable();
if (localStorage.getItem("zenith-chess-board")) {
    gameBoard = JSON.parse(localStorage.getItem("zenith-chess-board"));
}
else {
    createNewBoard();
}
renderBoardToDOM();