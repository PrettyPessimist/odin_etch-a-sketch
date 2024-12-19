let container = document.querySelector(".container");
let gridBtn = document.querySelector(".gridSize");
let darkBtn = document.querySelector(".dark");
let colorBtn = document.querySelector(".rainbow");
let mode=0;
let x = 0;

document.addEventListener("DOMContentLoaded", (e) =>{
    setGridSize(16);
});

// setGridSize(16);

darkBtn.addEventListener("click", (e) => {
    switch(mode){
        case 0:
            mode = 1;
            darkBtn.style.backgroundColor = "white";
            darkBtn.style.color = "black";
            break;
        case 1:
            mode = 0;
            darkBtn.style.backgroundColor = "black";
            darkBtn.style.color = "white";
            break;
        case 2:
            mode = 3;
            darkBtn.style.backgroundColor = "white";
            darkBtn.style.color = "black";
            break;
        case 3:
            mode = 2;
            darkBtn.style.backgroundColor = "black";
            darkBtn.style.color = "white";
            break;
    }
});

colorBtn.addEventListener("click", (e) => {
    switch(mode){
        case 0:
            mode = 2;
            colorBtn.style.color = "red";
            break;
        case 1:
            mode = 3;
            colorBtn.style.color = "red";
            break;
        case 2:
            mode = 0;
            colorBtn.style.color = "white";
            break;
        case 3:
            mode = 1;
            colorBtn.style.color = "white";
            break;
    }
});

container.addEventListener("mouseover", (e) => {   
            if (e.target.classList.contains("newDiv")) {
                let currentSquare = e.target;
                switch(mode){
                    case 0:
                        currentSquare.style.backgroundColor = "rgba(128, 0, 128, 0.3)";
                        console.log(currentSquare); 
                        break;
                    case 1:
                            currentSquare.style.backgroundColor = `rgba(128, 0, 128, ${x}`;
                        x += 0.1;
                        console.log(currentSquare); 
                        break;
                    case 2:
                        currentSquare.style.backgroundColor = getRainbowColor().toString();
                        console.log(currentSquare); 
                        break;
                    case 3:
                        currentSquare.style.backgroundColor = "green";
                        console.log(currentSquare); 
                        break;
                }
                
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

function getRainbowColor() {
    let r = Math.floor(Math.random() * 256);  // Random red value (0-255)
    let g = Math.floor(Math.random() * 256);  // Random green value (0-255)
    let b = Math.floor(Math.random() * 256);  // Random blue value (0-255)
    let a = Math.random().toFixed(2);  // Random opacity value (0.00 - 1.00)
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}




