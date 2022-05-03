
//code from classroom example with some modifications and D. Schiffman tutorial on pixel arrays 11.3
var dots;

function preload() {
    dots = loadStrings('assets/myMovie.txt');
}

function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    dots = loadAnimation('assets/myMovie/dots01.png', 'assets/myMovie/dots17.png');
    

    // helper for writing color to array
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 4;
      image.pixels[index + 0] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    // this function draws random squares within squares on the canvas
    function drawShapes(number1, number2) {
      let startX = floor(random(number1-10)) + 100;
      let startY = floor(random(number2-20)) + 90;
      //console.log(startX);
      // draw shapes
      for (x = startX; x < startX + 100; x++) {
        for (y = startY; y < startY + 100; y++) {
          if (x > startX + 30 && x < startX + 50 && y > startY + 30 && y < startY + 50) {
            writeColor(img, x, y, 255, 255, 0, floor(random(255)));
          } else {
            writeColor(img, x, y, 100, 150, 230, floor(random(255)));
          }
        }
      }
    }
  
    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = x;
        let green = random(255);
        let blue = y;
        let alpha = 255;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 0, 0, 255, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 0, 0, 255, 255);
      }
      y--;
    }
  
    // draw left border
    for(x = 0; x < 5; x++)
    {
      for (y = 0; y < img.height; y++) 
      {
        writeColor(img, x, y, 0, 0, 255, 255);
      }
    }

    //draw right border
    x = img.width - 1;
    for(let i = 0; i < 5; i++)
    {
      for (y = 0; y < img.height; y++) 
      {
        writeColor(img, x, y, 0, 0, 255, 255);
      }
      x--;
    }

    // draw shapes - not sure why some are on/outside border - adjusted random numbers here
    for (var i = 0; i < 20; i++) {
      drawShapes(floor(random(width/2)+200), floor(random(height/2)+100));
    }
  
    img.updatePixels();
    image(img, 0, 0);
  }

  function draw() {
        animation(dots, width/2, height/2);
        //need to get entire animation sequence to run through each time
        labelName();
  }

function labelName()
{
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(139, 0, 139);
    //textFont(myFont);
    textSize(30);
    text("J T C", width-90, height-20);
}
