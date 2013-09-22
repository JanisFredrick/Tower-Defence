/**
 * Whack-A-Zombie
 * Freely reused from the Cocos2d Whack-a-zombie Tutorial 
 * http://maniacdev.com/2011/01/tutorial-cocos2d-example-whack-a-zombie-game/
 * Original version by Ray Wenderlich, the creator of the Space Game Starter 
 * Kit and co-author of the Learning Cocos2D book, as part of an excellent set 
 * of iOS tutorials on how to create a whack-a-zombie game using the open source 
 * iPhone game engine Cocos2D.
 **/
var game = {
	path: [
            { x:85,  y:  0 },
            { x:85,  y:240 },
            { x:255,  y:240 },
            { x:255,  y:145 },
            { x:450,  y:150 },
            { x:450,  y:340 },
            { x: 200, y:340 },
            { x: 200, y:480 },
            { x: 450, y:480 },
            { x: 450, y:565 },
            { x: 90, y:565 },
			{ x: 90, y:670 },
            { x: 610, y:670 },
			{ x: 610, y:495 },
			{ x: 560, y:485 },
            { x: 560, y:485 },
            { x: 560, y:330 },
            { x: 730, y:330 },
			{ x: 730, y:570 },
            { x: 870, y:570 },
            { x: 870, y:190 },
			{ x: 600, y:190 },
			{ x: 600, y:100 },
            { x: 820, y:100 },
            { x: 820, y:0 },
            { x: 820, y:-1 },
        ],
        

	/**
	 * some Initialization
	 */
	onload: function() {
		
		// enable dirtyRegion
		me.sys.dirtyRegion = true;
		
		// we don't need the default 60fps for a whack-a-zombie !
		me.sys.fps = 30;
		
		// debug flags
		//me.debug.renderDirty = true;
		//me.debug.renderHitBox = true;
		
		// initialize the video
		if (!me.video.init('screen', 1280, 750, true ,'auto')) {
			alert("Sorry but your browser does not support html5 canvas. Please try with another one!");
			return;
		};
					
		// initialize the "sound engine"
		me.audio.init("mp3,ogg");
		
		// set all ressources to be loaded
		me.loader.onload = this.loaded.bind(this);
		// set all ressources to be loaded		
		me.loader.preload(game.resources);
		
		// load everything & display a loading screen
		me.state.change(me.state.LOADING);

	},
	
	
	/** 
	 * callback when everything is loaded
	 */
	loaded: function () {
		
		// set the "Play/Ingame" Screen Object
		me.state.set(me.state.PLAY, new game.PlayScreen());
      
		// set a fade transition effect
		me.state.transition("fade","#000000", 250);
		
		// start the game
		me.state.change(me.state.PLAY);

	}

}; // game


