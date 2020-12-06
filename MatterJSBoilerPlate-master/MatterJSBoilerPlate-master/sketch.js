const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var dustbin1, paperObject,groundObject;

var world;

function preload()
{
	
}

function setup() {

	createCanvas(1250, 650);

	rectMode(CENTER);


	engine = Engine.create();

	world = engine.world;
	
	paperObject=new paper(200,450,70);

	groundObject=new ground(width/2,620,width,20);

	dustbin1=new dustbin(1200,510,20,200);

	dustbin2=new dustbin(1000,510,20,200);

	dustbin3=new dustbin(1100,600,200,20);
	

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background("blue");
 
  
  paperObject.display();
  
  groundObject.display();

  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

}

function keyPressed() {
	
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}


