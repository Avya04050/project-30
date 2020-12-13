const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var polygon;
var slingshot;
function preload(){
    polygon_img= loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(800, 300, 200, 20);
    ground = new Ground(600, 390, 1200, 20);

    block1 = new Box2(800, 270, 30, 40);
    block2 = new Box2(830, 270, 30, 40);
    block3 = new Box2(860, 270, 30, 40);
    block4 = new Box2(770, 270, 30, 40);
    block5 = new Box2(740, 270, 30, 40);
    block6 = new Box2(890, 270, 30, 40);
    block7 = new Box2(710, 270, 30, 40);
    block8 = new Box(800, 240, 30, 40);
    block9 = new Box(830, 240, 30, 40);
    block10 = new Box(770, 240, 30, 40);
    block11= new Box(860, 240, 30, 40);
    block12= new Box(740, 240, 30, 40);
    block13= new Box2(800, 200, 30, 40);
    block14= new Box2(830, 200, 30, 40);
    block15= new Box2(770, 200, 30, 40);
    block16= new Box(800, 160, 30, 40);

    polygon = new Polygon(50, 200, 30)

    slingshot= new SlingShot(polygon.body, {x:200, y:100});
}

function draw(){
    background(20, 125, 125);
    Engine.update(engine);
    stand.display();
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();
    polygon.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200 , y: 100}); 
        slingshot.reattach(polygon.body); 
    }
}