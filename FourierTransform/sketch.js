let radius = 400;
let prev_cm_x = 0;
let prev_cm_y = 0;
let store_x = 0;
let store_y = 0;
let slider;

function setup() {
    createCanvas(1000, 800);
    slider = createSlider(0, 5500, 0);
    slider.position(100, height + 50);
    slider.style('width', '800px');
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(1);
    noFill();
    translate(200, 400);
    // ellipse(0, 0, radius);
    translate(400, 100);
    beginShape();
    let all_y = [];
    for (var i = 0; i < 500; i++) {
        var y = radius / 3 * ((cos(i * 0.1) + sin(i * 0.05)));
        all_y.push(y);
        vertex(i, y);
        var theta = map(i, 0, 500, 0, map(slider.value(), 0, width, 0, 5) * PI);
        // point(y * cos(theta), y * sin(theta));
    }
    endShape();
    translate(-300, -100);
    let cm_x = 0;
    let cm_y = 0;
    beginShape();
    for (var i = 0; i < all_y.length; i++) {
        var theta = map(i, 0, 500, 0, map(slider.value(), 0, width, 0, 10) * PI);
        let temp_x = all_y[i] * cos(theta);
        let temp_y = all_y[i] * sin(theta);
        vertex(temp_x, temp_y);
        cm_x += temp_x;
        cm_y += temp_y;
    }
    prev_cm_x = max(prev_cm_x, cm_x);
    prev_cm_y = max(prev_cm_y, cm_y);
    if (cm_x === prev_cm_x) {
        store_x = mouseX;
        console.log("CM is at " + store_x + ' and ' + store_y);
    }
    if (cm_y === prev_cm_y) {
        store_y = mouseX;
        console.log("CM is at " + store_x + ' and ' + store_y);
    }
    let n = all_y.length;
    endShape();
    strokeWeight(16);
    point(map(cm_x, 0, 10000, 0, radius) / 10, map(cm_y, 0, 10000, 0, radius) / 10);
    // console.log(slider.value());
}