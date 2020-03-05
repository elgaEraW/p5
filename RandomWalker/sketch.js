var w;
var count;
var total;
var r;
var R;
function setup() {
    createCanvas(500, 500);
    r = 3;
    w = new Walker(width/2, height/2, r, true, 0);
    array = [];
    R = 400;
    array.push(w);
    // for (var i = 0; i < width; i++) {
        // for (var j = 0; j < height; j++) {
        // if (check(i, j))
        // array.push(new Walker(i, j, r * 25, true, 0));

        // }
    // }
    total = 500;
    for (var i = 0; i < total; i++) {
        var v = createVector(random(0, width), random(0, height));
        array.push(new Walker(v.x, v.y, r, false));
    }
    count = 0;
    // final = []
    // final.push(w);
}

function draw() { // w.show();
    background(0);
    // temp = [];
    for (var i = 0; i < array.length; i++) {
        for (var k = 0; k < 100; k++) {
            if (!array[i].stuck) 
                array[i].walk();
        }
        // if (array[i].stuck)
        array[i].show();

    }
    // for ( var i = 0; i < temp.length; i++) {
    //     final.push(array[i]);
    // }
    // for ( var i = 0; i < temp.length; i++) {
    //     array.splice()
    // }
    // for ( var i = ; i < )
}


function check(x, y) {
    var d = pow((x - width / 2), 2) + pow((y - height / 2), 2);

    return d === pow(R, 2);

}
