const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = [];
var maxDrops = 100;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
   createCanvas(500,800);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);
   //drop = new Drop(100,30,20);
   if(frameCount%100===0){
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400),random(0,400)));
        }
    }

}

function draw(){
   background("black");
   Engine.update(engine);
   
    umbrella.display();
    //drop.display();
    for(var i = 0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }
    if(frameCount%40===0){
        thunder = createSprite(200,50,10,10);
        thunder.scale = 0.5;
        rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder1);
                    break;
            case 2: thunder.addImage(thunder2);
                    break;    
            case 3: thunder.addImage(thunder3);
                    break;
            case 4: thunder.addImage(thunder4);
                    break;
                    default:break;
        }
        thunder.lifetime = 30;
    }

    
    drawSprites();

}   
