let rows, cols;
let grid;
let w = 20;
let current;
let stack;
let init;
let solveStack;

function setup() {
    createCanvas(800, 800);
    cols = width / w;
    rows = height / w;
    grid = [];
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid.push(new Cell(i, j));
        }
    }
    // frameRate(5);
    init = grid[0];
    current = grid[0];
    current.visited = true;
    stack = []
    stack.push(current);
    solveStack = [];
}

function draw() {
    background(0);
    current.back();
    let neighbour = current.findNeighbours();
    if (neighbour) {
        removeWalls(current, neighbour);
        neighbour.visited = true;
        stack.push(neighbour);
        current = neighbour;
    } else {
        if (stack.length > 0) {
            current = stack.pop();
        } else {
            // solve(init);
            noLoop();
        }
    }
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function removeWalls(a, b) {
    let i = a.i - b.i;
    if (i === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (i === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }

    let j = a.j - b.j;
    if (j === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (j === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function solve(init) {
    // let next = 1;
    // print('satrt');
    if (init) {
        solveStack.push(init);
        // print('any');
        init.front();
        // print(init);
        // init = next;
        next = move(init);
        init = next;
        solve(init);
    }
}

function move(a) {
    let arr = [];
    for (var i = 0; i < a.walls.length; i++) {
        if (!a.walls[i]) {
            arr.push(i);
        }
    }
    print(arr);
    if (arr.length > 0) {
        let r = floor(random(0, arr.length));

        let nextIndex = arr[r];
        let index;
        switch (nextIndex) {
            case 0:
                index = calIndex(a.i - 1, a.j);
                print(index);
                return grid[index];
                break;

            case 1:
                index = calIndex(a.i, a.j + 1);
                print(index);
                return grid[index];
                break;

            case 2:
                index = calIndex(a.i + 1, a.j);
                print(index);
                return grid[index];
                break;

            case 3:
                index = calIndex(a.i, a.j - 1);
                print(index);
                return grid[index];
                break;

            default:
                return undefined;
                break;
        }

    } else {
        return solveStack.pop();
    }
}

function calIndex(i, j) {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) {
        return -1;
    }
    return i * cols + j;
}