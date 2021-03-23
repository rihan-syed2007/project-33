var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle;

var particles = [particle];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

var score =0;
var count=0;

var attempts = 5;

var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,740,1000,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20)
 text("Score :"+score,20,30);
 text("ATTEMPTS :"+attempts,20,60);
 text("SCORE MORE THAN 2100 TO WIN",400,30)
 text("500",25,525);
 text("500",105,525);
 text("500",185,525);
 text("500",265,525);
 text("100",345,525);
 text("100",425,525);
 text("100",505,525);
 text("200",585,525);
 text("200",665,525);
 text("200",745,525);

  Engine.update(engine);
 
  ground.display();
 
  if(gameState == "END"){

    background("red");
    fill("black")
    textSize(100)
   text("GAMEOVER",100,200);

  }
if (score>2100){
  background("blue");
  fill("black")
  textSize(100)
 text("YOU WIN",100,200);
}

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null){

   particle.display();
   
    if(particle.body.position.y>700){
     
      if(particle.body.position.x<300  && particle.body.position.x>0){

        score=score+500;
        attempts=attempts-1
        particle=null;
        if(count>=5){
        gameState="END";
        }
      }
 else if(particle.body.position.x<600 && particle.body.position.x>301){

        score=score+100;
        attempts=attempts-1;
        particle=null;
        if(count>=5){
          gameState="END";
          }
      }
 else if(particle.body.position.x<800 && particle.body.position.x>601){

        score=score+200;
        attempts=attempts-1;
        particle=null;
        if(count>=5){
          gameState="END";
          }
      }
   else   if(particle.body.position.x>800){

        score=score+0;
        attempts=attempts-1
        particle=null;
        if(count>=5){
        gameState="END";
        }
      }
      else   if(particle.body.position.x<0){

        score=score+0;
        attempts=attempts-1
        particle=null;
        if(count>=5){
        gameState="END";
        }
      }
         }
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

  if(gameState!= "END"){
    count++
    particle=new Particle(mouseX,50,10,10)
  }
}