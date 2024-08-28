function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  stroke("rgb(10,10,10)");
  fill("rgb(255,252,252)8)");

  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
}