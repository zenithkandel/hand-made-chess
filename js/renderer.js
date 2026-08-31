let boardDOM = document.querySelector("#board");
let color = "black";
let gameBoard = [];
function renderEmptyTable() {
    for (i = 0; i < 8; i++) {
        rowDOM = document.createElement("tr");
        color == "black" ? color = "white" : color = "black";
        for (j = 0; j < 8; j++) {
            cellDOM = document.createElement("td");
            cellDOM.classList.add(color);
            color == "black" ? color = "white" : color = "black";
            rowDOM.appendChild(cellDOM);
        }
        boardDOM.appendChild(rowDOM);
    }
}

function createNewBoard() {
    for (i = 0; i < 8; i++) {

        for (j = 0; j < 8; j++) {
        }
    }
}

renderEmptyTable();
