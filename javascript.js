const canvas = document.querySelector(".canvas");

const canvasSize = 700;
let gridResolutionInput = 16;
let pixelSize = canvasSize / gridResolutionInput;
let gridResolution = gridResolutionInput ** 2;

let pixels = [];

const changeResolutionButton = document.querySelector(
    ".changeResolutionButton",
);

function createPixels(gridResolution, pixelSize) {
    for (let i = 0; i < gridResolution; i++) {
        pixels[i] = document.createElement("div");
        pixels[i].style.width = pixelSize + "px";
        pixels[i].style.height = pixelSize + "px";
    }
}

function colorPixels() {
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseenter", () => {
            pixels[i].style.backgroundColor = "orange";
        });
    }
}

function appendPixels() {
    for (let i = 0; i < pixels.length; i++) {
        canvas.append(pixels[i]);
    }
}

function changeResolution() {
    canvas.innerHTML = "";

    pixels = [];

    gridResolutionInput = prompt(
        "Enter a number between 1 and 100 (inclusive)",
    );

    if (gridResolutionInput < 1) {
        gridResolutionInput = 1;
    } else if (gridResolutionInput > 100) {
        gridResolutionInput = 100;
    }

    gridResolution = gridResolutionInput ** 2;
    pixelSize = canvasSize / gridResolutionInput;

    fillScreen();
}

function fillScreen() {
    createPixels(gridResolution, pixelSize);
    colorPixels();
    appendPixels();
}

fillScreen();
changeResolutionButton.addEventListener("click", changeResolution);
