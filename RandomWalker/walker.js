class Walker {
    constructor(x, y, r, stuck, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.stuck = stuck;
        this.hue = color;
        this.flag = true;
    }

    show() {
        noStroke();
        colorMode(RGB);
        if (hue) {
            colorMode(HSB);
            fill(this.hue, 255, 255);
        }
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        fill(255);
    }

    walk() {
        var move = createVector(random(-2, 2), random(-2, 2));
        this.x += move.x;
        this.y += move.y; 
        this.x = constrain(this.x, 0, width - this.r);
        this.y = constrain(this.y, 0, height - this.r);
        for (var j = 0; j < array.length; j++) {
            if (this.distance(this, array[j]) < this.r * this.r * 4 && array[j].stuck) {
                this.stuck = true;
                if (this.flag) {
                    if (array[j].hue >= 253) {
                        this.hue = array[j].hue;
                        this.flag = false;
                    }
                    else if(array[j].hue < 253) {
                        this.hue = array[j].hue + 3;
                        this.flag = false;
                    }
                    else {
                        this.hue = 0;
                        this.flag = false;
                    }
                }
                // temp.push(i);
                // array.splice(list, value, position)
                // if (this.flag && this.stuck) {
                //     this.hue = map(count, 0, 3 * total, 0, 255);
                //     count += 3;
                //     this.flag = false;
                // }
            }
        }
    }

    distance(a, b) {
        return pow((a.x - b.x), 2) + pow((a.y - b.y), 2);
    }


}