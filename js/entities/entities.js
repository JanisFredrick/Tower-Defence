/**
 * a zombie entityalpos
 * note : we don't use EntityObject, since we wont' use regular collision, etc..
 */
var guns=[];
var bullets=[];
var zombies=[];
var idx=-1;
var forbidden=new Array(42);
//=new Array(100);
for(var f=-1;f<42;f+=1)
	forbidden[f]=new Array(25);
for(var k=-1;k<42;k++)
{
	for(var l=-1;l<25;l++)
		forbidden[k][l]=1;
}
		forbidden[0] =[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		forbidden[1] =[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0];
		forbidden[2] =[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0];
		forbidden[4] =[0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[3] =[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0];
		forbidden[5] =[0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[6] =[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[7] =[0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[8] =[0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[9] =[0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[10]=[0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[11]=[0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[12]=[0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0];
		forbidden[13]=[0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0];
		forbidden[14]=[0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0];
		forbidden[15]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0];
		forbidden[16]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0];
		forbidden[17]=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0];
		forbidden[18]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0];
		forbidden[19]=[1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0];
		forbidden[20]=[1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0];
		forbidden[21]=[1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		forbidden[22]=[1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
		forbidden[23]=[1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
		forbidden[24]=[1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0];
		forbidden[25]=[1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0];
		forbidden[26]=[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
		forbidden[27]=[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0];
		forbidden[28]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		forbidden[29]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		forbidden[30]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		forbidden[31]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[32]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[33]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[34]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[35]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[36]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[37]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[38]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[39]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[40]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		forbidden[41]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

game.ZombieEntity = me.AnimationSheet.extend(
{	
	init:function (x, y) {
		// call the constructor
		this.parent(x, y , me.loader.getImage("zombie"), 32, 32);
		
		// idle animation
		this.addAnimation ("idle",  [0]);
		// laugh animation
		this.addAnimation ("walk",  [0,1,2,3,2,1,0]);
		this.addAnimation ("walkdown",  [0,1,2]);
		this.addAnimation ("walkright",  [12,13,14]);
		this.addAnimation ("walkleft",  [24,25,26]);
		this.addAnimation ("walkup",  [36,37,38]);
		// touch animation
		this.addAnimation ("touch",  [4,5,6,4,5,6]);
		
		// set default one
		//this.setCurrentAnimation("idle");
		
		// means fully hidden in the hole
		this.isVisible = false;
		this.isOut = false;
		this.timer = 0;
		this.strength=40;
		
		this.initialPos = 0;
		
		// tween to display/shot the zombies
		this.displayTween = null;
		this.shotTween = null;
		
	},
	
	
	/**
	 * callback for mouse click
	 */
	
	
	/**
	 * display the zombie
	 * goes out of the hole
	 */
	display : function() {
		if(this.strength>0)
		{

		var i=this.initialPos;
		if(this.pos.x>game.path[i].x)
				this.setCurrentAnimation("walkright");
		else if(this.pos.x<game.path[i].x)
				this.setCurrentAnimation("walkleft");
		else if(this.pos.y>game.path[i].y)
				this.setCurrentAnimation("walkup");
		else
				this.setCurrentAnimation("walkdown");
		if(this.initialPos<25)
			this.initialPos=this.initialPos+1;
		else
		{
			me.game.remove(this);
			this.startzomb+=1;
		}
			//console.log(this.pos.x);
		this.displayTween = new me.Tween(this.pos).to({x:game.path[i].x,y: game.path[i].y }, Math.abs(this.pos.x-game.path[i].x + this.pos.y-game.path[i].y)*10);
		this.displayTween.easing(me.Tween.Easing.Linear.EaseNone);
		this.displayTween.onComplete(this.display.bind(this));
		this.displayTween.start();
		// the zombie is visible
		this.isVisible = true;
		}
		else
			console.log("is shot");
	},

	
	/**
	 * callback when fully visible
	 */
	onDisplayed : function() {
		//this.isOut = true;
		this.timer = me.timer.getTime();
	},
	
	/**
	 * shot the zombie
	 * goes into the hole
	 */	
	shot : function() {
		this.flicker(20);
		this.strength=this.strength-1;
		if(this.strength==0)
			this.setCurrentAnimation("idle");

	},

	/**
	 * callback when fully visible
	 */
	onHidden : function() {
		this.isVisible = false;
		// set default one
		this.setCurrentAnimation("idle");
	},

	
	/**
	 * update the zombie
	 */
	update : function ()
	{
		//console.log("first one");
		if (this.isVisible) {
			// call the parent function to manage animation
			this.parent();
		
			// shot the mode after 1/2 sec
			if (this.isOut===true) {
				if ((me.timer.getTime() - this.timer) > 500){
					this.isOut = false;
					// set default one
					this.setCurrentAnimation("walk");
					this.shot();

				}
			}
		}
		return this.isVisible;
	}
});
game.ShotgunSpawner = me.AnimationSheet.extend(
{	
	init:function (x, y) {
		
		// call the constructor
		this.parent(x, y , me.loader.getImage("shotgun"), 124, 128);
		this.isVisible = true;
		this.addAnimation ("idle",  [0]);
		//this.addAnimation ("walk",  [0,1,2,3,4,5]);

		this.setCurrentAnimation("idle");
		// register on mouse event
		me.input.registerPointerEvent('click', this, this.onClick.bind(this));

	},
	
	/**
	 * callback for mouse click
	 */
	onClick : function() {
			var gun = new game.ShotgunEntity(1100,200,me.loader.getImage("shotgun"), 124,128);
			me.game.add(gun, 101);

			me.game.sort();
			guns.push(gun);
			return true;
	},
	/**
	 * callback when fully visible
	 */
	update : function ()
	{
		return this.isVisible;
	}
});
game.ShotgunEntity = me.AnimationSheet.extend(
{	
	bullettimer:0,
	bulltime:500,
	range:100,
	indx:-1,

	init:function (x, y) {
		this.placed=false;
		this.angle=0;

		// call the constructor
		this.parent( x, y, me.loader.getImage("shotgun"), 124, 128);

		//this.addAnimation ("walk",  [0,1,2,3,4,5]);
		//this.setCurrentAnimation("walk");
		
		me.input.registerPointerEvent('click', this, this.onClick.bind(this));

	},
	nearest:function(){
		for(var i=0;i<100;i++)
		{
			var dx = Math.abs(zombies[i].pos.x-this.pos.x)
			if(Math.abs(zombies[i].pos.x-this.pos.x-this.width/2)<this.range+1 && Math.abs(zombies[i].pos.y-this.pos.y-this.height/2)<this.range+1 && zombies[i].strength>0)
			{
                dx = zombies[i].pos.x - this.pos.x-this.width/2;
                var dy = zombies[i].pos.y - this.pos.y-this.height/2;
                this.angle = Math.atan2(dy, dx);
				return i;
			}
		}
		return -1;
	},
	display:function(){
			this.indx=this.nearest();
			if(this.indx!=-1)
			{
				var bullet1 = new game.Bullet(this.pos.x+this.width/2-2,this.pos.y+this.height/2,this.indx);
				me.game.add(bullet1, 100);
				bullets.push(bullet1);

				me.game.sort();
			}
			
		return false;
	},
	/**
	 * place in the mouse pos
	 */
	onClick : function() {
			if(this.placed==false){
				var bo=this.solid();
				if(!bo)
				{
					this.placed=true;
					this.pos.x = me.input.mouse.pos.x-this.width/2;
					this.pos.y = me.input.mouse.pos.y-this.height/2;
					return true;
				}
			}
			return false;
		
	},
	solid : function() {

		if(forbidden[parseInt(this.pos.x/30)][parseInt(this.pos.y/30)]==1 ||forbidden[parseInt(this.pos.x/30)][parseInt(this.pos.y/30)]==2) // || forbidden[parseInt(this.pos.x/30)][parseInt(this.pos.y/30)]==null)
			return true;

		forbidden[parseInt(this.pos.x/30)][parseInt(this.pos.y/30)]=2;
		return false;
	},
	/**
	 * update the zombie
	 */
	update : function ()
	{	
	
		if(!this.placed)
		{
			this.pos.x = me.input.mouse.pos.x-this.width/2;
			this.pos.y = me.input.mouse.pos.y-this.height/2;			
			
		}
		else
		{
			if(me.timer.getTime()-this.bullettimer>this.bulltime)
			{
				this.display();
				this.bullettimer=me.timer.getTime();
			}
		}
		return false;
	}
});

/**
 * a zombie manager (to manage movement, etc..)
 */
game.ZombieManager = me.ObjectEntity.extend(
{	

	
	timer : 0,
	timer1:0,
	startzomb:0,
	zombno:100,
		
	init: function ()
	{
		var settings = {};
		settings.width = 50;
		settings.height = 50;
		// call the parent constructor
		this.parent(0, 0, settings);
		this.waves(0,this.zombno);
		// add the first row of zombies

		
	},
	waves:function(w,z)
	{
		for ( var i = w; i < z; i ++) {
			zombies[i] = new game.ZombieEntity( 85, 0)
			me.game.add (zombies[i], 30);
			//console.log("w="+w+"z"+z);
			zombies[i].isVisible=false;
		}
		this.timer = me.timer.getTime();
	},

	/*
	 * update function
	 */
	update : function ()
	{
		// every 1/2 seconds display zombies randomly
		for (var i = this.startzomb; i < this.zombno; i+=1) {
			if ((me.timer.getTime() - this.timer) > 500) {
				if (!zombies[i].isVisible) {
					zombies[i].display();
					this.timer = me.timer.getTime();
				}
			
			}

		}
 		return false;
	}	
});
game.Bullet = me.AnimationSheet.extend(
{	
	range:500,
	target:-1,
	timer1:100,
	indx:10000,
	temp:1000,
	targetposx:10000,
	targetposy:10000,
	power:5,

	init:function (x, y,z) {
		this.placed=false;
		// call the constructor
		this.parent( x, y, me.loader.getImage("bullet"), 10, 10);
		this.pos.x=x;
		this.pos.y=y;
		this.temp=z;
		this.addAnimation ("idle",  [0,1]);
		this.setCurrentAnimation("idle");
		
	},
	display:function(){

			if(this.indx==10000)
			{

				if(this.temp!=-1)
				{
					console.log(this.temp);
					this.indx=this.temp;
					this.displayTween = new me.Tween(this.pos).to({x: zombies[this.indx].pos.x , y: zombies[this.indx].pos.y }, this.timer1);
					this.displayTween.easing(me.Tween.Easing.Linear.EaseNone);
					this.displayTween.onComplete(this.removeAll.bind(this));
					this.displayTween.start();
				}

			}
			return false;
	},
	removeAll:function()
	{

				zombies[this.indx].strength-=this.power;
				me.game.remove(this);
				if(zombies[this.indx].strength<=0)
				{
					me.game.remove(zombies[this.indx]);
				}


	},
	update : function ()
	{	
	
		this.display()
		return false;
	},
});