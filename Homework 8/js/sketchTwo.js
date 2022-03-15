
// Cannot get paticles to dissolve at end and sorry about the gory red color

//animation items for use with createSprite. Make this stationary object
var twirlresult;
var sleepresult;
var attackresult;
var blob;

//fixed object for collision
var squirrel;

var health = 60;
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

    blob = createSprite(800, 500);
    blob.addAnimation('sleep', 'assets/sleep/sleep001.png', 'assets/sleep/sleep012.png');
    blob.addAnimation('twirl', 'assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');
    blob.addAnimation('attack', 'assets/attack/attack001.png', 'assets/attack/attack002.png');

    squirrel = createSprite(300, 500);
    squirrel.addAnimation('squirrel', 'assets/squirrel/squirrel001.png', 'assets/squirrel/squirrel002.png');
}

function draw()
{
    background(30, 144, 255);
    
    //move blob with keys
    if(keyDown('d')) {
        blob.changeAnimation('twirl');
        blob.velocity.x += 0.1;
        if(squirrel != null) {
           
            if (blob.collide(squirrel)) {
                blob.changeAnimation('sleep');
            }
        }   
    }
    else if(keyDown('a')) {
        blob.changeAnimation('twirl');
        blob.velocity.x -= 0.1;
        if(squirrel != null) {
           
            if (blob.collide(squirrel)) {
                blob.changeAnimation('sleep');
            }
        }   
    }
    else {
        blob.changeAnimation('sleep');
        blob.velocity.x = 0;
    }

    /*else if(keyDown('s')) {
        blob.changeAnimation('twirl');
        blob.velocity.y += 0.5;
        if(squirrel != null) {
           
            if (blob.collide(squirrel)) {
                blob.changeAnimation('sleep');
            }
        }   
    }
    else if(keyDown('w')) {
        blob.changeAnimation('twirl');
        blob.velocity.y -= 0.5;
        if(squirrel != null) {
           
            if (blob.collide(squirrel)) {
                blob.changeAnimation('sleep');
            }
        }   
    } */

    if(keyDown('x')) 
    {
        blob.changeAnimation('attack');

        if(squirrel != null) 
        {
            if(dist(blob.position.x, blob.position.y, squirrel.position.x, squirrel.position.y) < 300) 
            {
                createParticles(squirrel.position.x, squirrel.position.y);
                health -= 2;
                if(health <= 0)
                {
                squirrel.remove();
                squirrel = null;
                fill(255, 0, 0);
                textSize(100);
                text("YOU WIN !!!", 400, 400);
                }

            }
        }   
    }
 
    blob.debug = mouseIsPressed;
    squirrel.debug = mouseIsPressed;  

    drawSprites();  
}
    
//FUNCTIONS AND CLASSES HERE
function createParticles(x,y)
{
    for (let i = 0; i < 10; i++) {
        let p = new Particle(x,y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
        particles.splice(i, 1);
        }
    }
}


class Particle {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.vx = random(-5, 5);
        this.vy = random(-5, 5);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 10;
    }

    show() {
        noStroke();
        fill(255, 0, 0, this.alpha);
        ellipse(this.x, this.y, 10);
    }

}
