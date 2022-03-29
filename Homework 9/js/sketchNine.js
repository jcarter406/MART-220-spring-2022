
// Still cannot get paticles to dissolve at end and sorry about the gory red color
// five primitive 3D objects added
//blob disappears when squirrel disappears

//animation items for use with createSprite. Make this stationary object
var twirlresult;
var sleepresult;
var attackresult;
var blob;

//fixed object for collision
var squirrel;

var health = 60;
const particles = [];

let myFont;

function preload() 
{
    attackresult = loadStrings('assets/attack.txt');
    twirlresult = loadStrings('assets/twirl.txt');
    sleepresult = loadStrings('assets/sleep.txt');
    squirrel = loadStrings('assets/squirrel.txt');
    myFont = loadFont('assets/Capriola-Regular.ttf');
 
}


function setup()
{
    createCanvas(displayWidth, displayHeight, WEBGL);

    blob = createSprite(500, 100);
    blob.addAnimation('sleep', 'assets/sleep/sleep001.png', 'assets/sleep/sleep012.png');
    blob.addAnimation('twirl', 'assets/twirl/twirl001.png', 'assets/twirl/twirl015.png');
    blob.addAnimation('attack', 'assets/attack/attack001.png', 'assets/attack/attack002.png');

    squirrel = createSprite(-500, 100);
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

// Cannot get particles to disappear after squirrel removed and blob disappeared
    if(keyDown('x')) 
    {
        blob.changeAnimation('attack');

        if(squirrel != null) 
        {
            if(dist(blob.position.x, blob.position.y, squirrel.position.x, squirrel.position.y) < 300) 
            {
                createParticles(squirrel.position.x, squirrel.position.y);
                health -= 1;
                if(health <= 0)
                {
                squirrel.remove();
                squirrel = null;
                fill(0, 100, 50);  
                textFont(myFont);
                textSize(60);
                text("YOU WIN !!!", -400, 100, 100);
                }

            }
        }
    }
    normalMaterial();

    push();
    translate(-200, -300, -200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.02);
    box(150, 150, 150);
    pop();

    push();
    translate(-650, -300, -160);
    rotateX(frameCount * 0.005);
    rotateZ(frameCount * 0.005);
    torus(150, 65, 14, 36);
    pop();

    push();
    translate(0, -100, -50);
    rotateZ(frameCount * 0.01);
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(200);
    pop();

    push();
    translate(300, -270, -100);
    ambientLight(200);
    rotateZ(frameCount * 0.03);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    cone(80, 250, 90);
    pop();

    push();
    translate(100, 200, -50);
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(50, 290, 80);
    pop();

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

