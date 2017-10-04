var pos,target,vel,ctx,r,drag,strength,dragSlider, strengthSlider;
var x=0;
  var y=0;
  var ii=0;
  var iiiy;
  var iiix;
  var yyy=50;
  var bulletArr=[];
  var aliens=[];
  var kp=0;
  function setup() {
  ctx = createCanvas(windowWidth, windowHeight);  
  // frameRate(5); // if you want to see it in slloowwmmoo
  bullet=new Bullets();
  noStroke();
  background(0,0,0); 
  this.bird=new Bird;
  this.enemy=new Enemy;
  for(i=0;i<100;i++)
	{
		aliens[i]=new Enemy(random(600)+1000,random(600));
	}
  //this.bullet=new Bullets;
  //bulletArr.push(new Bullets());
  
  
 
  
 
}
function draw(){
	  background(0,0,0); 
	  

	bird.show();
	aliens[5].show();
	aliens[50].show();
	
	for(i=0;i<bulletArr.length;i++){
		if(bulletArr)
		{
			Disx=Math.abs(bulletArr[i].ii-enemy.iiix);
			Disy=Math.abs(bulletArr[i].yy-enemy.iiiy);
			if(Disx<bulletArr[i].r1 && Disy<bulletArr[i].r2)
			{
				enemy.show(1);	
			}
			bulletArr[i].show(i);
			
			
		}
	}
	
	


 
}
function keyPressed() {
	bulletArr.push(new Bullets());
	
  //bulletArr.push(new Bullets());
}  








function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}