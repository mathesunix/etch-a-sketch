const canvas = document.querySelector('.container');
const newCanvasButton = document.querySelector('.newCanvasButton');
squaresArray = [];

for (let i = 0; i < 16*16; i++) {
    squaresArray[i] = document.createElement('div');
    squaresArray[i].style.cssText = 'width: 50px; height: 50px; flex-shrink: 0';
    squaresArray[i].addEventListener('mouseover', () => {
        squaresArray[i].style.backgroundColor = 'orange';
    });
    canvas.appendChild(squaresArray[i]);
}

function newCanvas() {
    /* for (let i = 0; i < 16*16; i++) {
        squaresArray[i].style.backgroundColor = 'white';
    } */
    alert('Hello world!');
}

newCanvasButton.addEventListener('click', newCanvas);