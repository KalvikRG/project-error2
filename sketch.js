var a1 , a2 , a3 , a4 , a5 , a6 , a7 , a8 , a9 , a10 , a11 , a12 , a13 , a14 , a15 , a16 , a17 , a18 , bgImg , cakeImg ,cake , doraemon , doraemonImg ;

var score = 0;
var gamestate = "serve";
var obstaclesGroup;

var gameOver , gameOverImg , resart , resartImg , bomb , bombImg;
var nobita , nobitaImg;


function preload(){

a1 = loadImage("/assets/1.png")
a2 = loadImage("/assets/2.png")
a3 = loadImage("/assets/3.png")
a4 = loadImage("/assets/4.png")
a5 = loadImage("/assets/5.png")
a6 = loadImage("/assets/6.png")
a7 = loadImage("/assets/7.png")
a8 = loadImage("/assets/8.png")
a9 = loadImage("/assets/9.png")
a10 = loadImage("/assets/10.png")
a11 = loadImage("/assets/11.png")
a12 = loadImage("/assets/12.png")
a13 = loadImage("/assets/13.png")
a14 = loadImage("/assets/14.png")
a15 = loadImage("/assets/15.png")
a16 = loadImage("/assets/16.png")
a17 = loadImage("/assets/17.png")
a18 = loadImage("/assets/18.png")

bombImg = loadImage("/assets/Bomb.png")
gameOverImg = loadImage("/assets/gameover.png")
resartImg = loadImage("/assets/restart.png")

nobitaImg = loadImage("/assets/nobita.png")

bgImg = loadImage("/assets/bg.jpg")
cakeImg = loadImage("/assets/cake.png")
doraemonImg = loadImage("/assets/doraemon.png")

}

function setup() {
  createCanvas(500 , 600)
  obstaclesGroup = new Group();


  doraemon = createSprite(220,500, 300 ,560)
  doraemon.addImage("doraemon",doraemonImg);
  doraemon.setCollider('rectangle',0,0,300,560)
  doraemon.scale = 0.3;
   
  nobita = createSprite(300,500, 300 ,560)
  nobita.addImage(nobitaImg)
  nobita.scale = 0.4
  nobita.setCollider('rectangle',0,0,250,400)
  
  gameOver = createSprite(250,300,80,60)
  gameOver.addImage(gameOverImg)

  resart = createSprite(300,350,80,60)
  resart.addImage(resartImg)
  

  bomb = createSprite(width-300,height-95,20,30)
  bomb.addImage(bombImg)
  bomb.scale = 0.1


  // cake = createSprite(220,10, 300 ,560)
  // cake.addImage("cake",cakeImg);
  // cake.scale = 0.1;

}

function draw()
{


  background("yellow")
  textSize(20);
  fill("black")
  
  nobita.debug = true; 
  doraemon.debug = true;
  
  
  gameOver.visible = false;
  resart.visible = false;



   if(gamestate === "serve"){

     doraemon.x = 150;
     nobita.x = 350;
     
     function mousepressed(){

      if(mousePressedOver(doraemon)){
        gamestate = "doraemon"
      } 
    
      if(mousePressedOver(nobita)){
        gamestate = "nobita"
      } 
    
    }
     

     bomb.visible = false;
     gameOver.visible = false;
    resart.visible = false;

    mousepressed();
   }
  
   if(gamestate === "nobita")
   {

    text("Score: "+ score,30,50);
    
    if(obstaclesGroup.isTouching(nobita)){
       score += 5;

    }

    function moveplayer2(){


      if(keyDown("right_arrow"))
      {
          nobita.x += 15
      }
  
      if(keyDown("left_arrow"))
      {
          nobita.x -= 15
      }
      
     

    }

    gameOver.visible = false;
    resart.visible = false;
    doraemon.visible = false;

    spawnObstacles2();
    moveplayer2();

   }


  if(gamestate === "doraemon"){


    text("Score: "+ score,30,50);

    nobita.visible = false;
    function moveplayer1(){


      if(keyDown("right_arrow"))
      {
          doraemon.x += 15
      }
  
      if(keyDown("left_arrow"))
      {
          doraemon.x -= 15
      }
      
      

    }



    gameOver.visible = false;
    resart.visible = false;

    moveplayer1();
    spawnObstacles();
  
  }


  if(gamestate === "end"){

    gameOver.visible = false;
    resart.visible = false;
    doraemon.velocityY = 0;

    text("Score: "+ score,30,50);

  }  


  drawSprites();
}




function spawnObstacles() {



  if(frameCount % 60 === 0) {


    var object = createSprite(width-250,height-95,20,30);
    object.scale = 0.1;
    object.lifetime = 300;
    object.setCollider('circle',0,0,250)


    object.y = Math.round(random(6,1));
    object.x = Math.round(random(10,500));
  
    object.velocityY = 25;


    
     object.debug = true;  

     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: object.addImage(cakeImg);
               break;
        case 2: object.addImage(bombImg);
               break;
       default: break;

     }

    

  }

}

function spawnObstacles2() {



  if(frameCount % 60 === 0) {


    var object2 = createSprite(width-250,height-95,20,20);
    object2.scale = 0.4;
    object2.lifetime = 300;
    object2.setCollider('circle',0,0,50)


    object2.y = Math.round(random(6,1));
    object2.x = Math.round(random(10,500));
  
    object2.velocityY = 25;


    
     object2.debug = true;  

     var rand = Math.round(random(1,19));
     switch(rand) {
       case 1: object2.addImage(a1);
               break;
       case 2: object2.addImage(a2);
               break;
       case 3: object2.addImage(a3);
               break;
       case 4: object2.addImage(a4);
               break;
       case 5: object2.addImage(a5);
               break;
       case 6: object2.addImage(a6);
               break;
       case 7: object2.addImage(a7);
               break;
       case 8: object2.addImage(a8);
               break;
       case 9: object2.addImage(a9);
               break;
       case 10: object2.addImage(a10);
               break;
       case 11: object2.addImage(a11);
               break;
       case 12: object2.addImage(a12);
               break;
       case 13: object2.addImage(a13);
               break;
       case 14: object2.addImage(a14);
               break;
       case 15: object2.addImage(a15);
               break;
       case 16: object2.addImage(a16);
               break;
       case 17: object2.addImage(a17);
               break;
       case 18: object2.addImage(a18);
               break;  
       case 19: object2.addImage(bombImg);
               break;             
       default: break;

     }

     obstaclesGroup.add(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18)

  }

}
   

