class Obstacle {
    constructor(init) {
        this.height = random(20, 40);
        this.width = 20;
        this.pos = createVector(width, this.height);
        if (init) {
            this.vel = createVector(init, 0);
        } else {
            this.vel = createVector(obstacles[obstacles.length - 1].vel.x, 0);
        }
        this.acc = createVector(0, 0);
    }

    update(flag) {
        // print(this.vel);
        if (flag)
            this.vel.x -= 1;
        this.pos.add(this.vel);
    }

    show() {
        // stroke(0);
        noStroke();
        // fill(0, 255, 0);
        // rect(this.pos.x, height / 2 - this.height + dino.height, this.width, this.height);
        image(obstacle_img, this.pos.x, height / 2 - this.height + dino.height, this.width, this.height);
    }
}