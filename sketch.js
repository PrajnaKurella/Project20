var cat, mouse; 
var bgIMG, catImg2, catImg1, catImg3, catImg4, catRunning;  
var mouseImg1, mouseImg2, mouseImg3, mouseImg4; 

function preload() {
    //load the images here
    bgIMG = loadImage("images/garden.png"); 
    catImg2 = loadImage("images/cat2.png"); 
    catImg1 = loadImage("images/cat1.png");
    catImg3 = loadImage("images/cat3.png"); 
    catImg4 = loadImage("images/cat4.png"); 
    mouseImg1 = loadImage("images/mouse1.png"); 
    mouseImg2 = loadImage("images/mouse2.png"); 
    mouseImg3 = loadImage("images/mouse3.png"); 
    mouseImg4 = loadImage("images/mouse4.png"); 

    
}

function setup(){
 var canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600); 
    cat.addAnimation("cat1.png", catImg1); 
    cat.scale = 0.2; 

    mouse = createSprite(200, 600); 
    mouse.addAnimation("mouse1.png", mouseImg1); 
    mouse.scale = 0.15;

    //mouse = createSprite(300,700,20,20); 
    //mouse.shapeColor = "gray"; 
    //cat = createSprite(900,700,20,20); 
    //cat.shapeColor = "blue"; 
}

function draw() {

    background(bgIMG);
    //Write condition here to evalute if tom and jerry collide
    cat.velocityX=0;
    cat.addAnimation("cat4.png", catImg4); 
    cat.x =300; tom.scale=0.2; 
    cat.changeAnimation("cat4.png"); 
    mouse.addAnimation("mouse4.png", mouseImg3); 
    mouse.scale=0.15; 
    mouse.changeAnimation("mouse4.png");

    mouse.display(); 
    cat.display(); 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning"); 
  }
  if(keyCode === RIGHT_ARROW){
    mouse.velocityX = -5;
    mouse.addAnimation("mouse1.png", mouseImg1);
    mouse.changeAnimation("mouse1.png"); 
  }
}
