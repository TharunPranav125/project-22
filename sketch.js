const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4, ball5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic : true			
	}

	var ball_options = {
	   restitution : 1.4
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    ball1 = Bodies.circle(270,600,25,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(325,600,25,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(390,600,20,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(445,600,20,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(500,600,20,ball_options);
    World.add(world,ball5);

	pendulum = Matter.Constraint.create ({
       pointA : {x : 290,y : 100},
	   bodyB : ball1,
	   length : 270,
	   stiffness : 5
	})
    World.add(world,pendulum);

	pendulum1 = Matter.Constraint.create ({
		pointA : {x : 345,y : 100},
		bodyB : ball2,
		length : 270,
		stiffness : 5
    })
	World.add(world,pendulum1);

	pendulum2 = Matter.Constraint.create ({
		pointA : {x : 400,y : 100},
		bodyB : ball3,
		length : 270,
		stiffness : 5
    })
    World.add(world,pendulum2);

	pendulum3 = Matter.Constraint.create ({
		pointA : {x : 455,y : 100},
		bodyB : ball4,
		length : 270,
		stiffness : 5
    })
    World.add(world,pendulum3);

	pendulum4 = Matter.Constraint.create ({
		pointA : {x : 510,y : 100},
		bodyB : ball5,
		length : 270,
		stiffness : 5
    })
    World.add(world,pendulum4);

	Engine.run(engine);
	
  
}

function draw() {
   Engine.update(engine);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(pendulum.pointA.x,pendulum.pointA.y,ball1.position.x,ball1.position.y);
  line(pendulum1.pointA.x,pendulum1.pointA.y,ball2.position.x,ball2.position.y);
  line(pendulum2.pointA.x,pendulum2.pointA.y,ball3.position.x,ball3.position.y);
  line(pendulum3.pointA.x,pendulum3.pointA.y,ball4.position.x,ball4.position.y);
  line(pendulum4.pointA.x,pendulum4.pointA.y,ball5.position.x,ball5.position.y);
  pop();

  
  ellipse(ball1.position.x,ball1.position.y,25);
  ellipse(ball2.position.x,ball2.position.y,25);
  ellipse(ball3.position.x,ball3.position.y,25);
  ellipse(ball4.position.x,ball4.position.y,25);
  ellipse(ball5.position.x,ball5.position.y,25);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball1,{x : 0,y : 0},{x : -0.1,y : 0});
	}
  }
