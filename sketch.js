// Namespacing- we provide alias/other name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(300, 400, 800, 20, ground_options)
  
  World.add(world, ground);

  console.log(ground.position.x);

  ball_options ={
    restitution: 1
  }

  ball = Bodies.circle(400, 200, 30, ball_options);
  
  World.add(world, ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30,30);

}