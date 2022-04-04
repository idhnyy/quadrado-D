var square;


function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,30,30);
  square.shapeColor = "DarkBlue";
}

function draw() 
{
  background("Purple");
  if(keyIsDown(DOWN_ARROW)){
    square.position.y += 15;
  }
  if(keyIsDown(UP_ARROW)){
    square.position.y -= 15;
  }
  if(keyIsDown(LEFT_ARROW)){
    square.position.x -= 15;
  }
  if(keyIsDown(RIGHT_ARROW)){
    square.position.x += 15;
  }
  
  drawSprites(); 


}




