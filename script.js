const canvas = document.querySelector('.container');
const initialCanvasSize = 16 * 16;
let currentCanvasSize = 0;
const newCanvasButton = document.querySelector('.newCanvasButton');
squaresArray = [];

for (let i = 0; i < initialCanvasSize; i++) {
    squaresArray[i] = document.createElement('div');
    squaresArray[i].style.cssText = 'width: 50px; height: 50px; flex-shrink: 0';
    squaresArray[i].addEventListener('mouseover', () => {
        squaresArray[i].style.backgroundColor = 'orange';
    });
    canvas.appendChild(squaresArray[i]);
}

currentCanvasSize = 16 * 16;

function newCanvas() {
    let newCanvasSize = prompt('Enter a new canvas size (max size is 100): ');

    if (newCanvasSize > 100) {
        newCanvasSize = 100;
    }

    for (let i = 0; i < currentCanvasSize; i++) {
        canvas.removeChild(squaresArray[i]);
    }
    currentCanvasSize = newCanvasSize * newCanvasSize;

    for (let i = 0; i < currentCanvasSize; i++) {
        squaresArray[i] = document.createElement('div');
        squaresArray[i].style.cssText = `width: ${800 / newCanvasSize}px; height: ${800 / newCanvasSize}px; flex-shrink: 0`; 
        squaresArray[i].addEventListener('mouseover', () => {
            squaresArray[i].style.backgroundColor = 'orange';
        });
        canvas.appendChild(squaresArray[i]);
    }
}

newCanvasButton.addEventListener('click', newCanvas);