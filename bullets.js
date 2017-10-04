function Bullets(){
	this.ii=0;
	this.yy=mouseY;
	this.r1=16;
	this.r2=2;
this.show=function(eye,rnnd1,rnnd2){
	//background(255,0,0); 
	if(this.ii<windowWidth){
		this.ii+=20;
	}
	else{
		//ii=0;
		bulletArr.splice(eye,1);

	}
		
		fill(rnnd1,rnnd2,rnnd1);
		ellipse(this.ii,this.yy,this.r1*2,this.r2*2);
		
		
		
	
		
	}
this.hit=function(){
	console.log('hit');
	
	}
}