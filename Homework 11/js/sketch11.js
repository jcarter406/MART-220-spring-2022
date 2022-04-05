//create or at least find a 3D model
//add 5 3D textured objects with different textures for each
//all 5 objects should rotate around the central 3D model at different speeds
//all 5 simple shapes should be in an array - why???  Kept two in it.
//NOT WORKING  mouse click should cause at least two simple shapes change location in random method
//add name and title to piece
//codes based on week 11 example by Michael Cassens

// create five variables for object textures 
let reddrops;
let sprinkles;
let grass;
let water;
let watercolor;

// create a variable for the 3D cat model and its texture
let angle = 50;
let fur;
let cat;

//add title and name - need to move to top left of screen
var myFont;

let shapeArray = [];
// create sets of variables for the random translation positions
var boxTranslationX = -200;
var boxTranslationY = -200;
var cylTranslationX = 300;
var cylTranslationY = 20;


// this function will ensure the assets are loaded prior to setup
function preload() {
  reddrops = loadImage('assets/reddrops.jpg');
  sprinkles = loadImage('assets/sprinkles.jpg');
  grass = loadImage('assets/grass.jpg');
  water = loadImage('assets/water.jpg');
  watercolor = loadImage('assets/watercolor.jpg');
  fur = loadImage('assets/Cat_diffuse.jpg');
  cat = loadModel('assets/cat.obj', true);
  myFont = loadFont('assets/Capriola-Regular.ttf');

}

// create the canvas of 800 width by 600 height
function setup() {
  createCanvas(1000, 800, WEBGL);

  // Need two codes for moving two simple shapes to the simple shape array - keep same for now to see if it works
  shapeArray.push(new shapeclass("box", 100, 100, 100, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, water));
  shapeArray.push(new shapeclass("cylinder", 60, 100, 0, cylTranslationX, cylTranslationY, 0.01, 0.01, 0, watercolor));

}

function draw() {

  background(30, 144, 255);
  noStroke();
  
  // these should be required to "call textures" make sure the custom shapes will be textured
  image(reddrops);
  image(sprinkles);
  image(grass);
  image(water);
  image(watercolor);
   
  push();
  scale(1.5);
  ambientLight(255);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle * 0.1);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.1);
  translate(20, 20, 20);
  texture(fur);
  model(cat);
  angle += 0.03;
  pop();
  

  // display the simple shapes - try this one as is and see what happens with five shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

 
  // add a textured cone
  push();
  translate(-300, 60);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(sprinkles);
  cone(60, 140);
  pop();
  

  // add a textured ellipsoid
  push();
  translate(-50, 250);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  texture(grass);
  ellipsoid(30, 40, 80);
  pop();
  
  
  // add a textured torus
  push();
  translate(200, -180);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.04);
  texture(reddrops);
  torus(50, 15);
  pop();

  labelName();

  // randomly change the location of the box and cone - may need to use mouse click
  //NOT WORKING   These codes freeze the movement of all objects/models
  //I am missing something about 3D movement here - need to keep working on it
  /*
  if (mousePressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(200));
    boxTranslationY = floor(random(200));
  }
  
  if (mousePressed) {
    cylTranslationX = 0;
    cylTranslationY = 0;
    cylTranslationX = floor(random(400));
    cylTranslationY = floor(random(50));
  }
  */

}

function labelName()
{
    stroke(0, 0, 0);
    strokeWeight(1);
    fill(139, 0, 139);
    textFont(myFont);
    textSize(30);
    text("J Carter", 350, 370);
    text("Scatter Brain", -450, -350);
}