//Bar A top and first to end
var abarX = 350;
var abarY = 400;
var abarDirection = 3;

//Bar B middle and second to end
var bbarX = 250;
var bbarY = 430;
var bbarDirection = 3;

//Bar C bottom and last to end
var cbarX = 150;
var cbarY = 460;
var cbarDirection = 3;

//random ellipse shape and will add random color and timer next time
var shapeX = 20;
var shapeY = 60;
var shapeXs = [];
var shapeYs = [];
var shapeWidth = 30;
var shapeHeights = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

//bouncy ball with random direction
var x = 100;
var y = 100;
var dimension = 60;
var speedX = 0;
var speedY = 0;



//random number for speed is set up inside setup function
function setup() {
        createCanvas(800,650); 
        for (var i = 0; i <10; i++)
        {
            shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            shapeXs[i] = random(0, 800);
            shapeYs[i] = random(0, 650);
            shapeHeights[i] = random(40, 400);
            speedX = random(1, 5);
            speedY = random(1, 5);
        }

    }
function draw() 
{
    background(160, 130, 170);

    //add name box to lower right corner and title to top left via functions
    labelName();
    title();
    createAbar();
    createBbar();
    createCbar();
    backButton();
    buttonText();
    createCircle();

    //add random ellipses
    fill(160, 130, 170);
    stroke(25, 125, 95);
    strokeWeight(5);
    for (var i = 0; i < 10; i++) 
    {
    ellipse(shapeXs[i], shapeYs[i], 30, shapeHeights[i]);
           
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

}

    //Add functions here
    function labelName()
    {
        stroke(0, 0, 0);
        strokeWeight(1);
        fill(0, 0, 255);
        textSize(20);
        text("J Carter", width-80, height-10);
    }

    function title()
    {
        stroke(0, 0, 0);
        strokeWeight(1);
        fill(0, 0, 0);
        textSize(20);
        text("Scatter Brain", width-800, height-630);
    }
        
    //create abar
    function createAbar() 
    {
          fill(150, 140, 200)
          strokeWeight(1);
          rect(abarX, abarY, 100, 20);
          abarX += abarDirection;
        if (abarX <= 10 || abarX >= 690) {
          abarDirection *= -1; 
        } 
    }

    //create bbar
    function createBbar()
    {
       fill(200, 100, 180);
       strokeWeight(1);
       rect(bbarX, bbarY, 100, 20);
       bbarX += bbarDirection;
       if (bbarX <= 10 || bbarX >= 690) {
        bbarDirection *= -1; 
        }
    }


    //create cbar
    function createCbar()
    {
       fill(225, 0, 0);
       strokeWeight(1);
       rect(cbarX, cbarY, 100, 20);
       cbarX += cbarDirection;
       if (cbarX <= 10 || cbarX >= 690) {
        cbarDirection *= -1; 
        }
    }

    //create back button
    function backButton()
    {
        fill(255,255,255);
        strokeWeight(1);
        textSize(20);
        text("Back");
        ellipse(width-60, height-50, 80, 30);

    }

    //create text for button
    function buttonText()
    {
        stroke(0, 0, 0);
        strokeWeight(1);
        fill(0, 0, 0);
        textSize(20);
        text("Back", width-80, height-45);
    }

    //create bouncy circle
    function createCircle()
    {
        stroke(100, 90, 120);
        strokeWeight(3);
        fill(250, 70, 90);
        circle(x, y, dimension);
        if(x >= 775) {
            speedX = random(1, 5);
            speedX = -speedX; 
        }
        else if(x < 25) {
            speedX = random(1, 5);
        }
        else if(y >= 625) {
            speedY = random(1, 5);
            speedY = -speedY; 
        }
        else if(y < 25) {
            speedY = random(1, 5);
        }
        x = x + speedX;
        y = y + speedY;
    }
