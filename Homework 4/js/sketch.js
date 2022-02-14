
//photo by Michaela Joy Photography 2/22/2020   Cropped and converted to png
var head;
var headX = 500;
var headY = 100;
//var headSpeed = 1;

//arrays for multiple kittens 
var kittenX = 500;
var kittenY = 350;
var kittenSpeed = 1;

var cat;

var kitten = [];
var kittenXs = [];
var kittenYs = [];
var kittenSpeedXs = [];
var kittenSpeedYs = [];
var kittenSize = 5;

//arrays for multiple dogs - try getting them to move after squirrel moves
var dogX = 600;
var dogY = 150;
var dogSpeed = 1;

var doggy;

var dog = [];
var dogXs = [];
var dogYs = [];
var dogSpeedXs = [];
var dogSpeedYs = [];
var dogSize = 5

//blue bouncy ball
var ballX = 100;
var ballY = 200;
var ballDimension = 50;
var ballSpeedX = 0;
var ballSpeedY = 0;

//move squirrel after 10 seconds 
var rodent;
var squirrelX = 800;
var squirrelY = 100;
var squirrelSpeedX = 1;
var squirrelSpeedY = 1;

var time1 = 10000;

//load font
var myFont;

//load timer
var timerValue = 90;
//var startButton;

//move head with mouse or keys
//var mouseX = x;
//var mouseY = y;

function preload() {
    head = loadImage('assets/headshot.png');
    cat = loadImage('assets/kitten.png');
    doggy = loadImage('assets/dog.png');
    rodent = loadImage('assets/squirrel.png');
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
    
    var h = window.displayHeight;
    var w = window.displayWidth;
    speedX = random(3, 10);
    speedY = random(3, 10);
    ballSpeedX = random(1, 8);
    ballSpeedY = random(1, 8);
    textAlign(width / 2, 30);
    setInterval(timeIt, 1000);
    
    //Arrays for kittens
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

    //arrays for dogs
    for(var i = 0; i < dogSize; i++) 
    {
        dog[i] = doggy;
        dogXs[i] = dogX;
        dogYs[i] = dogY;
        dogX = random(0, w);
        dogY = random(0, h);
        dogSpeedXs[i] =random(-3, -1);
        dogSpeedYs[i] =random(1, 3);
    }
}

function draw() {

    background(30, 144, 255);
    image(head, headX, headY);
    image(rodent, squirrelX, squirrelY);  
    headMovement();
    createBall();
    labelName();


    //make squirrel move at specific time - would prefer to make it re-appea too
    var currentTime = millis();
        if (currentTime > time1) {
            squirrelX -=2;
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

    //move multiple dogs various rates and angles from upper right to left
    for(var i = 0; i < dog.length; i++) 
    {
          image(dog[i], dogXs[i], dogYs[i]);
          //move the dogs
          dogXs[i] += dogSpeedXs[i];
          dogYs[i] += dogSpeedYs[i];
      
           //Bouncy dogs - try same code as kittens here
           if (dogXs[i] <= 0 || dogXs[i] >= width) {
              dogSpeedXs[i] *= -1;
              }
           if (dogYs[i] <= 0 || dogYs[i] >= height) {
              dogSpeedYs[i] *= -1;
              }
    }
    
        //timer settings
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

 //create blue bouncy ball
  function createBall()
  {
      stroke(0, 0, 255);
      strokeWeight(1);
      fill(0, 0, 255);
      circle(ballX, ballY, ballDimension);
      if(ballX >= width) {
          ballSpeedX = random(1, 3);
          ballSpeedX = -ballSpeedX; 
      }
      else if(ballX < 25) {
          ballSpeedX = random(1, 3);
      }
      else if(ballY >= height) {
          ballSpeedY = random(1, 3);
          ballSpeedY = -ballSpeedY; 
      }
      else if(ballY < 25) {
          ballSpeedY = random(1, 3);
      }
      ballX = ballX + ballSpeedX;
      ballY = ballY + ballSpeedY;
  }
 
 function headMovement() 
 {
    if(keyIsDown(LEFT_ARROW)) {
        headX-=10;
        }
    if(keyIsDown(RIGHT_ARROW)) {
        headX+=10;
        }
    if(keyIsDown(UP_ARROW)) {
        headY-=10;
        }
    if(keyIsDown(DOWN_ARROW)) {
        headY+=10;
        }
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
