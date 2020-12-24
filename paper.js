class Paper
{
    constructor (x,y,radius)
    {
        var options = 
        {
          isStatic:false, 
          friction:0.5,
          density:1.2,
          restitution : 0.3
        }

    this.body = Bodies.circle(x,y,radius,options);

    World.add(world,this.body);
    this.width =30;
    this.height=30;
    }
display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode (CENTER);
    fill("brown");
    rect(0,0,this.width,this.height);
    pop();
}

}