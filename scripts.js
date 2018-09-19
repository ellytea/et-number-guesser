// Variables

var lastGuess = document.querySelector('.last-guess');
var lastGuessValue = document.querySelector('.last-guess-value');
var enterGuessElement = document.querySelector('.enter-guess');
var submitGuess = document.querySelector('.guess-button');
var highLow = document.querySelector('.high-low');
var startOver = document.querySelector('.reset-button');
var clearButton = document.querySelector('.clear-button');
var randomNumber = Math.floor(Math.random() * 100) + 1;

// guess button 

submitGuess.addEventListener('click', function(e) {
	e.preventDefault()
	var guessInt = parseInt(enterGuessElement.value);
	if (guessInt === randomNumber) {
		highLow.innerText = 'You Got It!';
		lastGuess.innerText = 'BOOM!';
		enterGuessElement.disabled = true;
		submitGuess.disabled = true;
		clearButton.disabled = true;
		startOver.innerText = 'Play Again';
	} else if (guessInt < randomNumber) {
		highLow.innerText = 'Guess Higher';
		lastGuess.innerText = 'Your Last Guess Was:';
	} else if (guessInt > randomNumber && guessInt <= 100) { 
		highLow.innerText = 'Guess Lower';
		lastGuess.innerText = 'Your Last Guess Was:';
	} else if (guessInt > 100 || guessInt < 1) {
		lastGuess.innerText = 'ERROR: Guess 1 - 100';
		lastGuessValue.innerText = 'Try Again';
		highLow.innerText ='';
		return
	} 
	lastGuessValue.innerText = enterGuess;
});

// reset button

startOver.addEventListener('click', function() {
	location.reload();
});

// clear button

clearButton.addEventListener('click', function(e) {
	e.preventDefault();
	enterGuessElement.value = ''; 
	lastGuess.innerText = 'Your Last Guess Was:';
	if (lastGuessValue.innerText.toLowerCase() === 'try again') {
		lastGuessValue.innerText = '??';
	}
	highLow.innerText = '';
});

// Disabling buttons

enterGuessElement.addEventListener('keyup', function () {
	if ( enterGuessElement.value === '') {
	submitGuess.disabled = true;
	clearButton.disabled = true;
	startOver.disabled = true;
	} else {
	submitGuess.disabled = false;
	clearButton.disabled = false;
	startOver.disabled = false;
	}	
});





