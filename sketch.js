const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var p1;
var log;
var b1;

var bgImg

function preload(){
bgImg = loadImage("sprites/bg.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    p1=new Pig(810,350)
    log=new Log(810,260,300,PI/2)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    p2=new Pig(810,220)
    log1=new Log(810,180,300,PI/2)
    box5 = new Box(810,160,70,70);
    log2=new Log(760,120,150,PI/7)
    log3=new Log(870,120,150,PI/-7)
    b1=new Bird(100,100)
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    p1.display();
    log.display()
    box3.display();
    box4.display();
    p2.display();
    log1.display();
    box5.display();
    log2.display();
    log3.display();
    b1.display()
}