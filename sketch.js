var sea, seaImg
var ship, shipImg
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-1.png", "ship-2.png", "ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.25;
  sea.velocityX = -100;

  ship = createSprite(200,200);
  ship.addAnimation("MovingShip", shipImg);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = sea.width/8;
  }
  drawSprites();
}