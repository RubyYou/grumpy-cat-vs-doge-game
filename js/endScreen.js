function EndScreen(){

	this.init = function(){
		
		var result;
		var lostTest, winnerText, winnerAnnounceText, moneyAnnounceText, winnerVideo;
		
		if( Global.betTargetName == Global.winner ){
			result = "win";
		}else{
			result = "lose";
		}

		// if player win the game
		switch(result){
			
			case "win":
				// render winText image under betTarget
				winnerText = Utility.renderImage('assets/winnerText.png', 0.5, Global.renderer.view.width/2-200, 450, 1, 1);
				// render loseText image under againstTarget
				lostTest = Utility.renderImage('assets/loserText.png', 0.5, Global.renderer.view.width/2+200, 450, 1, 1);
				Utility.assignProperties(Global.betTarget, 0.5, Global.renderer.view.width/2-200, 320, 1, 1);
				Utility.assignProperties(Global.againstTarget, 0.5, Global.renderer.view.width/2+200, 320, 1, 1);
				winnerAnnounceText = Utility.renderText('Winner is ' + Global.winner + "!!!!", H1, 0, 100, 80, 5);
				moneyAnnounceText = Utility.renderText('You win ' + Global.BetMoney  + " pounds!", H1, 0, 100, 120, 5);
				winnerVideo = Utility.renderVideo('assets/'+Global.betTargetName+".mp4", 50, 50, 500, 500, 10);
			break;
			
			case "lose":

				lostTest = Utility.renderImage('assets/loserText.png', 0.5, Global.renderer.view.width/2-200, 450, 1, 1);
				winnerText = Utility.renderImage('assets/winnerText.png', 0.5, Global.renderer.view.width/2+200, 450, 1, 1);
				Utility.assignProperties(Global.againstTarget, 0.5, Global.renderer.view.width/2-200, 320, 1, 1);
				Utility.assignProperties(Global.betTarget, 0.5, Global.renderer.view.width/2+200, 320, 1, 1);
				winnerAnnounceText = Utility.renderText('Winner is ' + Global.winner + "!!!!", H1, 0, 100, 80, 5);
				moneyAnnounceText = Utility.renderText('You lose ' + Global.BetMoney  + " pounds!", H1, 0, 100, 120, 5);
				winnerVideo = Utility.renderVideo('assets/'+Global.againstTargetName+".mp4", 50, 50, 500, 500, 10);
			break;
		};
		console.log(winnerVideo);
		//console.log(winnerVideo._texture.baseTexture.source.innerHtml);

		Utility.addChildToStage([winnerVideo, lostTest, winnerText, winnerAnnounceText, moneyAnnounceText]);

	};

};