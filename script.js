var playerRock = document.getElementById("rock");
var playerPaper = document.getElementById("paper");
var playerScissors = document.getElementById("scissors");
var thisRoundWinner = document.getElementById("thisRound");
var playerScore =  Number(document.getElementById("playerScore").textContent) + 1; /*added +1 at the end because without it the first round, wether  the player/computers would win the score wouldn't increment*/
var computerScore = Number(document.getElementById("computerScore").textContent) + 1; /*added +1 at the end because without it the first round, wether  the player/computers would win the score wouldn't increment*/
var computerChoiceSpan =document.getElementById("computerChoiceValue");
var playerChoiceSpan = document.getElementById("playerChoiceValue");
var resetButton = document.getElementById("reset")
var computerResult; //declared this var so that I can assign it to the computerChoiceSpan, if I would call the function it would return a choice than the one that was made at the moment when the user clicked a button
function computerChoice() {
	var randomNumber =  Math.floor(Math.random() *100);
	if(randomNumber < 33.34) {
		computerResult= "rock";
		return "rock"
	} else if (randomNumber < 66.66 ) {
		computerResult= "paper";
		return "paper"
	} else {
		computerResult= "scissors";
		return "scissors"
	}
}


playerRock.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "It's a tie!";
			playerChoiceSpan.innerHTML = "rock";
			computerChoiceSpan.innerHTML = computerResult;
			break;
		case("paper"):
			thisRoundWinner.innerHTML = "Computer wins!";
			playerChoiceSpan.innerHTML = "rock";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;

		case("scissors"):
			thisRoundWinner.innerHTML = "You Win!";
			playerChoiceSpan.innerHTML = "rock";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;

	}
}

playerPaper.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "You Win!";
			playerChoiceSpan.innerHTML = "paper";
			computerChoiceSpan.innerHTML = computerResult;
			break;
		case("paper"):		
			thisRoundWinner.innerHTML = "It's a tie!";
			playerChoiceSpan.innerHTML = "paper";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;

		case("scissors"):
			thisRoundWinner.innerHTML = "Computer wins!";
			playerChoiceSpan.innerHTML = "paper";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;

	}
}

playerScissors.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "Computer wins!";
			playerChoiceSpan.innerHTML = "scissors";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;
		case("paper"):
			thisRoundWinner.innerHTML = "You Win!";
			playerChoiceSpan.innerHTML = "scissors";
			computerChoiceSpan.innerHTML = computerResult;
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;
			

		case("scissors"):
			thisRoundWinner.innerHTML = "It's a tie!";
			playerChoiceSpan.innerHTML = "scissors";
			computerChoiceSpan.innerHTML = computerResult;
			break;
			

	}
}

resetButton.onclick = function(){
	thisRoundWinner.innerHTML = "Game resetted.";
	playerChoiceSpan.innerHTML = "none yet."
	computerChoiceSpan.innerHTML = "none yet.";
	document.getElementById("computerScore").innerHTML = 0;
	document.getElementById("playerScore").innerHTML = 0;
}