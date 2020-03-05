// let b;
let cX = 0,
    cY = 0;
let N = 1;
let x, y;
let store;
var flag;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function calculate() {
    // while (N < 500) {
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            // await sleep(1);
            colorMode(HSB);
            count = 0;

            x = map(i, 0, width, -2, 2);
            y = map(j, 0, height, -2, 2);

            cX = x; //map(mouseX, 0, width, -1, 1);
            cY = y; //map(mouseY, 0, height, -1, 1);
            // if (!flag) {
            //     x = store[int('' + i + j)].x;
            //     y = store[int('' + i + j)].y;
            //     count = N / 2;
            //     // console.log(store);
            // }
            while (count < N) {
                var newX = x * x - y * y;
                var newY = 2 * x * y;

                x = newX + cX;
                y = newY + cY;

                if (abs(x * x + y * y) > 2) {
                    break;
                }
                count++;
            }

            var b = map(count, 0, N, 0, 1);
            b = map(sqrt(b), 0, 1, 0, 255);
            if (count == N) {
                b = 0;
                // store[int('' + i + j)] = { h: b, s: 0, b: 0, m: RGB };
                colorMode(RGB);
                stroke(b);
            } else {
                // store[int('' + i + j)] = { h: 255 - b, s: 255, b: 255, m: HSB };
                // nsmooth = count + 1 - Math.log(Math.log(zn.abs())) / Math.log(2)
                stroke(255 - b, 255, 255);
            }

            point(i, j);
            // translate(-width / 2, 0);
        }
    }
    flag = false;
    // store = { x, y, N };
    // loadPixels();
    // colorMode(HSB);

    N *= 2;
    if (N > 1024) {
        noLoop();
    }
    // console.log(store
    // }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        cX += 0.1;
        console.log('fhfkuasfhak');
    }
}

function setup() {
    createCanvas(1825, 950);
    // b = new Box();
    // background(220);
    // pixelDensity(1);
    // colorMode(RGB);
    // background(0);
    colorMode(HSB);


}

function draw() {

    // translate(990, 0);
    // b.update();
    // b.show();
    calculate();
    // updatePixels();
}