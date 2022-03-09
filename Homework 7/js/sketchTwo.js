

//getSprites() array - where does this go? in preload?  SPRITE NOT WORKING


var player;  //this is one that is moved with arrow keys
var playerX = 700;
var playerY = 700;

//animation items  - would like to have both combined but cannot get it to do so
var twirl;
var sleep;
var blob;      //not sure it I need to create it here or in setup with createSprite

//array for multiple stationary barriers
var globeX = 500;
var globeY = 350;

var ball;

var globe = [];
var globeXs = [];
var globeYs = [];
var globeSize = 6;


function preload() 
{
    twirl = loadStrings('assets/twirl.txt');
    sleep = loadStrings('assets/sleep.txt');
    ball = loadImage('assets/globe.png');
    player = loadImage('assets/kitten.png');

}


function setup()
{
    createCanvas(displayWidth, displayHeight);

    //Cannot get it to read these three lines of code to get animations to show up
    blob = createSprite(100, 400);
    blob.addAnimation('sleep', 'assets/sleep/sleep001.png', 'assets/sleep/sleep012.png');
    blob.addAnimation('twirl', 'assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');

    
    //These will allow animations to show up but make it difficult to use other features like collide
    //twirl = loadAnimation('assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');
    //sleep = loadAnimation('assets/sleep/sleep001.png', 'assets/sleep/sleep012.png'); 

    
    //this places 6 globes randomly across screen. Leave same size for now.
    var h = window.displayHeight;
    var w = window.displayWidth;
    
    for(var i =0; i < globeSize; i++)
    {
        globe[i] = ball;
        globeXs[i] = globeX;
        globeYs[i] = globeY;
        globeX = random(0, w - 100);
        globeY = random(0, h - 100);
    }
 
}

function draw()
{
    background(30, 144, 255);

    //animation(twirl, 600, 150);  //not needed if .addAnimation works
    //animation(sleep, 300, 150);    //not needed if .addAnimation works
    image(player, playerX, playerY);
    playerMove();
    playerStop();

    for(var i =0; i < globeSize; i++)
    {
    image(globe[i], globeXs[i], globeYs[i]);
    }
    
    //USE PLAY functions here to allow for changes in animation. 
    //Unfortunately, not appearing to connect to sprite
    
    if(keyDown('d')) 
    {
        blob.changeAnimation('twirl');
        blob.velocity.x +=.5;

        //cannot get collide option to work yet
        /*if(blob.collide(globe)) {
            blob.changeAnimation('sleep');
            blob.velocity.x = 0;
        }*/
    }
    else {
        blob.changeAnimation('sleep');
        blob.velocity.x = 0;
        }
         
    drawSprites();  
}

//DEBUG code - debug code was shown in example about here- what does it do??? Do I need it to reset?

//NEED TO KEEP PLAYER IN SCREEN - set outer limits
function playerMove() 
{
    if(keyIsDown(LEFT_ARROW)) {
        playerX-=10;
        }
    if(keyIsDown(RIGHT_ARROW)) {
        playerX+=10;
        }
    if(keyIsDown(UP_ARROW)) {
        playerY-=10;
        }
    if(keyIsDown(DOWN_ARROW)) {
        playerY+=10;
        }
}


function playerStop()
{
    //stop player at border -  image pixel size is 200w 250h rect
    if (playerX > width-200) {
        playerX = (width-200);
    }
    if (playerX < 0) {
        playerX = 0;
    }
    if (playerY > height-250) {
        playerY = (height-250);
    }
    if (playerY < 0) {
        playerY = 0;
    }
}
