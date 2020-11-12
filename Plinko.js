class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=15;
		
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			
var angle = this.body.angle;
push()
			translate(pos.x, pos.y);
			
			rotate(angle);
			fill(255,0,255);
			ellipseMode(RADIUS)
			
			ellipse(0,0,this.r,this.r);
		
			pop()
			
	}

}
