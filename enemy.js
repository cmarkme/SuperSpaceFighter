
function Enemy(x,y,z)
{
	this.fc=255;
	this.sc=100;
	this.iiix=x;
	this.iiiy=y;
	this.r1=52;
	this.r2=100;
	this.iiixRnd=random(5);
	this.step=0;
	this.speedLevelIncrease=z;
	this.iiiyMove=10;
	this.iiiyMoveFirst=[1,2];
	if(random(this.iiiyMoveFirst)===1)
	{
		this.iiiyMove=10;
	}
	else
	{
		this.iiiyMove=-10;
	}
	
	this.show=function(hit)
	{
		if(this.iiixRnd<0)
		{
			this.iiixRnd=random(5);
			this.step=100;
		}
		if(this.step<1)
		{
			if(this.speedLevelIncrease>0)
			{
				this.speedLevelIncrease=this.speedLevelIncrease;
			}
			else
			{
				this.speedLevelIncrease=0.05;
			}
			this.iiix-=(this.iiixRnd=this.iiixRnd-0.1);
			
			//Random applied to Y within height
			if((this.iiiy-this.iiixRnd)<0)
			{
				this.iiiyMove=(this.iiixRnd=this.iiixRnd-0.1)
				this.iiiy+=(this.iiixRnd=this.iiixRnd-0.1)
			}
			else if ((this.iiiy+this.iiixRnd)>(height-100))
			{
				this.iiiyMove=-(this.iiixRnd=this.iiixRnd-0.1)
				this.iiiy+=(this.iiixRnd=this.iiixRnd-0.1)
			}
			this.iiiy+=this.iiiyMove*2;
			//this.iiiy+=Math.sin(1);
			
			
			//this.iiix-=Math.sin(this.iiixRnd);

		}
		else
		{
			this.step=this.step-1;
			this.iiix=this.iiix-this.speedLevelIncrease;
		}
		
		if(this.iiix<0)
		{
			console.log('game over');
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