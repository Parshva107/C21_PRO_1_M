// Creating platform class, objects will be created according to posX.

class Tree {
    constructor(posX,posY) {
      this.width = 30;
      this.height = 100;
      this.x = posX;
      this.y = posY;  
      this.stem=createSprite(this.x, this.y , this.width, this.height);
      this.stem.shapeColor="brown";
      this.leaf=createSprite(this.x, this.y-90 , this.width+50, this.height-100);
      this.leaf.shapeColor="green";
    }
  
  
  }
  
  