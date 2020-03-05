var arr;
var counti;
var countj;
var step;

function setup() {
    createCanvas(900, 900);
    background(0);
    arr = [];
    colors = [];
    step = 20;
    for (var i = 0; i < height; i += step) {
        var hc = random(0, height);
        arr.push(hc);
        colors.push(map(hc, 0, width, 255, 0));
    }
    counti = 0;
    countj = 0;
    colorMode(HSB);
    frameRate(60);
}

function draw() {
    if (counti < arr.length) {
        // for (countj = 0; countj < arr.length - counti - 1; countj++) {
        if (countj < arr.length - counti - 1) {
            if (arr[countj + 1] < arr[countj]) {
                temp = arr[countj];
                arr[countj] = arr[countj + 1];
                arr[countj + 1] = temp;
                temp = colors[countj];
                colors[countj] = colors[countj + 1];
                colors[countj + 1] = temp;
            }
            countj++;
        }
        if (countj === arr.length - counti - 1) {
            countj = 0;
            counti++;
        }
    }
    // counti++;
    background(0);
    for (var i = 0; i < arr.length; i++) {
        stroke(colors[i], 127, 127);
        strokeWeight(step);
        line(i * step, height, i * step, height - arr[i]);
    }
    // console.log(arr);
}