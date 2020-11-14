
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var bobDiameter;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(100,500,50);
	bobObject2=new Bob(200,500,50);
	bobObject3=new Bob(300,500,50);
	bobObject4=new Bob(400,500,50);
	bobObject5=new Bob(500,500,50);

	roofObject=new Roof(300,200,500,20);

	rope1=new Rope(bobObject1.body,roofObject.body,-200,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-100,0);
	rope3=new Rope(bobObject3.body,roofObject.body,0,0);
	rope4=new Rope(bobObject4.body,roofObject.body,100,0);
	rope5=new Rope(bobObject5.body,roofObject.body,200,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
 rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //Matter.Body.applyForce()
  //https://brm.io/matter-js/docs/classes/Body.html
  //crumpled ball up arrow function
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:-700});
  }
}
//if(bobObject4.isTouching(bobObject5){
	//Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:500,y:-700});
//}
//function keyPressed(){
	//if(bobObject1.isColliding){
		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:750,y:-700});
	//}
//





