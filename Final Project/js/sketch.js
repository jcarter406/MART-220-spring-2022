//my adaptations from code by Casey Conchinha p5js flow field and webcam youtu.be/watch?v=Cic5wEgr1fg   I made notes where changes made so original values can be seen.
       // He adapted code from https://editor.p5js.org/chesterdols/sketches/B12rzkBQx
       // and P5.js Code from Daniel Shiffman instructional <https://www.youtube.com/watch?v=BjoM9oKOAKY&t=542s>
//my notes:  remove particles code throughout after trying to make some changes.

let sclX = 16  //set scale - we used vScale before originals set at 20; 16 looks good for size of stroke
let sclY = 16;
let xvec, yvec;
//let particles = [];
let flowfield;

let cam;

function setup() {
       pixelDensity(1);  //played with this value original is 1
       colorMode(HSB);  //Change color mode to rgba? Will leave as HSB since my conversions didn't work well (made it grey tones) but make different palette
  
       createCanvas(displayWidth, displayHeight);  //1280 720 original settings. looks okay with new settings
       
       cam = createCapture(VIDEO);
       cam.size(width, height);
       cam.hide();

/*       for (let i = 0; i < 400; i++) {    //original is 500 - ALL PARTICLE CODE REMOVED
              particles[i] = new Particle();
       }
*/

}

function draw() { // Rotating Vectors - I relied heavily on original code for vectors and field flow coding

       image(cam, 0, 0, width, height);
       loadPixels();
       background(330, 60, 30);  // HSB hue saturation brightness.  check HSB info for correct settings. These are RGB
       FlowField();
    

/*       for (let k = 0; k < particles.length; k++) {
              particles[k].show();
              particles[k].update();
              particles[k].edge();
              particles[k].follow(flowfield);
       }
*/
}

function FlowField(){            //I did not alter much of the flowfield coding; altered a few features as noted below
       xvec = floor(width / sclX);
       yvec = floor(height / sclY);

       flowfield = new Array(xvec * yvec);
  
       for (let y = 0; y < height; y += sclY) {
              for (let x = 0; x < width; x += sclX) {
                
                    let vX = x / sclX;
                    let vY = y / sclY;

                    let i = (x + (y * width)) * 4;

                    let r = pixels[i+0];
                    let g = pixels[i+1];
                    let b = pixels[i+2];
                    //let a = pixels[i+3];   //transparency added but no discernible difference seen since this is HSB

                    let br = (r+b+g) / 765;    //br is brightness of averaged colors; denominator was 765 in original code. We used 3 with RGB average.
                    // br = map(br, 0, 1, 1, 0);    //part of original code that was turned off by author.  

                    let index = vX + (vY * xvec);  //is there an issue with using index as name of a var? Doesn't appear to be.
                     
                    
                 
                    //let vecDirect = noise(xNoise, yNoise, time)*2*(TWO_PI);  //this line was hidden by author
                  
                
                    let v0 = createVector(vX, vX);
                    //let v1 = createVector(vX * cos(br*TWO_PI), vX * sin(br*TWO_PI));  //this line was hidden in original code
                    let v1 = createVector(vX * cos(br*TWO_PI), vX * sin(br*TWO_PI));


                    let vecDirect = v0.angleBetween(v1);
                    // let vecDirect = br * 2 * (TWO_PI);     //this line was hidden in original code
                    let dir = p5.Vector.fromAngle(vecDirect);
                   
                    flowfield[index] = dir;
                    dir.setMag(3);  //try change magnitude original 3; no change seen so reset back to 3

            
                     //stroke(br*255, 255, 255);    //original code line - not consistent with HSB. Seems to show complements of original webcam video colors. Changes made less pleasing color combos. Tried to reset colors to video capture colors 
                                                 //Transparency not a factor in this code since strokes are in set locations with minimal overlap
                     stroke(360-(br*360), 70, 80);  //Tried flipping hue (didn't work) and adjusting S and B to get less jarring color brightness
                     strokeWeight(6);   //added this line to make strokes thicker and more painterly looking
            
                    push();
                    translate(x, y);
                    rotate(dir.heading());
                    line(0, 0, sclY*2, 16);  // original code was 0,0,sclY, 0 but I changed it to lengthen the lines.  //looked at using random values to vary lengths but got sloppy
                    pop();
              }
       }
}

/*            // Removed all original code with particles after playing with shapes, sizes, number, and color.  It was distracting visually
function Particle() {
       this.x = random(width);
       this.y = random(height);
       this.pos = createVector(this.x, this.y);
       this.vel = createVector(0, 0);
       this.acc = createVector(0, 0);
       this.r = 2.0;
       this.maxspeed = 3;  //original 5

       this.update = function() {
              this.pos.add(this.vel);
              this.vel.add(this.acc);
              this.acc.mult(0);
              this.vel.limit(this.maxspeed);
       }

       this.follow = function(vectors) { // flowfield vectors
              let x = floor(this.pos.x / sclX);
              let y = floor(this.pos.y / sclY);
              let index = x + y * xvec;
              let force = vectors[index];
              this.applyForce(force);
       }

       this.applyForce = function(force) {
              this.acc.add(force);
       }

       this.show = function() {
              fill(0, 0, 255);
              noStroke();
              ellipse(this.pos.x, this.pos.y, 8, 8);  //original size is 4x4
              //rect(this.pos.x, this.pos.y, 10, 10);  //not as attractive as ellipses
              //image('squirrel.png', 20, 20); //try to add an image
       }

       this.edge = function() {
              if (this.pos.x < -this.r) this.pos.x = width + this.r;
              if (this.pos.y < -this.r) this.pos.y = height + this.r;
              if (this.pos.x > width + this.r) this.pos.x = -this.r;
              if (this.pos.y > height + this.r) this.pos.y = -this.r;
       }
}
*/

/*            // This original code seemed redundant so I hid it
function windowResized() {
       resizeCanvas(windowWidth, windowHeight);
}
*/