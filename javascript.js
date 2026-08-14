const canvas = document.querySelector(".canvas");

const canvasSize = 700;
let gridResolutionInput = 16;
const pixelSize = canvasSize / gridResolutionInput;
let gridResolution = gridResolutionInput ** 2;

let pixels = [];

function createPixels(gridResolution, pixelSize) {
    for (let i = 0; i < gridResolution; i++) {
        pixels[i] = document.createElement("div");
        pixels[i].style.width = pixelSize + "px";
        pixels[i].style.height = pixelSize + "px";
    }
}

function colorPixels() {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "lightblue";
        pixels[i].style.border = "1px solid black";
    }
}

function appendPixels() {
    for (let i = 0; i < pixels.length; i++) {
        canvas.append(pixels[i]);
    }
}

createPixels(gridResolution, pixelSize);
colorPixels();
appendPixels();