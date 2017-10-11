
function Enemy(x,y)
{
	this.fc=255;
	this.sc=100;
	this.iiix=x;
	this.iiiy=y;
	this.r1=52;
	this.r2=100;
	this.iiixRnd=random(5);
	this.step=0;
	
	this.show=function(hit)
	{
		if(this.iiixRnd<0)
		{
			this.iiixRnd=random(20);
			this.step=100;
		}
		if(this.step<1)
		{
			this.iiix-=(this.iiixRnd=this.iiixRnd-1);
		}
		else
		{
			this.step=this.step-1;
			this.iiix=this.iiix-0.5;
		}
		
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