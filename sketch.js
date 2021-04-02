const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1;
var polygon;
var slingShot;

function preload(){
polygonImg= loadImage("sprites/polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    ground = new Ground(150,260,20,10);
    // level one
    block1 = new Block (130,275,30,40);
    block2 = new Block (160,275,30,40);
    block3 = new Block (190,275,30,40);
    block4 = new Block (210,275,30,40);
    block5 = new Block (240,275,30,40);
    block6 = new Block (270,275,30,40);
    block7 = new block (300,275,30,40);
    //level two
    block8 = new Block (330,235,30,40);
    block9 = new Block (360,235,30,40);
    block10 = new Block (390,235,30,40);
    block11 = new Block (420,235,30,40);
    block12 = new Block (450,235,30,40);
    //level three
    block13 = new Block (360,195,30,40);
    block14 = new Block (390,195,30,40);
    block15 = new Block (420,195,30,40);
    //top
    block16 = new Block (390,155,30,40);
    //pyramid two

    polygon = Bodies.circle (50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw(){
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
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
    ground.display();
    slingshot.display();



}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}