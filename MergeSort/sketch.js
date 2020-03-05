var arr = new Array();
var colors = new Array();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function call(arr) {

    arr.sort((a, b) => a - b);
    // });
    // await Promise.all([
    //     Promise.resolve(10),
    //     Promise.resolve(4),
    //     Promise.resolve(7),
    //     arr.sort((a, b) => a - b)
    // ]);
}

async function check(a, b) {
    await sleep(10);
    return a - b;
}

function setup() {
    createCanvas(900, 900);
    // arr = new Array();
    colorMode(HSB);
    for (var i = 0; i < width; i++) {
        var hc = random(0, width);
        arr.push(hc);
        colors.push(map(hc, 0, width, 255, 0));
    }
    // arr = mergesort(arr, 0, arr.length - 1);
    call(arr);
    // arr.sort((a, b) => a - b);
    console.log(arr);
}

function draw() {
    background(0);
    for (var i = 0; i < arr.length; i++) {
        stroke(255, 255, 255);
        line(i, height, i, height - arr[i]);
    }
}

function mergesort(arr, start, end) {
    if (start < end) {
        mid = floor((end + start) / 2);
        // await Promise.all([
        console.log("dada");
        mergesort(arr, start, mid);
        mergesort(arr, mid + 1, end);
        // ]);
        merge(arr, start, mid, end);
    }
    return arr;
}

function merge(arr, start, mid, end) {

    var left = mid - start + 1;
    var right = end - mid;
    // var key = arr[end];

    var lArray = new Array();
    var rArray = new Array();

    for (var i = 0; i < left; i++) {
        lArray.push(arr[start + i]);
    }

    for (var i = 0; i < right; i++) {
        rArray.push(arr[mid + i + 1]);
    }

    lArray.push(Infinity);
    rArray.push(Infinity);

    var i = 0;
    var j = 0;

    for (var k = start; k < end + 1; k++) {
        if (lArray[i] <= rArray[j]) {
            arr[k] = lArray[i];
            i++;
            console.log("first");

        } else {
            arr[k] = rArray[j];
            j++;
            console.log("sec");

        }
    }
}