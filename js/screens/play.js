game.PlayScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
      me.game.reset();
		// add the background & foreground
		// add the foreground
		var background_sprite1 = new me.SpriteObject (0, 0,   me.loader.getImage("background"),1000,750);
		var background_sprite2= new me.SpriteObject (1000, 0,   me.loader.getImage("dashboard"),280,750);


		gun1=new game.ShotgunSpawner(1100,200,   me.loader.getImage("shotgun"), 128,124);
	
		// instantiate teh zombie Manager 
		var zombieManager = new game.ZombieManager(0, 0);
			
		// add all objects
		me.game.add (background_sprite1, 0);
		me.game.add (background_sprite2, 0);
		me.game.add (gun1, 100);


		me.game.add (zombieManager, 0);
		
		// make sure everything is sorted
		me.game.sort();
		

	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
	  //me.audio.stopTrack();
	}
});
