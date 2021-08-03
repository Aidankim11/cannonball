//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  //creating engine
  engine = Engine.create();
  //creating world inside engine
  world = engine.world;
  //creating objects using classes
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600, height - 80, width, 1);
  cannon=new Cannon(180,110,110,50,-PI/4)
  cannonball=new CannonBall(cannon.x,cannon.y)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);  

  tower.display();
  cannon.display()
  cannonball.display()
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    cannonball.fire()
  }
}





