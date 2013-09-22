/**
 * Whack-A-Zombie
 * Freely reused from the Cocos2d Whack-a-zombie Tutorial 
 * http://maniacdev.com/2011/01/tutorial-cocos2d-example-whack-a-zombie-game/
 * Original version by Ray Wenderlich, the creator of the Space Game Starter 
 * Kit and co-author of the Learning Cocos2D book, as part of an excellent set 
 * of iOS tutorials on how to create a whack-a-zombie game using the open source 
 * iPhone game engine Cocos2D.
 **/
game.resources = [
	// background
	{
		name: "background",	
		type: "image",	
		src:  "data/img/background/background.png"
	},
	{
		name: "dashboard",	
		type: "image",	
		src:  "data/img/background/dashboard.png"
	},
	{
		name: "bullet",	
		type: "image",	
		src:  "data/img/sprites/bullet.png"
	},
	// more sprites
	{
		name: "zombie",			
		type: "image",	
		src:  "data/img/sprites/zombie.png",
	},
		{
		name: "shotgun",			
		type: "image",	
		src:  "data/img/sprites/shotgun.png",
	},
	{
		name: "firegun",			
		type: "image",	
		src:  "data/img/sprites/firegun.png",
	},

	// ow audio FX
	{  
		name: "ow",
		type: "audio",
		src: "data/sfx/",
		channel : 2
	},
	
];
