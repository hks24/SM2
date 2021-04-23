var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400,655,200,20);
	ground = new Ground(400,660,800,10);
	packageBody = new Package(width/2,200,20,20);

	Engine.run(engine)
}


function draw() {
  background(0);
  Engine.update(engine);

  drawSprites();
  
  box1.display();
  ground.display();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Body.setStatic(packageBody,false);
    
  }
}



