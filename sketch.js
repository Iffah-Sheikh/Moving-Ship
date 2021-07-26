
var seaImg;
var shipImg, ship;
var sea;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0,400,400)
  sea.addImage(seaImg);

  sea.velocityX = -4;
  if(sea.x < 0) {
      sea.x = sea.width/2;
   }

  ship = createSprite(150,160,200,200);
  ship.scale = 0.25;
  ship.addAnimation("running", shipImg);
}

function draw() {
  background("blue");
  drawSprites();

  
}
