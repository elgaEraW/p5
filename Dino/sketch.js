let dino;
let obstacles;
let flag;
let dino_img_down, dino_img_up;
let acc;
let obstacle_img;
let DEFAULT_VEL;

function keyPressed() {
    if (keyCode === 32 || keyCode === UP_ARROW) {
        if (dino.vel === DEFAULT_VEL) {
            dino.jump();
        }
    }
    if (keyCode === DOWN_ARROW) {
        dino.vel = DEFAULT_VEL;
    }
}

function setup() {
    createCanvas(1825, 950);
    dino = new Dino(250, height / 2);
    obstacles = [];
    obstacles.push(new Obstacle(-5));
    flag = false;
    dino_img_up = loadImage("./2x-trex_up.png");
    dino_img_down = loadImage('./2x-trex_down.png')
    obstacle_img = loadImage("./2x-obstacle-small.png");
    acc = false;
    DEFAULT_VEL = 6;
}

function draw() {
    acc = false;
    if (frameCount % (floor(400 / obstacles[obstacles.length - 1].vel.x)) === 0) {
        obstacles.push(new Obstacle());
    }
    if (frameCount % 400 === 0) {
        acc = true;
    }
    print('dd');
    background(220);
    stroke(0);
    strokeWeight(1);
    line(0, height / 2 + dino.height, width, height / 2 + dino.height);
    dino.update();
    for (var i = 0; i < obstacles.length; i++) {
        flag = dino.hit(obstacles[i]);
        if (flag) {
            dino.show();
            text("Score: " + floor(frameCount / 15), width * 0.8, 100);
            noLoop();
            // break;
            fill(255, 0, 0);
            for (var i = 0; i < obstacles.length; i++) {
                obstacles[i].show();
            }
            return;
        }
    }
    if (!flag) {
        fill(0, 255, 0);
        for (var i = 0; i < obstacles.length; i++) {
            obstacles[i].update(acc);
            obstacles[i].show();
        }
    }
    dino.show();
    text("Score: " + floor(frameCount / 15), width * 0.8, 100);
}