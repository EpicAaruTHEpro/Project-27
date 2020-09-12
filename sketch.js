// creates the engine, world, bodies, body, and the constraints
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

// creates setup function
function setup() {
	// creates canvas
	createCanvas(800, 700);

	// creates engine and world inside it
	engine = Engine.create();
	world = engine.world;

	// Create the Bodies Here.
	roof = new Roof(400, 200, 200, 30);
	bobObject1 = new Bob(320,400);
	bobObject2 = new Bob(360,400);
	bobObject3 = new Bob(400,400);
	bobObject4 = new Bob(440,400);
	bobObject5 = new Bob(480,400);
	rope1 = new Rope(bobObject1.body, roof.body, -80, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -40, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 40, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 80, 0);

	// runs engine
	Engine.run(engine);
  
}

// draw function where everything is displayed
function draw() {
	// colors background white
	background(255);

	// displays the objects
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
}

// function that applies force to the bob object if up arrow key is pressed
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-100, y:200});
	}
}

