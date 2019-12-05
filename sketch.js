//The setup function only happens once
var flying=20
let x = 200;
let y = 200;
let extraCanvas;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  extraCanvas = createGraphics(500, 500);
  extraCanvas.clear();
	background(188,143,143);
}

//The draw function happens over and over again
function draw() {
  
  stroke(255,255,255) // an RGB color for the circle's border
  fill(248,248,255,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX, mouseY,flying,flying); // center of canvas, 20px dia
  fill(0,0,0)
  textSize(25)
  textFont("Times New Roman")
  text("stay beautiful", width/3, height/3);
}

function mousePressed(){
	flying=flying+5

  image(extraCanvas, 0, 0);
  fill(211, 211, 211);
  stroke(211);
  rectMode(CENTER);
  rect(x, y, 20, 20)
}