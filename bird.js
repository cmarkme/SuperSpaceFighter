function Bird() {
	this.score=0;
	
	
	this.update=function()
	{
		if(y<mouseY)
		{
			y=y+(mouseY-y);
		}
		if(y>mouseY)
		{
			y=y-(y-mouseY);
		}
	}
	
	
	
	
	
	
	this.show=function(){
	//background(0,0,0); 

	fill(255);
	
	ellipse(x,y,32,32);	
	}
	this.Score=function(scored)
	{
		if(scored)
		{
			this.score++;
		}
	}
	
	
}