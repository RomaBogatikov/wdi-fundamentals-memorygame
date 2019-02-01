



var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var counter = 0;

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
		// increase a score by one
		score();
	}
	else {
		alert("Sorry, try again.");
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

var score = function() {
	var scoreNow = document.getElementById('score');
	scoreNow.textContent = ++counter;
}

createBoard();

// create a function expression to reset a game
var reset = function() {
	var gameBoard = document.getElementById('game-board');
	var length = gameBoard.children.length;
	// delete all cards
	for (let i = 0; i < length; i++) {
		gameBoard.children[0].remove();
	}
	// reset cardsInPlay to an empty array
	cardsInPlay = [];
	// create game-board again
	return createBoard();
}

document.getElementById('button').addEventListener('click', reset);


