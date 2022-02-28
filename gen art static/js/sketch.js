//based on demo by weidi zhang youtube me04ZrTJqWA
// editor.p5js.org/weidi/sketches/vANCGnkoU

let img;
let posX, posY;
let cnv;
let c;


function preload()
{
    img = loadImage('./assets/road500x660.jpg');
    cat = loadImage('./assets/kitten.png');
}    


function setup()
{
    cnv = createCanvas(img.width, img.height);
    let newCanvasX = (windowWidth - img.width)/2;
    let newCanvasY = (windowHeight - img.height)/2;
    cnv.position(newCanvasX, newCanvasY);

    for(let col = 0; col < img.width; col+=2)
    {
        for(let row = 0; row < img.height; row+=2)
        {
            let posX = col;
            let posY = row;
            let c = img.get(posX, posY);
            push();
            translate(posX, posY);
            rotate(radians(random(360)));
            noFill();
            stroke(color(c));
            strokeWeight(random(9));
            point(posX, posY);
            strokeWeight(random(8));

            rect(col, row, 10, 5);
            //curve(x1, y1, z1, ... x4, y4, z4)
            curve(posX, posY, 
                sin(posX) * random(60), 
                cos(posY) * sin(posX) * random(90),
                random(10), random(80), 
                cos(posY) *sin(posX) * random(140),
                cos(posY * sin(posX) *50));
            pop();
        }
    }
}

function keyPressed()
{
    if (key === 's')
    {
        saveCanvas('portrait.jpg');
    }
}

function draw()
{
    image(cat, 200, 200);
}
