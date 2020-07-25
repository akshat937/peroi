var paperImg , dustbinImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	img = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,900,20);
	ball = new Paper(100,430,70);
	box1 = new Dustbin(650,675,140,10);
	box2 = new Dustbin(570,630,20,140);
	box3 = new Dustbin(730,630,20,140);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.display();
  box2.display();
  box3.display();
  box1.display();
  ground.display();
  ground.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
	}
}


