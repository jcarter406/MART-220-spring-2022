
//preload images
var deer;
var deerX = 400;
var deerY = 400;
var deerSpeed = 3;

//photo by Michaela Joy Photography 2/22/2020   Cropped and converted to png
var head;
var headX = 500;
var headY = 100;
var headSpeed = 1;

var kittenX = 500;
var kittenY = 350;
var kittenSpeed = 1;

var cat;

var kitten = [];
var kittenXs = [];
var kittenYs = [];
var kittenSpeedXs = [];
var kittenSpeedYs = [];

var kittenSize = 25;

//load font
var myFont;

//red laser dot
var x = 100;
var y = 200;
var dimension = 20;
var speedX = 0;
var speedY = 0;

//load timer
var timerValue = 20;
//var startButton;


function preload() {
    deer = loadImage('assets/deer3.png');
    head = loadImage('assets/headshot.png');
    cat = loadImage('assets/kitten.png');
    myFont = loadFont('assets/Capriola-Regular.ttf');  
                //may use otf or ttf font
}

function setup() {
    createCanvas(displayWidth, displayHeight);

    //FileList('#ED225D');
    //textFont(myFont);
    //textSize(36);
    //text('practice code', 10, 50);
    //textAlign(CENTER);
    //setInterval(timeIt, 1000);

    var h = window.displayHeight;
    var w = window.displayWidth;
    speedX = random(3, 10);
    speedY = random(3, 10);
    textAlign(width / 2, 30);
    setInterval(timeIt, 1000);

    for(var i = 0; i < kittenSize; i++) 
    {
        kitten[i] = cat;
        kittenXs[i] = kittenX;
        kittenYs[i] = kittenY;
        kittenX = random(0, w - 100);
        kittenY = random(0, h - 100);
        kittenSpeedXs[i] =random(-6, -2);
        kittenSpeedYs[i] =random(1, 6);
    }
   
}

function draw() {

    background(30, 144, 255);
    image(deer, deerX, deerY);
    image(head, headX, headY);
    //call red laser dot
    createCircle();
    labelName();


     //move deer back and forth horizontally
     deerX += deerSpeed;
     if(deerX >= width - deer.width || deerX <= 10)
     {
         deerSpeed *= -1;
     }
    
      //move deer back and forth horizontally
      headY += headSpeed;
      if(headY >= height - 500 || headY <= 100)
      {
          headSpeed *= -1;
      }

     //move multiple kittens various rates and angles from upper right to left
    for(var i = 0; i < kitten.length; i++) 
    {
        image(kitten[i], kittenXs[i], kittenYs[i]);
        //move the kitties
        kittenXs[i] += kittenSpeedXs[i];
        kittenYs[i] += kittenSpeedYs[i];
    
         //Bouncy kittens - yippee finally got it to work
         if (kittenXs[i] <= 0 || kittenXs[i] >= width) {
            kittenSpeedXs[i] *= -1;
            }
         if (kittenYs[i] <= 0 || kittenYs[i] >= height) {
            kittenSpeedYs[i] *= -1;
            }
    }
    
        //timer settings - can make it do something to images later
        if (timerValue >= 10) {
            text('0:' + timerValue, 30, 70);
        }
        if (timerValue < 10) {
            text('0:0' + timerValue, 30, 70);
        }
        if (timerValue == 0) {
            text('Game Over', 30, 100);
        }

}
    
 
 //Add functions here

 //create red laser dot
 function createCircle()
 {
     stroke(255, 0, 0);
     strokeWeight(1);
     fill(250, 0, 0);
     circle(x, y, dimension);
     if(x >= width) {
         speedX = random(1, 5);
         speedX = -speedX; 
     }
     else if(x < 25) {
         speedX = random(1, 5);
     }
     else if(y >= height) {
         speedY = random(1, 5);
         speedY = -speedY; 
     }
     else if(y < 25) {
         speedY = random(1, 5);
     }
     x = x + speedX;
     y = y + speedY;
 }

 
 function labelName()
 {
     stroke(0, 0, 0);
     strokeWeight(1);
     fill(139, 0, 139);
     textFont(myFont);
     textSize(30);
     text("J Carter", width-130, height-20);
     text("Scatter Brain", 10, 40);
 }

 function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
 }

 