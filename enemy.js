
function Enemy(x,y)
{
	this.fc=255;
	this.sc=100;
	this.iiix=x;
	this.iiiy=y;
	this.r1=52;
	this.r2=100;
	
	this.show=function(hit)
	{
		this.iiix-=random(2);
		fill(this.fc,this.sc);
		ellipse(this.iiix,this.iiiy,this.r1,this.r2);
		if(hit===1)
		{
			this.fc=0;
			this.sc=0;
		}
	}
	//this.spawn=function()
}