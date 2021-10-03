
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(100,100,30,30,1,4)
  box2 = new Box(150,150,50,50,1,4)
  box3 = new Box(200,200,80,80,1,4)
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.bounce();

  box2.show();
  box2.move();
  box2.bounce();

  box3.show();
  box3.move();
  box3.bounce();

}

