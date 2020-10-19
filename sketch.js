
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score

  var survivaltime=0;

  var banana,bananaImage;
  var rock,rockImage;

  var foodGroup;
  var obstacleGroup;

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
    rockImage=loadImage("obstacle.png");

  }



  function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);  





  }


  function draw() {
  food();
  foodGroup = new Group();
    
  obstacle();
  obstaclesGroup=new Group();  
    
    
  background("white")  
  stroke("white") ;
  textSize(20);
  fill("white");
  text("Score"+score,500,50);

  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+survivaltime,100,50) ; 

  if(keyDown("space")){
    monkey.velocityY=-4;
  }
  monkey.velocityY=monkey.velocityY+0.8;  

  





  if(ground.x<0){
    ground.x=ground.width/2;
  }    
  monkey.collide(ground);  




  drawSprites();  
  }

  function food(){
  if(frameCount%80==0){

  banana=createSprite(600,250,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;  

  banana.y=Math.round(random(120,200))  

  banana.depth = monkey.depth
  monkey.depth = monkey.depth + 1; 

  banana.lifetime = 100;  
  foodGroup.add(banana);    
  }
  }

function obstacle(){
  if(frameCount%80==0){

  rock=createSprite(280,313,10,10);
  rock.addImage(rockImage);
  rock.velocityX=-5;  
  rock.scale=0.2;
    
  rock.y=Math.round(random(280,310))    
  rock.lifeTime=100;
     

  
      
  }
  }


