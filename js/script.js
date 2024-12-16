let container = document.querySelector(".container");

let gridSize = 16;
let squareSize = (Math.sqrt((500**2) / (gridSize**2)) - 4);


for(let y = 0; y < gridSize; y++){
    for(let x = 0; x < gridSize; x++){
        let div = document.createElement("div");
        div.classList.add("newDiv");
        div.style.height = squareSize.toString() + "px";
        div.style.width = squareSize.toString() + "px";
        container.appendChild(div);
    }
    x = 0;
}




