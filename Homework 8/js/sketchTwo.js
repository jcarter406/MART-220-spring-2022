
//animation items for use with createSprite. Make this stationary object
var twirlresult;
var sleepresult;
var attackresult;
var blob;

//moveable object for collision
var squirrel;

const particles = [];

function preload() 
{
    attackresult = loadStrings('assets/attack.txt');
    twirlresult = loadStrings('assets/twirl.txt');
    sleepresult = loadStrings('assets/sleep.txt');
    squirrel = loadStrings('assets/squirrel.txt');
 
}


function setup()
{
    createCanvas(displayWidth, displayHeight);

    blob = createSprite(700, 600);
    blob.addAnimation('sleep', 'assets/sleep/sleep001.png', 'assets/sleep/sleep012.png');
    blob.addAnimation('twirl', 'assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');
    blob.addAnimation('attack', 'assets/attack/attack001.png', 'assets/attack/attack002.png');

    squirrel = createSprite(300, 500);
    squirrel.addAnimation('squirrel', 'assets/squirrel/squirrel001.png', 'assets/squirrel/squirrel002.png');
}

function draw()
{
    background(30, 144, 255);

    blob.position.x = mouseX;
    blob.position.y = mouseY;
    
    //put collision code here
    if (blob.collide(squirrel))
        blob.changeAnimation('attack');
    else 
        blob.changeAnimation('twirl');

    blob.debug = mouseIsPressed;
    squirrel.debug = mouseIsPressed;  

    drawSprites();  
}
    
//FUNCTIONS AND CLASSES HERE

/*function squirrelMove() 
{
    if(keyIsDown(LEFT_ARROW)) {
        squirrelX-=10;
        }
    if(keyIsDown(RIGHT_ARROW)) {
        squirrelX+=10;
        }
    if(keyIsDown(UP_ARROW)) {
        squirrelY-=10;
        }
    if(keyIsDown(DOWN_ARROW)) {
        squirrelY+=10;
        }
} */

/* 
class Particle {

    constructor() {
        this.x = displayWidth/2;
        this.y = 600;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 10, 30);
    }

}  */
