let data;

function setup() {
    createCanvas(1800, 800);
    data = [];
    for (var i = 0; i < 5; i++) {
        data.push(random(10, 1600));
    }
    data.sort((a, b) => b - a);
}

function draw() {
    background(220);
    translate(100, 100);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    for (var i = 0; i < 5; i++) {
        rect(0, i * 100, data[i], 50);
    }
}