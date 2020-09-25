const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1x1, box1x2, box2x1, box2x2, box3x1;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1x1 = new Box(700,320,70,70);
    box1x2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    
    log1 = new Log(810, 260, 300, PI/2);

    box2x1 = new Box(700,240,70,70);
    box2x2 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    
    log2 = new Log(810, 180, 300, PI/2);

    box3x1 = new Box(810, 160, 70, 70);

    log3 = new Log(870, 120, 150, -PI/7);
    log4 = new Log(760, 120, 150, PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1x1.display();
    box1x2.display();
    ground.display();
    pig1.display();
    log1.display();

    box2x1.display();
    box2x2.display();
    pig2.display();
    log2.display();

    box3x1.display();
    log3.display();
    log4.display();

    bird.display();
}