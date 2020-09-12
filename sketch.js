
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,dustbin1,dustbin2,dustbin3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball1 = new ball(200,250,20,20);
	dustbin1 = new dustbin(670,620,200,20);
	dustbin2 = new dustbin(780,580,20,100);
	dustbin3 = new dustbin(560,580,20,100);
	ground1 = new ground(400,650,800,20);
	
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball1.display();
  dustbin1.display();
  ground1.display(); 
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

  }

}


