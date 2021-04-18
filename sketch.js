const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground;
var engine,world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,
block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var sling;
var hex;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //creates the ground and stands
    ground = new Ground(600,height,1200,30);
    stand1 = new Ground(450,280,300,15);
    stand2 = new Ground(850,180,200,15);
    
    //layer1 of tower1
    block1 = new Block(350,245,30,40);
    block2 = new Block(380,245,30,40);
    block3 = new Block(410,245,30,40);
    block4 = new Block(440,245,30,40);
    block5 = new Block(470,245,30,40);
    block6 = new Block(500,245,30,40);
    block7 = new Block(530,245,30,40);
    
    //layer2 of tower1
    block8 = new Block(380,205,30,40);
    block9 = new Block(410,205,30,40);
    block10 = new Block(440,205,30,40);
    block11 = new Block(470,205,30,40);
    block12 = new Block(500,205,30,40);

    //layer3 of tower1
    block13 = new Block(410,165,30,40);
    block14 = new Block(440,165,30,40);
    block15 = new Block(470,165,30,40);

    //layer4 of tower1
    block16 = new Block(440,125,30,40);

    //layer1 of tower2
    block17 = new Block (780,150,30,40);
    block18 = new Block (810,150,30,40);
    block19 = new Block (840,150,30,40);
    block20 = new Block (870,150,30,40);
    block21 = new Block (900,150,30,40);

    //layer2 of tower2
    block22 = new Block (810,110,30,40);
    block23 = new Block (840,110,30,40);
    block24 = new Block (870,110,30,40);

    //layer3 of tower2
    block25 = new Block(840,70,30,40);

    //creates the hexagon
    hex = new Hex(0,0,40,40)

    //creates the sling
    sling =new SlingShot(hex.body,{x: 100 , y: 200});

}

function draw(){
    background(60,46,46);
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block3.display();
    block2.display();
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

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();
    
    block25.display();

    hex.display();
    sling.display();
}
//Function is to help us move the hexagon
function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX, y: mouseY});
}
//Function is to help us release the hexagon
function mouseReleased(){
    sling.fly();
}
//Function is to help us to bring the hex back to the sling
function keyPressed(){
    if(keyCode === 32){
        sling.attach(hex.body);
    }
}