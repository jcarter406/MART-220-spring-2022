
//getSprites() array - where does this go? in preload?  SPRITE NOT WORKING

var player;  //this is one that is moved with arrow keys
var playerX = 700;
var playerY = 700;

//animation items for use with createSprite
var twirlresult;
var sleepresult;
var attackresult;
var blob;

//array for multiple stationary barriers
var globeX = 300;
var globeY = 350;

var ball;

var globe = [];
var globeXs = [];
var globeYs = [];
var globeSize = 5;

//stationary collision object
var squirrel;

const particles = [];

function preload() 
{
    attackresult = loadStrings('assets/attack.txt');
    twirlresult = loadStrings('assets/twirl.txt');
    sleepresult = loadStrings('assets/sleep.txt');
    ball = loadImage('assets/globe.png');
    player = loadImage('assets/kitten.png');
    squirrel = loadImage('assets/squirrel.png');
 
}


function setup()
{
    createCanvas(displayWidth, displayHeight);

    blob = createSprite(200, 300);
    //these don't work:
    //blob.addAnimation('sleep', sleepresult[0], sleepresult[sleepresult.length-1]);
    //blob.addAnimation('twirl', twirlresult[0], twirlresult[twirlresult.length-1]);
    //blob.addAnimation('attack', attackresult[0], attackresult[1]);

    blob.addAnimation('sleep', 'assets/sleep/sleep001.png', 'assets/sleep/sleep012.png');
    blob.addAnimation('twirl', 'assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');
    blob.addAnimation('attack', 'assets/attack/attack001.png', 'assets/attack/attack002.png');
    
    //squirrel = createSprite(600, 200);
    //squirrel.addImage(loadImage('assets.squirrel.png'));

    //this places 5 globes randomly across screen. Leave same size for now.
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

    image(squirrel, 600, 270);
    image(player, playerX, playerY);
    playerMove();
    playerStop();

    //Adds particles to webpage
   for (let i = 0; i < 5; i++)
    {
    let p = new Particle();
    particles.push(p);
    }

    for(let i = particles.length-1; i >= 0; i--)
    {
       particles[i].update(); 
       particles[i].show();
       if (particles[i].finished())
       {
          particles.splice(i, 1); 
       } 
    }

    //adds globes to webpage
    for(var i =0; i < globeSize; i++)
    {
    image(globe[i], globeXs[i], globeYs[i]);
    }
   
    //move blob around to hit squirrel
    if(keyDown('d'))
    {
        blob.changeAnimation('attack');
        blob.velocity.x +=1;
        /*if(squirrel != null)
        {
            if(blob.collide(squirrel))
            {
                blob.changeAnimation('sleep');
            }
        }*/
    }
    
    else if(keyDown('a'))
    {
        blob.changeAnimation('twirl');
        blob.velocity.x -=2;
        /*if(squirrel != null)
        {
            if(blob.collide(squirrel))
            {
                blob.changeAnimation('sleep');
            }
        }*/
    }
    else if(keyDown('w'))
    {
        blob.changeAnimation('attack');
        blob.velocity.x +=3; 
        /*if(squirrel != null)
        {
        if(dist(blob.position.x, blob.position.y, squirrel.position.x, squirrel.position.y)<100)
            {
            squirrel.remove();
            squirrel = null;
            }
        }*/
    }

    else
    {
        blob.changeAnimation('sleep');
        blob.velocity.x = 0;
    }

    //collision still doesn't work so no need for particles either. ANNOYING
    /*if(squirrel != null) 
        {
            if(dist(blob.position.x, blob.position.y, squirrel.position.x, squirrel.position.y) < 250)
            {
                createParticles(squirrel.position.x, squirrel.position.y);
                health -= 1;
                if(health <= 0)
                {
                    squirrel.remove();
                    squirrel = null;
                }
            }
        }*/

    blob.debug = mouseIsPressed;
    squirrel.debug = mouseIsPressed;  //Not sure why i really need this to see position
    drawSprites();  
}

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

}
