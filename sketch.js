
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,40)
	Engine.run(engine);
  
}


function draw() {
  background(150);
  Engine.update(engine)
  paper.display()
  
  drawSprites();
 
}



