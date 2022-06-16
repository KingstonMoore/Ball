const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  g1 = new Ground(200, 390, 400, 20)
  g2 = new Ground(200, 10, 400, 20)
  g3 = new Ground(10, 200, 20, 400)
  g4 = new Ground(390, 200, 20, 400)

  b1 = new Ball(250, 175, 20)

  bttn1 = createImg("push.png")
  bttn1.position(320, 100)
  bttn1.size(50,50)
  bttn1.mouseClicked(function(){
    Matter.Body.applyForce(b1.body, b1.body.position, {x:-0.05,y:-0.05})
  })
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue")
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  b1.display()
}

