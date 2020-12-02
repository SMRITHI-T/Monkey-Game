
var monkey , monkey_running;
var banana ,bananaImage;
var bananaGroup; 
var FoodGroup, obstacleGroup;
var score
var stone, stoneImage;
var stoneGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey=createSprite(200,200,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(250,250,500,10);
  ground.velocityX=-3; 
}


function draw() {
  background("white");
  drawSprites();
  if(keyDown("space")){
     monkey.velocityY=-12
     }
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if(ground.x>0){
    ground.x=250;
  }
  text("survival time:0",350,50);
  food();
  obstacle();
}
function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(200,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
}
}
function obstacle(){
  if (frameCount % 100 === 0) {
     stone = createSprite(500,350,40,10);
    stone.y=ground.y-10;
    stone.addImage(stoneImage);
    stone.scale = 0.1;
    stone.velocityX = -3;
}
}




