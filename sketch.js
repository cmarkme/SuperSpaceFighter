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
  var mySound=[];
  var level=0.1;
  
  
/* function preload() {
 mySound[0] = loadSound('grenade.wav');
 mySound[1] = loadSound(' space-blaster-plays (1).wav');
 
}  */
  
  function setup() {
  ctx 		= createCanvas(windowWidth, windowHeight); 
  //gif 		= loadGif('tumblr_n9jk2qAjGS1s4fz4bo1_500.gif');
  
  bullet 	= new Bullets();
  noStroke();
  this.bird	=new Bird;
  this.ball	=new Ball;
  //ctx.style.cursor='text';
  document.body.style.cursor='no-drop';
  //.style(cursor: none);
  //this.enemy=new Enemy;
  
  for(i=0;i<10;i++)
	{
		aliens[i]=new Enemy(random(width),random(height),level);
	}
	//aliens[0].spawn();
	//mySound[1].setVolume(0.0);
 
 
}




function draw(){
	background(0);
	//image(gif, 0, 0,windowWidth, windowHeight);
	textSize(100);
	fill(0, 102, 153, 100);
text("SCORE", windowWidth-500, 80);
fill(0, 102, 153, 100);
text(bird.score, windowWidth-500, 170);
	//createP("HELLO WORLD");
  
	bird.update();
	bird.show();
	ball.update();
	ball.show();
	for(i=0;i<aliens.length;i++)
	{
		aliens[i].show();
	}
	
	//aliens[50].show();
	
	for(i=0;i<bulletArr.length;i++){
		if(bulletArr)
		{
			BulletKill=0;

			for(i1=0;i1<aliens.length;i1++)
			{
				Disx=Math.abs(bulletArr[i].ii-aliens[i1].iiix);
				Disy=Math.abs(bulletArr[i].yy-aliens[i1].iiiy);
				if(Disx<(aliens[i1].r1+bulletArr[i].r1)-25 
					&& Disy<(aliens[i1].r2+bulletArr[i].r2)-50)
				{
					//aliens[i1].show(1);
					if(aliens.splice(i1,1)){ BulletKill=1;
					bird.Score(1);
					console.log(bird.score);
					//mySound[0].play(0,1);
					//bulletArr.splice(i,1);
					break; }
				}
			}
			
			bulletArr[i].show(i,random(255),random(255));
			if(BulletKill===1)
			{
				bulletArr.splice(i,1);
			}
			if(aliens.length===0)
			{
				level+=0.6;
				for(i=0;i<10;i++)
				{
					aliens[i]=new Enemy(random(width)+width,random(height),level);
				}
				
				
				
				for(i=0;i<aliens.length;i++)
				{
					aliens[i].show();
				}	
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
	}
	
	


 
}
function keyPressed() {
	bulletArr.push(new Bullets());
	//mySound[1].play(0,1,0,0,0.2);
	
  //bulletArr.push(new Bullets());
}  








function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}