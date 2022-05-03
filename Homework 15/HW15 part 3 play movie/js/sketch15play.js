
//code from earlier animation codes

//animation item
var dots;

function preload() {
    dots = loadStrings('assets/myMovie.txt');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    dots = loadAnimation('assets/myMovie/myMovie01.png', 'assets/myMovie/myMovie15.png');
    
}

function draw() {
    //background(255, 255, 255, 0);  //do not appear to need this as the background color is in the animation
    animation(dots, width/2, height/2);
    
    //works but I want to re-size animation to full width and height to fill screen
    //Would also like to slow down animation
}
