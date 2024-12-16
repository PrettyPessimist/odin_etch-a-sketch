let container = document.querySelector(".container");
let gridBtn = document.querySelector(".gridSize");

document.addEventListener("DOMContentLoaded", (e) =>{
    setGridSize(16);
});

// setGridSize(16);

container.addEventListener("mouseover", (e) => {   
            if (e.target.classList.contains("newDiv")) {
                let currentSquare = e.target;
                currentSquare.style.backgroundColor = "purple";
                console.log(currentSquare); 
            }    
});

gridBtn.addEventListener("click", (e) => {
    let newSize = Number(window.prompt("Type a number", ""));

    if(newSize < 0 || newSize > 64){
        alert("Negative");
        newSize = 16;
    } 

    container.querySelectorAll(".newDiv").forEach(div => div.remove());
    setGridSize(newSize);
});

function setGridSize(size){
    let gridSize = size;
    let squareSize = Math.sqrt(500 * 500 / (gridSize * gridSize)) - 4;
    let fragment = document.createDocumentFragment();  // This variable creates a document fragment
    for(let y = 0; y < gridSize; y++){
        for(let x = 0; x < gridSize; x++){
            let div = document.createElement("div");
            let divId = y * gridSize + (x + 1);
            div.classList.add("newDiv");
            div.classList.add(divId.toString());
            div.style.height = squareSize.toString() + "px";
            div.style.width = squareSize.toString() + "px";
            fragment.appendChild(div);  // Appends value to fragment instead of container
        }
    }
    container.appendChild(fragment);  // Append all divs at once in container
}





