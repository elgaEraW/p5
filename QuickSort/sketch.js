var arr = new Array();
var colors = new Array();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
    createCanvas(900, 900);
    // arr = new Array();
    colorMode(HSB);
    for (var i = 0; i < width; i++) {
        var hc = random(0, width)
        arr.push(hc);
        colors.push(map(hc, 0, width, 255, 0));
    }
    quicksort(0, arr.length - 1);
}

function draw() {
    background(0);
    for (var i = 0; i < arr.length; i++) {
        stroke(colors[i], 255, 255);
        line(i, height, i, height - arr[i]);
    }
}

async function quicksort(start, end) {
    if (start < end) {
        partition_index = await partition(start, end);
        await Promise.all([
            quicksort(start, partition_index - 1),
            quicksort(partition_index + 1, end)
        ]);
    }
}

async function partition(start, end) {

    var i = start - 1;
    var j = start;
    var key = arr[end];

    while (j < end) {
        if (arr[j] <= key) {
            i++;
            await swap(arr, i, j);
            await swap(colors, i, j);
        }
        j++;
    }
    i++;
    await swap(arr, i, end);
    await swap(colors, i, end);
    return i;
}

async function swap(arr, a, b) {
    await sleep(10);
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}