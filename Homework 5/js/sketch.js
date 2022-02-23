//HW 5 add classes and objects and animation

//create static array of randomly placed squirrels.  Try to do this via class and object
var rodent;
var squirrelX = 0;
var squirrelY = 0;
var squirrel = [];
var squirrelXs = [];
var squirrelYs = [];
var squirrelSize = 10;


//create cat that moves with pressed keys. Read instructions wrong - should be an animation moved with keys not a static object
var feline;
var kittenX = 300;
var kittenY = 500;
var kittenSpeed = 10;


//create class with animation object in it
var img;
var names = [];
var myImage;
var i = 0;
var imagesToDisplay = [];
var imageClassObject;

//Create a second class with animation object in it. This one broke the code
/*var img2;
var names2 = [];
var myImage2;
var f = 0;
var images2ToDisplay = [];
var image2ClassObject;
*/



function preload() 
{
        feline = loadImage("./assets/kitten.png");
        rodent = loadImage("./assets/squirrelR.png");
        names = loadStrings("./assets/walk.txt");
        //names2 = loadStrings("./assets/run.txt");
}


function setup() 
{
    createCanvas(displayWidth, displayHeight);

    var h = window.displayHeight;
    var w = window.displayWidth;
    
    for(var k = 0; k < names.length; k++)
    {
        img = loadImage("./assets/cat/" + names[k]);
        imageClassObject = new imageClass(img, 100, 100, 335, 235);
        imagesToDisplay[k] = imageClassObject;
    }
    setInterval(moveCat, 90);

    /*for(var f = 0; f < names.length; f++)
    {
        img2 = loadImage("./assets/dog/" + names2[f]);
        image2ClassObject = new image2Class(img, 100, 600, 335, 235);
        images2ToDisplay[f] = image2ClassObject;
    }
    setInterval(moveDog, 90);
    */
    
    

    //show randomly placed squirrels
    for(var j = 0; j < squirrelSize; j++)
    {
        squirrel[j] = rodent;
        squirrelXs[j] = squirrelX;
        squirrelYs[j] = squirrelY;
        squirrelX = random(0, w -100);
        squirrelY = random(0, h-100);

    }
}


function draw() 
{
    background(30, 144, 255);

    image(feline, kittenX, kittenY);
    
    for(var j = 0; j < squirrel.length; j++)
    {
        image(squirrel[j], squirrelXs[j], squirrelYs[j]);
    }

    image(imagesToDisplay[i].getImage(),
    imagesToDisplay[i].getX(),
    imagesToDisplay[i].getY(),
    imagesToDisplay[i].getW(),
    imagesToDisplay[i].getH());

    /*image(images2ToDisplay[f].getImage2(),
    images2ToDisplay[f].getX2(),
    images2ToDisplay[f].getY2(),
    images2ToDisplay[f].getW2(),
    images2ToDisplay[f].getH2());
    */
    

    moveCat();
    //moveDog();
    kittenMovement();
}


//FUNCTIONS HERE
function moveCat() 
{
    i+=1;
    
    if(i >= imagesToDisplay.length) 
    {
        i = 0;
    }

    for(var m = 0; m < imagesToDisplay.length; m++) 
    {
        imagesToDisplay[m].moveX(10);
    }

}

/*function moveDog() 
{
    f+=1;
    
    if(f >= imagesToDisplay.length) 
    {
        f = 0;
    }

    for(var g = 0; g < imagesToDisplay.length; g++) 
    {
        imagesToDisplay[g].moveX2(10);
    }

}*/

function kittenMovement() 
{
   if(keyIsDown(LEFT_ARROW)) {
       kittenX-=10;
       }
   if(keyIsDown(RIGHT_ARROW)) {
       kittenX+=10;
       }
   if(keyIsDown(UP_ARROW)) {
       kittenY-=10;
       }
   if(keyIsDown(DOWN_ARROW)) {
       kittenY+=10;
       }
}