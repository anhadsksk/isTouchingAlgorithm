var FixedRect, MovingRect;

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(300, 200, 100, 50);
  FixedRect.shapeColor = "blue";
  MovingRect = createSprite(100, 200, 120, 80);
  MovingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);

  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;  
  
  if (FixedRect.x - MovingRect.x <= FixedRect.width/2 + MovingRect.width / 2 &&
     MovingRect.x - FixedRect.x <= FixedRect.width/2 + MovingRect.width / 2 &&
     FixedRect.y - MovingRect.y <= FixedRect.height/2 + MovingRect.height / 2 &&
     MovingRect.y - FixedRect.y <= FixedRect.height/2 + MovingRect.height / 2   ) { 

     FixedRect.shapeColor = "yellow";
     MovingRect.shapeColor = "yellow";
     } else {
      FixedRect.shapeColor = "blue";
      MovingRect.shapeColor = "blue";
    }
    
  drawSprites();
}