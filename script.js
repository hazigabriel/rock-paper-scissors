var playerRock = document.getElementById("rock");
var playerPaper = document.getElementById("paper");
var playerScissors = document.getElementById("scissors");
var thisRoundWinner = document.getElementById("thisRound");
var playerScore =  Number(document.getElementById("playerScore").textContent) + 1; /*added +1 at the end because without it the first round, wether  the player/computers would win the score wouldn't increment*/
var computerScore = Number(document.getElementById("computerScore").textContent) + 1; /*added +1 at the end because without it the first round, wether  the player/computers would win the score wouldn't increment*/
var computerChoiceSpan =document.getElementById("computerChoiceValue");
var playerChoiceSpan = document.getElementById("playerChoiceValue");

function computerChoice() {
	var randomNumber =  Math.floor(Math.random() *100);
	if(randomNumber < 33.34) {
		return "rock"
	} else if (randomNumber < 66.66 ) {
		return "paper"
	} else {
		return "scissors"
	}
}

playerRock.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "It's a tie!";
			playerChoiceSpan.innerHTML = "It's a tie!";
			break;
		case("paper"):
			thisRoundWinner.innerHTML = "Computer wins!";
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;

		case("scissors"):
			thisRoundWinner.innerHTML = "You Win!";
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;

	}
}

playerPaper.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "It's a tie!";
			break;
		case("paper"):
			thisRoundWinner.innerHTML = "Computer wins!";
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;

		case("scissors"):
			thisRoundWinner.innerHTML = "You Win!";
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;

	}
}

playerScissors.onclick = function() {
	switch(computerChoice()) {
		case("rock"):
			thisRoundWinner.innerHTML = "Computer wins!";
			document.getElementById("computerScore").innerHTML = computerScore++;
			break;
		case("paper"):
			thisRoundWinner.innerHTML = "You Win!";
			document.getElementById("playerScore").innerHTML = playerScore++;
			break;
			

		case("scissors"):
			thisRoundWinner.innerHTML = "It's a tie!";
			break;
			

	}
}

