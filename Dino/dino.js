class Dino {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = 0;
        this.gravity = 0.25;
        this.width = 50;
        this.height = 50;
    }

    jump() {
        this.vel = -DEFAULT_VEL;
    }

    update() {
        this.vel += this.gravity;

        this.vel = constrain(this.vel, -Infinity, DEFAULT_VEL);
        if (this.vel <= DEFAULT_VEL) {
            this.pos.add(createVector(0, this.vel));
        }
        this.pos.y = constrain(this.pos.y, height / 2 - 2 * this.height, floor(height / 2));
        // this.gravity = 0.25;
    }

    hit(obs) {
        return (this.pos.y <= height / 2 - obs.height + this.height && this.pos.y + this.height >= height / 2 - obs.height + this.height) && ((this.pos.x + this.width >= obs.pos.x && this.pos.x <= obs.pos.x) || (this.pos.x + this.width >= obs.pos.x + obs.width && this.pos.x <= obs.pos.x + obs.width));
    }

    show() {
        // stroke(0);
        noStroke();
        fill(0, 0, 255);
        // rect(this.pos.x, this.pos.y, this.width, this.height);
        if (frameCount % 10 > 5) {
            image(dino_img_up, this.pos.x, this.pos.y, this.width, this.height);
        } else {
            image(dino_img_down, this.pos.x, this.pos.y, this.width, this.height);
        }
    }
}