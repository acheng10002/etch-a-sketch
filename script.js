let message = 'How many squares per side would you like? *The maximum is 100.';

function popup() {    
    let numSquares = prompt(message, '1');
    if (!numSquares || numSquares === null) {
        popup();
    } else if (numSquares === '0') {
        popup();
    } else if (numSquares > 100) {
        popup();
    } else {
        return numSquares;
    }     
}

let numSquares = popup();

let buttonDiv = document.querySelector('#buttonDiv');

let gridSideSize = window.innerHeight - buttonDiv.offsetHeight;

let gridHeight = gridSideSize;
let gridWidth = gridSideSize;

let grid = document.querySelector('#grid');

grid.style.height = gridHeight;
grid.style.width = gridWidth;

function makeGrid() {
    for (i = 1; i <= numSquares; i++) {
        let gridColumn = document.createElement('div');

        gridColumn.classList.add('gridColumn');
        grid.appendChild(gridColumn);

        for (j = 1; j <= numSquares; j++) {
            let square = document.createElement('div');
            let squareHeight = gridHeight / numSquares;
            let squareWidth = gridWidth / numSquares;

            square.style.height = `${squareHeight}px`;
            square.style.width = `${squareWidth}px`;
            square.classList.add('square');
        
            gridColumn.appendChild(square);
        }
    }
}

makeGrid();

color();

function switchColor() {
    // this.classList.toggle('black');
    this.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 
}

function color() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mousemove', switchColor);
    });
}

let resetButton = document.querySelector('#askForNumSquares');

function reset() {
    numSquares = popup();
    let elementsToDelete = document.querySelectorAll('.gridColumn');
    Array.from(elementsToDelete).forEach(element => {
        element.remove();
    });
    makeGrid();
    color();
}

resetButton.addEventListener('click', reset);