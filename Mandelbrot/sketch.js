// let b;
let cX = 0,
    cY = 0;

function keyPressed() {
    if (keyCode === UP_ARROW) {
        cX += 0.1;
        console.log('fhfkuasfhak');
    }
}

function setup() {
    createCanvas(1500, 900);
    // b = new Box();
    // background(220);
    pixelDensity(1);

}

function draw() {

    // b.update();
    // b.show();
    colorMode(HSB);
    loadPixels();

    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            count = 0;
            var x = map(i, 0, width, -2, 2);
            var y = map(j, 0, height, -2, 2);

            cX = map(mouseX, 0, width, -1, 1);
            cY = map(mouseY, 0, height, -1, 1);
            while (count < 100) {
                var newX = x * x - y * y;
                var newY = 2 * x * y;

                x = newX + cX;
                y = newY + cY;

                if (abs(x * x + y * y) > 16) {
                    break;
                }
                count++;
            }
            var b = map(count, 0, 100, 0, 1);
            b = map(sqrt(b), 0, 1, 0, 255);
            if (count == 100) {
                b = 0;
            }

            var pix = (i + j * width) * 4;
            pixels[pix + 0] = b;
            pixels[pix + 1] = b;
            pixels[pix + 2] = b;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}