
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin,ground;
function preload()
{
	
}

function setup() {    
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(40,40,20);
	dustbin=new Dustbin(1000,450);
	ground=new Ground(600,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  dustbin.display();
  ground.display();
  
 
}
function keyPressed(){
    if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}



