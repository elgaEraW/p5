class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.visitedSolve = false;
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(0, 255, 0);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x, y + w, x + w, y + w);
        }
        if (this.walls[3]) {
            line(x, y, x, y + w);
        }
    }

    back() {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        fill(0, 255, 0, 127);
        rect(x, y, w, w);
    }

    front() {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        fill(255, 0, 0, 127);
        rect(x, y, w, w);
    }

    findIndex(i, j) {
        if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) {
            return -1;
        }
        return i * cols + j;
    }

    findNeighbours() {
        let neighbours = [];

        var top = grid[this.findIndex(this.i - 1, this.j)];
        var right = grid[this.findIndex(this.i, this.j + 1)];
        var bottom = grid[this.findIndex(this.i + 1, this.j)];
        var left = grid[this.findIndex(this.i, this.j - 1)];

        if (top && !top.visited) {
            neighbours.push(top);
        }
        if (right && !right.visited) {
            neighbours.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbours.push(bottom);
        }
        if (left && !left.visited) {
            neighbours.push(left);
        }
        return neighbours[floor(random(0, neighbours.length))]
    }
}