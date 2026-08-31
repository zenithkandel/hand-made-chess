let boardDOM = document.querySelector("#board");
let color = "black";
for(i=0;i<8;i++){
    rowDOM = document.createElement("tr");
    for(j=0;j<8;j++){
        cellDOM = document.createElement("td");
        cellDOM.classList.add(color);
        color=="black"?color="white":color="black";
        rowDOM.appendChild(cellDOM);
    }
    boardDOM.appendChild(rowDOM);
}