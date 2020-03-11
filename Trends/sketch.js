let data;
let counti, countj;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generate() {
    // var last = data[data.length - 1];
    // while (true) {
    await sleep(1000);
    // console.log('jj');
    for (var i = 0; i < dataset.length; i++) {
        for (var j = 0; j < dataset[i].count; j++) {
            for (var k = 0; k < data.length; k++) {
                if (data[k].name === dataset[i].index) {
                    data[k].val += 2;
                }
            }
        }
    }
    //     var number = floor(random(0, data.length));
    // data[data.length - 1].val += 0.5;
    print(dataset);
    // }
}

async function call() {
    while (true) {
        await sleep(60);

        if (counti < data.length) {
            // for (countj = 0; countj < data.length - counti - 1; countj++) {
            if (countj < data.length - counti - 1) {
                if (data[countj + 1].val > data[countj].val) {
                    temp = data[countj];
                    data[countj] = data[countj + 1];
                    data[countj + 1] = temp;
                    // await transition(countj + 1, countj);
                    // temp = colors[countj];
                    // colors[countj] = colors[countj + 1];
                    // colors[countj + 1] = temp;
                }
                countj++;
            }
            if (countj === data.length - counti - 1) {
                countj = 0;
                counti++;
            }
        } else {
            counti = 0;
            countj = 0;
        }

    }
}

function setup() {
    createCanvas(1800, 800);
    data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            name: i,
            val: random(10, 1600)
        });
        counti = 0;
        countj = 0;
        // temp = data;
        // data.sort((a, b) => b - a);
        call();
        generate();
    }
}



function draw() {
    background(0);
    translate(100, 100);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    for (var i = 0; i < 10; i++) {
        text(data[i].name, -50, i * 50 + 15);
        rect(0, i * 50, data[i].val, 25);
    }
}