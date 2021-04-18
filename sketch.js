
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1
var bob2
var bob3
var bob4
var bob5
var bobdiameter=30
var roof
var rope1
var rope2
var rope3
var rope4
var rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1=new Bob(width/2, height/4+100,bobdiameter);
	bob2 = new Bob(width/2-bobdiameter*2, height/4+100,bobdiameter);
	bob3 = new Bob(width/2+bobdiameter*2, height/4+100,bobdiameter);
	bob4 = new Bob(width/2-bobdiameter*4, height/4+100,bobdiameter);
	bob5 = new Bob(width/2+bobdiameter*4, height/4+100,bobdiameter);
    roof=new Roof(400,height-390,width,height/10)

	rope1= new Rope (bob1.body,roof.body,0,0);
	rope2= new Rope(bob2.body,roof.body,-60,0);
	rope3 = new Rope(bob3.body,roof.body,60,0);
	rope4 = new Rope(bob4.body,roof.body,-120,0);
	rope5 = new Rope(bob5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	   if (keyCode === UP_ARROW){
		   Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-30,y:-35});
	   }
   }
   



