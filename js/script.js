const resetButton = document.getElementById("reset-board");
const boardSizeButton = document.getElementById("board-size");
const disbaleBorder = document.getElementById("disable-border");
/**
 * This function generates ranodom css rgb value.
 * @returns {string} radom rgb color value
 * */
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
/**
 * This function prompts user to enter rgb value and validates it.
 * @returns {string} rgb value color entered by user
 */
function getRgbColor(){
    let colorChoice = prompt("Choose your color.","(0, 0, 0)");
    colorChoice = 'rgb' + colorChoice;
    return colorChoice.toLowerCase();
}
/**
 * This function prompts user to enter grid size
 * @returns {number} grid size chosen by user
 */
function getBoardSize(){
    let boardSize;

    boardSize = prompt("Enter board size","16");
    
    if (boardSize <= 100){
        return boardSize;
    }else{
        return getBoardSize();
    }
}
/**
 * This funtion creates div grid in dom element "#container".
 * @param {number} size 
 */
function createBoard(size = 16) {
    const container = document.getElementById('container');
    
    const elementSize = 800 / size;
   
    for (let i = 1; i <= size * size;i++){
        const element = document.createElement("div");
        
        element.className = 'grid-item';
        element.style.height = `${elementSize}px`;
        element.style.width = `${elementSize}px`;

        container.appendChild(element);
    }
}

function resetBoard(){
    const container = document.getElementById("container");
    const pixel = container.querySelectorAll("*");

    for (let i = 0; i < pixel.length;i++){
        pixel[i].style.backgroundColor = 'white';
    }
}

function deconstuctBoard(){
    const container = document.getElementById('container');
    const pixel = container.querySelectorAll("*");

    for (let i = 0; i < pixel.length; i++){
        pixel[i].remove();
    }
}

function reconstructBoard(){
    const size = getBoardSize();
    deconstuctBoard();
    createBoard(size);
    singleColorMode();
}



function singleColorMode(color = "black"){
    const element = container.querySelectorAll("*");
    
    for (let i = 0; i < element.length; i++) {

            element[i].addEventListener("mouseover", () => {
            element[i].style.backgroundColor = color;
        });
    }
}

function rainbowColorMode(){
        const element = container.querySelectorAll("*");
        
        for (let i = 0; i < element.length; i++) {
                const color = getRandomRgbColor();


                element[i].addEventListener("mouseover", () => {
                element[i].style.backgroundColor = color;
            });
        }
    
}

resetButton.addEventListener("click",resetBoard);
boardSizeButton.addEventListener("click",reconstructBoard);

createBoard();
singleColorMode();