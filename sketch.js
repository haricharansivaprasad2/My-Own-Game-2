var background1, bg;
var ground;
var spaceBall, sphere;
var stars, starsImg;

function preload(){
  bg = loadImage("backgr.jpg");
  sphere = loadImage("spere.png");
  starsImg = loadImage("stars.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  background1.addImage(bg);
  background1.scale = 1.5;
  background1.velocityX = -3;

  ground = createSprite(width/2,height-50,width*2,20);
  ground.shapeColor = "brown";
  ground.velocityX = -3;

  spaceBall = createSprite(width/2-200,height-90,30,20);
  spaceBall.addImage(sphere);
  spaceBall.scale = 0.1;
}

function draw() {
  background(51);
  if(background1.x < 80){
    background1.x = width/2;
  }

  if(ground.x < 0){
    ground.x= width/2;
  }

  if(keyDown("space") && spaceBall.y > height-200){
    spaceBall.velocityY = -7;
  }

  spawnStars();

  spaceBall.velocityY+= 0.5;
  spaceBall.collide(ground);

 drawSprites();
}

function spawnStars(){
  if(frameCount%60 === 0){
    stars = createSprite(width/2+200,0,30,20);
    stars.x = Math.round(random(50,width-50));
    stars.velocityY = 2;
    stars.addImage(starsImg);
    stars.scale = 0.25;
  }
}





