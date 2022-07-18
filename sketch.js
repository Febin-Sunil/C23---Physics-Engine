//Nickname - Name aliaising
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEngine,myWorld;

var ground,ball, ball2;

function setup() {
  createCanvas(400,400);

  //creating our own engine and adding it to our own world;
  myEngine=Engine.create();
  myWorld=myEngine.world;

  //options for ground
   var groundOptions={
     //not fall down
    isStatic: true,
    density:1
   }

  //creating Physics Engine Body
  ground=Bodies.rectangle(200,370,400,20,groundOptions);
  World.add(myWorld,ground);

  console.log(ground);

  var ballOptions={
    restitution: 1
  }
  ball=Bodies.circle(200,200,20, ballOptions);
  World.add(myWorld,ball); 

  ball2 = Bodies.circle(150,200,45,ballOptions);
  World.add(myWorld,ball2);

  
  
}


function draw() 
{
  background(51);
  //updating the engine
  Engine.update(myEngine);
 
  //Drawing ground
  rectMode(CENTER)
  ellipseMode(RADIUS)

  fill("green")
  
  rect(ground.position.x,ground.position.y,400,20);
  
  fill("red")
  
  ellipse(ball.position.x, ball.position.y, 20,20);
  
  fill("pink")
  ellipse(ball2.position.x, ball2.position.y,45,45);
  
}

