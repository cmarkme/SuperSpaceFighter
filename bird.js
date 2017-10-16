function Bird() {
	this.score=0;
	
	
	this.update=function()
	{
		if(y<mouseY)
		{
			y=y+(mouseY-y)*0.1;
		}
		if(y>mouseY)
		{
			y=y-(y-mouseY)*0.1;
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