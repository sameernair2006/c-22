const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld,ball,ground;

function setup() {
  
  createCanvas(400,400);
 
  myEngine = Engine.create();

  myWorld = myEngine.world;

  console.log(myWorld);

  var ground_option = {

    isStatic : true

  }

  ground = Bodies.rectangle(200,390,50,50,ground_option);

  World.add(myWorld,ground);

  var ball_options = {

    restitution : 1

  }

  ball = Bodies.circle(200,200,20,ball_options);

  World.add(myWorld,ball);

}

function draw() {

  background(0);  

  Engine.update(myEngine);

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);

  ellipse(ball.position.x , ball.position.y , 20 ,20 );

}