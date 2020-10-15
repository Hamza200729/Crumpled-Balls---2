
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,rope1;
var rope2,rope3,rope4,rope5;
var roof2,roof3,roof4,roof5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,250,30);
	bobObject2 = new Bob(250,250,30);
	bobObject3 = new Bob(300,250,30);
  bobObject4 = new Bob(350,250,30);
  bobObject5 = new Bob(400,250,30);
	roof1 = new Roof(200,180,20,30);
  rope2 = new Rope(bobObject2.body,roof1.body);
  //rope3 = new Rope(bobObject3.body,roof2.body);
  rope4 = new Rope(bobObject4.body,roof3.body);
  rope5 = new Rope(bobObject5.body,roof4.body);
  rope1 = new Rope(bobObject1.body,roof5.body);
  
  roof2 = new Roof(250,180,20,30);
  roof3 = new Roof(300,180,20,30);
  roof4 = new Roof(350,180,20,30);
  roof5 = new Roof(400,180,20,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  drawSprites();
 
}



