
//code from classroom example and D. Schiffman tutorial on pixel arrays 11.3

function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    //background(0);

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
    // change size and colors since I am not sure about changing shape
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



//Info from Daniel Shiffman 11.3 tutorial for pixel Array in p5.js that put info in draw function instead of setup
/*

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);

}

function draw() {
  background(51);

  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = x;
      pixels[index+1] = random(255); 
      pixels[index+2] = y; 
      pixels[index+3] = 255;
      
    }
  }

  updatePixels();
}

*/