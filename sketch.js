const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var ballImage, binImage

function preload(){
  binImage = loadImage("dustbin.png");

}
 

function setup() {
  createCanvas(1400,600);
  rectMode(CENTER);
  
  engine = Engine.create();
    
  world = engine.world;
  
  ground = new Ground(900,height,1800,50);

  body1 = new Box2(1200,555,250,30);
  

	body2 = new Box(1080,430,20,275);
  body3 = new Box(1320,430,20,275);
  
  ball = new Ball(100,250,70);


  launcher = new Launcher(ball.body, {x: 200, y: 200});

  
}

function draw() {
  background(200);  
  Engine.update(engine);
  launcher.view();
  ball.Display();
  ground.display();
  body1.Display();
  
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
 launcher.connect.bodyA = null;
  
}