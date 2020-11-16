
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  
  //creating groups for balloons and arrows
  red_balloons_group = new Group();
  blue_balloons_group = new Group();
  green_balloons_group = new Group();
  pink_balloons_group = new Group();
  arrow_group = new Group();
 
  
}

function draw() {

  
   // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    } 
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
   
  
  
 //adding 1 to the score if the arrow_group touches the pink_balloons_group. Destroying the arrow_group and the pink_balloons_goup if the arrow touches the pink_balloons group
  if(arrow_group.isTouching(pink_balloons_group)){
    pink_balloons_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 1; 
  }
  
  
  //adding 2 to the score if the arrow_group touches the blue_balloons_group. Destroying the arrow_group and the blue_balloons_goup if the arrow touches the blue_balloons group
  if(arrow_group.isTouching(blue_balloons_group)){
    blue_balloons_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 2; 
  }
  
  
  //adding 3 to the score if the arrow_group touches the red_balloons_group. Destroying the arrow_group and the red_  balloons_group if the arrow touches the red_balloons_group
  if(arrow_group.isTouching(red_balloons_group)){
    red_balloons_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 3; 
  }
  
  
  //adding 4 to the score if the arrow_group touches the green_balloons_group. Destroying the arrow_group and the green_balloons_goup if the arrow touches the green_balloons group
  if(arrow_group.isTouching(green_balloons_group)){
    green_balloons_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 4; 
  }
  
  
  

  drawSprites();
   
    textSize(20);
    text("Score: "+ score, 500,40);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(35, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red_balloons_group.add(red);
  return red;
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(35, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue_balloons_group.add(blue);
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(35, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green_balloons_group.add(green);
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(35, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pink_balloons_group.add(pink);
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 420;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow);
  return arrow;
   
}
