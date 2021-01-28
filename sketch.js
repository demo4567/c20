var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  b= createSprite(400, 200, 40,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  a.x=World.mouseX;
  console.log(a.x-b.x);
  console.log(a.width/2+b.width/2)
  if(a.x-b.x <46 && b.x-a.x<46){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }

}