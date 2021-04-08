const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "SERVE1";
var black1, black2, black3, black4,black5, black6, black7, black8, black9;
    var white1, white2, white3, white4, white5, white6, white7, white8, white9;
    var red, striker; 
    var ground1, ground2, ground3, ground4; 
    var pocket1;

function preload() {
    backgroundImg = loadImage("sprites/board.jpg");
    pocket1 = loadImage("sprites/net.jpg")


}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
   world.gravity.y = 0;

    

    black1 = new Black(302,268, 15);
    black2 = new Black(330,313, 15);
    black3 = new Black(330,343, 15);
    black4 = new Black(330,253, 15);
    black5 = new Black(357,297, 15);
    black6 = new Black(274,253, 15);
    black7 = new Black(274,313, 15);
    black8 = new Black(274,343, 15);
    black9 = new Black(248,297, 15);

    white1 = new White(302,327,15);
    white2 = new White(302,357,15);
    white3 = new White(302,238,15);
    white4 = new White(330,283,15);
    white5 = new White(357,267,15);
    white6 = new White(357,327,15);
    white7 = new White(248,267,15);
    white8 = new White(274,283,15);
    white9 = new White(248,327,15);

    red = new Red(302,298,15);


    striker = new Striker(302, 520, 20)

    ground1 = new Ground(300,12,600,35)
    ground2 = new Ground(12,300,35,600)
    ground3 = new Ground(585,300,35,600)
    ground4 = new Ground(300,585,600,35)
    


    console.log(ground1);
    


   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

if(gameState === "SERVE2"){
 Matter.Body.setPosition(striker.body, {x:300, y: 65}) 
}
if(gameState==="SERVE1"){
//Matter.Body.setPosition(striker.body,{x:300, y:525})
    
}

image(pocket1, 34,33, 50,50);



black1.display();
black2.display();
black3.display();
black4.display();
black5.display();
black6.display();
black7.display();
black8.display();
black9.display();

white1.display();
white2.display();
white3.display();
white4.display();
white5.display();
white6.display();
white7.display();
white8.display();
white9.display();

red.display();
striker.display();
ground1.display();
ground2.display();
ground3.display();
ground4.display();


//striker.body.ignoreGravity = true;


text(mouseX+ "," + mouseY, mouseX,mouseY);
  


}

/*function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX, y: mouseY})
}*/

function keyPressed(){
    if(keyCode===UP_ARROW&&gameState==="SERVE1"){
       //striker.body.velocity.x = 0;
    //striker.body.velocity.y = -10;
     striker.body.speed = 10;
    console.log(striker.body)
       //Matter.Body.setAngularVelocity(striker.body,-3)
      Matter.Body.setStatic(striker.body, false)
       striker.body.position.y=striker.body.position.y-13   ;
        
    }
    //gameState="SERVE2";
}

function changePlayer(){

}