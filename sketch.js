//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;


function preload(){
  
  //loading animation for the monkey
  monkey_running =              loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading image for banana
  bananaImage = loadImage("banana.png");
  //loading image for obstacle
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  
  //crreating canvas space
  createCanvas(600,500);

  //creating monkey
   monkey = createSprite (300,387,30,30)
  //adding animation to monkey
  monkey.addAnimation("running",monkey_running);
  //scaling monkey
  monkey.scale = 0.12;
  
  //creating the ground
  ground = createSprite (300,430,620,10);
  //adding velocity to ground so it moves to the left
  ground.velocityX = -4;
  
  
  //creating the FoodGroup
  FoodGroup = createGroup();
  //creating the obstacles group
  obstacleGroup = createGroup();
  
  //making score equal to 0
  score =0;
}



function draw() {

  //making background white
  background("white");
  
  //making the ground have a scrolling affect
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
   //when space key is pressed, the monkey jumps
   if (keyDown ("space")&& monkey.y >= 300){
     monkey.velocityY = -5;
  }
   
  
  //giving the monkey gravity so it can come down after a jump
  if (monkey.y <= 90){
    monkey.velocityY = monkey.velocityY + 1;
  }
  
  //making monkey collide with ground
   monkey.collide (ground);
  
  //making the outline of text black
  stroke("black");
  //making the text size 20
  textSize(20);
  //making the colour of text black
  fill("black");
  //'score' value is frameCount divided by FrameRate which will be rounded up to the nearest integer
  score = Math.ceil(frameCount/getFrameRate());
  //writing 'Survival Time: ' and putting the value of score in
  text ("Survival Time: " +score,250,50);
  
  
  //displaying Food
  Food();
  
  //displaying Obstacles
  Obstacles();
  
  //drawing all sprites
  drawSprites();
  
}


function Food(){
  
  //if FrameCount is divisibly by 80 then...
  if (frameCount%80 === 0){
    
    //create banana sprite
    banana = createSprite (400,120,15,15);
    //banana will appear between 120y and 200y
    banana.y= Math.round(random(120,200));
    //add bananaImage to banana
    banana.addImage(bananaImage);
    //scale the banana
    banana.scale = 0.12;
    //give speed to banana so it moves to the left
    banana.velocityX = -3;
    //make the banana disappear after 300 frames
    banana.lifetime= 300;
    //adding banana to FoodGroup
    FoodGroup.add(banana);
    
  }
  
}


function Obstacles(){
  
  //if FrameCount is divisibly by 300 then..
  if (frameCount%300 === 0) { 
    
    //create obstacles sprite
    obstacles = createSprite (400,405,15,15);
    //add image to obstacles
    obstacles.addImage(obstacleImage);
    //scale obstacles 
    obstacles.scale = 0.1;
    //give obstacles lifetime so they disappear after 100 frames
    obstacles.lifetime= 100;
    //give speed to obstacles so they move towards the left
    obstacles.velocityX= -4;
    //add obstacles to obstaclesGroup
    obstacleGroup.add(obstacles);
    
  }
  
}





