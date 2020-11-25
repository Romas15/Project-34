const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ball, rope;

function setup() {
  createCanvas(800, 1000);
  engine = Engine.create();
  world = engine.world;

  // let canvasmouse = Mouse.create(canvas.elt);
  // canvasmouse.pixelRatio = pixelDensity();

  // let options = { mouse: canvasmouse };

  // mConstraint = MouseConstraint.create(engine, options);

  // World.add(world, mcConstraint);

  pendulum1 = new Pendulum(265, 100, 0);
  pendulum2 = new Pendulum(145, 100, 0);
  pendulum3 = new Pendulum(205, 100, 0);
  pendulum4 = new Pendulum(325, 100, 0);
  pendulum5 = new Pendulum(385, 100, 0);

  ground = new Ground(230, 60, 1000, 10);

  rope = new Sling(pendulum1.body, { x: 265, y: 100 });
  rope2 = new Sling(pendulum2.body, { x: 145, y: 100 });
  rope3 = new Sling(pendulum3.body, { x: 205, y: 100 });
  rope4 = new Sling(pendulum4.body, { x: 325, y: 100 });
  rope5 = new Sling(pendulum5.body, { x: 385, y: 100 });
}

function draw() {
  background(90);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ground.display();

  console.log(pendulum2.body.position.y);
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum2.body, { x: mouseX, y: mouseY });
}
