//based on demo by weidi zhang youtube me04ZrTJqWA
// editor.p5js.org/weidi/sketches/vANCGnkoU

let img;
let posX, posY;
let cnv;
let c;


function preload()
{
    img = loadImage('./assets/road500x660.jpg');
}    


function setup()
{
    cnv = createCanvas(img.width, img.height);
    let newCanvasX = (windowWidth - img.width)/2;
    let newCanvasY = (windowHeight - img.height)/2;
    cnv.position(newCanvasX, newCanvasY);

    
    background('lightgrey');
    for (let gridX = 0; gridX < img.width; gridX += 2)
    {
        for (let gridY = 0; gridY < img.height; gridY += 2)
        {
            push();
            let tileX = 1;
            let tileY = 1;
            posX = tileX + gridX;
            posY = tileY + gridY;

            //add color?
            c = img.get(posX, posY);
            stroke(color(c));
            translate(posX, posY);  //always used with push and pop
            rotate(radians(random(360)));
            //nofill();
            strokeWeight(random(8));
            point(posX, posY);
            strokeWeight(random(9));
                //curve(x1, y1, z1, ... x4, y4, z4)
            curve(posX, posY, 
                sin(posX) * 60, 
                cos(posY) * sin(posX) * 40,
                0, 0, 
                cos(posY) *sin(posX) * random(140),
                cos(posY * sin(posX) *50));
            pop();
            }    
        }
    }

    /*function keyPressed()
    {
        if (key === 's')
        {
            saveCanvas('portrait.jpg');
        }
    } */
    

    