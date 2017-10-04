function Bullets(){
	this.ii=0;
	this.yy=mouseY;
	this.r1=16;
	this.r2=5;
this.show=function(eye){
	//background(255,0,0); 
	if(this.ii<windowWidth){
		this.ii+=20;
	}
	else{
		//ii=0;
		bulletArr.splice(eye,1);

	}
		
		fill(255,100);
		ellipse(this.ii,this.yy,this.r1*2,this.r2*2);
		
		
		
	
		
	}
this.hit=function(){
	console.log('hit');
	
	}
}