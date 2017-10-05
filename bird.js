function Bird() {
	this.score=0;
	
	
	
	
	
	
	this.show=function(){
	//background(0,0,0); 

	fill(255);
	ellipse(x,mouseY,32,32);	
	}
	this.Score=function(scored)
	{
		if(scored)
		{
			this.score++;
		}
	}
	
	
}