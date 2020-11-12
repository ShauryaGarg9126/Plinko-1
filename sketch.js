
const Engine =Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;


var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight = 300;
var ground1;
var score=0;


function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	
	world = engine.world;	
  ground1 = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

	
	Engine.run(engine);
	
  
}


function draw() {
	
  rectMode(CENTER);
  background("GREY");

  ground1.display();

  for (var m =0;m<plinkos.length;m++){

    plinkos[m].display();
  }
 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
  for (var j =0;j<particles.length;j++){

    particles[j].display();
  }
  for (var k =0;k<divisions.length;k++){

    divisions[k].display();
  }
  



}