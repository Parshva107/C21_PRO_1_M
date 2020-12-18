
function setup() {
  createCanvas(1400, 700);
  
}

function draw() {
  background('skyblue'); 
  if (keyDown("down")) {
   tree=new Tree(mouseX,mouseY);
  }
  
  
  drawSprites();
}

