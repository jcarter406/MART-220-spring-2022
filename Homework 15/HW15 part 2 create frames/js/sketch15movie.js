
//code from classroom example

var mainColor = (50, 255);

function setup() {
    createCanvas(640, 480);
    background(255, 255, 160, 200);
    frameRate(25);
    noStroke();
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(50, 255));

    var size= random(50, 180);

    circle(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - (mainColor-50); // 255 0 255 0 255 0 ..
    }
    saveFrames("myMovie",".png", 1, 25);

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }
}