var xoff1 = 0;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(51);

    var x = map(noise(xoff1), 0, 1, 0, width);

    xoff1 += 0.01;

    ellipse(x, 200, 24, 24);

}