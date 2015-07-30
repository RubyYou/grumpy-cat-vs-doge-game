// Global object
var Global = {
	renderer:"",
	stage:"",
	betTarget:"",
	catBetBtn:"",
	dogeBetBtn:""

};

var TextStyle = {
	font : 'bold italic 36px Arial',
	fill : '#F7EDCA',
	stroke : '#000',
	strokeThickness : 3,	
	dropShadow : true,
	dropShadowColor : '#000000',
	align:"center",
	dropShadowAngle : Math.PI / 6,
	dropShadowDistance : 4,
	wordWrap : true,
	wordWrapWidth : 600
};

function init(){
	console.log('canvas live!');
	betScreen();
}

function betScreen(){

	// load assets
	Global.renderer = new PIXI.CanvasRenderer(800, 600,{backgroundColor : 0x116015, clearBeforeRender:true});
	document.body.appendChild(Global.renderer.view);

	// create the root of the scene graph
	Global.stage = new PIXI.Container();

	var grumpyCatTexture = PIXI.Texture.fromImage('assets/cat.png');
	var dogeTexture = PIXI.Texture.fromImage('assets/doge.png');
	var catBetBtnTexture =  PIXI.Texture.fromImage('assets/cat-btn.png');
	var dogeBetBtnTexture =  PIXI.Texture.fromImage('assets/doge-btn.png');

	var grumpyCat = new PIXI.Sprite(grumpyCatTexture);
	var doge = new PIXI.Sprite(dogeTexture);
	Global.catBetBtn =  new PIXI.Sprite(catBetBtnTexture);
	Global.dogeBetBtn =  new PIXI.Sprite(dogeBetBtnTexture);

	// center the sprite's anchor point
	grumpyCat.anchor.x = 0.5;
	grumpyCat.anchor.y = 0.5;
	doge.anchor.x = 0.5;
	doge.anchor.y = 0.5;
	Global.catBetBtn.anchor.x = 0.5;
	Global.catBetBtn.anchor.y = 0.5;
	Global.dogeBetBtn.anchor.x = 0.5;
	Global.dogeBetBtn.anchor.y = 0.5;

	// move the sprite to the center of the screen
	grumpyCat.position.x = Global.renderer.view.width/2-200;
	grumpyCat.position.y = 320;
	doge.position.x = Global.renderer.view.width/2+200;
	doge.position.y = 320;
	Global.catBetBtn.position.x = Global.renderer.view.width/2-200;
	Global.catBetBtn.position.y = 450;
	Global.dogeBetBtn.position.x = Global.renderer.view.width/2+200;
	Global.dogeBetBtn.position.y = 450;

	var introText = new PIXI.Text('Choose One to place bet for 2015 race winner!', TextStyle);
	introText.x = 80;
	introText.y = 80;

	Global.catBetBtn.interactive = true;
	Global.dogeBetBtn.interactive = true;
	
	Global.catBetBtn.betItem = "cat";
	Global.dogeBetBtn.betItem = "doge";

	Global.catBetBtn.on('mousedown', startGame);
	Global.dogeBetBtn.on('mousedown', startGame);

	//add to stage always have to be the last one.
	Global.stage.addChild(grumpyCat);
	Global.stage.addChild(doge);
	Global.stage.addChild(Global.dogeBetBtn);
	Global.stage.addChild(Global.catBetBtn);
	Global.stage.addChild(introText);
	// start animating
	animate(true);
}


function animate(animateConfig) {
	if (animateConfig){
		Global.renderer.render(Global.stage);
	}
	requestAnimationFrame(animate);
}

function startGame(e){
	Global.betTarget = this.betItem;
	console.log(Global.betTarget);

	animate(false);
	

	// all destroy function not working..
	//Global.renderer.destroy();
	//Global.stage.destroy();
	//Global.renderer.context.clearRect(0,0,800,600);
	//var canvas = document.getElementsByTagName("canvas")[0];
	//var context = canvas.getContext('2d');
	//context.clearRect(0, 0, canvas.width, canvas.height);

	//clean out screen
	document.getElementsByTagName("canvas")[0].remove();

	loadPlayScreen();
}

function loadPlayScreen(){
	console.log('load Screen');

	// load assets
	Global.renderer = new PIXI.CanvasRenderer(800, 600,{backgroundColor : 0x000000, clearBeforeRender:true});
	document.body.appendChild(Global.renderer.view);

	// create the root of the scene graph
	Global.stage = new PIXI.Container();
	var bgTexture = PIXI.Texture.fromImage('assets/racingMap.jpg');
	var bg =  new PIXI.Sprite(bgTexture);
	bg.position.x = 10;
	bg.position.y = 50;
	

	var betText = new PIXI.Text('you bet on '+ Global.betTarget, TextStyle);
	betText.x = 50;
	betText.y = 500;


	Global.stage.addChild(bg);
	Global.stage.addChild(betText);

}




window.onload = init;












