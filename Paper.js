class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:100,
			density:1.2

			
			}
		this.r=r;
		
		
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
			
		var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
	 
		fill("aqua")
		
		ellipse(0,0,2*this.r, 2*this.r)
		
		pop()
	}

}