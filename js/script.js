let container = document.querySelector(".container");
let gridSize = 16;
let squareSize = (Math.sqrt((500**2) / (gridSize**2)) - 4);

document.addEventListener("DOMContentLoaded", (e) =>{
    for(let y = 0; y < gridSize; y++){
        for(let x = 0; x < gridSize; x++){
            let div = document.createElement("div");
            let divId = (y === 0) ? (x+1):
                        (y > 0) ? ((y*gridSize) + (x+1)): 42;
            div.classList.add("newDiv");
            div.classList.add(divId.toString());
            div.style.height = squareSize.toString() + "px";
            div.style.width = squareSize.toString() + "px";
            container.appendChild(div);
        }
        x = 0;
    }
});

container.addEventListener("mouseover", (e) => {   
            if (e.target.classList.contains("newDiv")) {
                let currentSquare = e.target;
                currentSquare.style.backgroundColor = "purple";
                console.log(currentSquare); 
            }    
});





