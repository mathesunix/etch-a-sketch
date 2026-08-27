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
            const red = getRandomInt(0, 255);
            const green = getRandomInt(0, 255);
            const blue = getRandomInt(0, 255);

            pixels[i].style.backgroundColor =
                "rgb(" + red + " " + green + " " + blue + ")";
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillScreen() {
    createPixels(gridResolution, pixelSize);
    colorPixels();
    appendPixels();
}

fillScreen();
changeResolutionButton.addEventListener("click", changeResolution);
console.log(Math.random() * 100);
