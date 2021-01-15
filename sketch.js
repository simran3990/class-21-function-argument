var fixedRect, movingRect;
var newrect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  newrect = createSprite(100,100,50,50);
  newrect.shapeColor = "green";
  newrect.velocityY= +5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0);  

  bouncemaster(movingRect,newrect);
  drawSprites();
}



