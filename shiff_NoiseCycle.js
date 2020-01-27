var noiseMax = 6;
let zoff = 0;

function setup() {
createCanvas(600, 600);
background(0);
strokeWeight(0.5);
}


function draw() {
  stroke(255);
  //fill(0);
  noFill();
  if(mouseIsPressed) {
   fill(0);
   translate (mouseX, mouseY);
   beginShape();
    for (let a = 0; a < TWO_PI; a+= 0.4) {
      let xoff = map (cos(a), -1, 1, 0, noiseMax);
      let yoff = map (sin(a), -1, 1, 0, noiseMax);
      let r= map(noise(xoff, yoff, zoff), 0, 1, 10, 70);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x,y);
      }
     endShape(CLOSE);
     zoff += 0.01;
    }
}
