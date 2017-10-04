
function Enemy(x,y)
{
	this.fc=255;
	this.sc=100;
	this.iiix=x;
	this.iiiy=y;
	
	this.show=function(hit)
	{
		
		fill(this.fc,this.sc);
		ellipse(this.iiix,this.iiiy,32,10);
		if(hit===1)
		{
			this.fc=0;
			this.sc=0;
		}
	}
}