//3D model upload for class demo Mar 30
//Using coding train example to prepare demo code

let angle = 50;
let fur;
let cat;

function preload() 
{
    fur = loadImage('assets/Cat_diffuse.jpg');
    cat = loadModel('assets/cat.obj', true);
}

function setup()
{
    createCanvas(600, 600, WEBGL);
}

function draw()
{
    background(30, 144, 255);
    scale(2);
    ambientLight(255);
    directionalLight(255, 255, 255, 0, 0, 1);
    rotateX(angle * 0.1);
    rotateY(angle * 0.1);
    rotateZ(angle * 0.1);
    translate(20, 20, 20);
    //normalMaterial;
    texture(fur);
    model(cat);
    angle += 0.03;
}


