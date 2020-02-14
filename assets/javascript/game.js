var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var compGuess = "";

var characters = abcdefghijklmnopqrstuvwxyz
var documentWins = document.getElementById("wins");
var documentLosses = document.getElementById("losses");
var documentGuessesLeft = document.getElementById("guessesLeft");
var documentGuessesSoFar = document.getElementById("guessesSoFar");

// Computer randomizes a letter a-z

function randomLetter(length) {
  var result = '';
  
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters(Math.floor(Math.random() * charactersLength));
  }
  compGuess = result;
}
randomLetter(1);
console.log(compGuess);

// User inputs a letter a-z

document.onkeyup = function(event) {
  userGuess = event.key;
  if (userGuess === compGuess) {
    wins++;
    documentWins.text(wins);

    alert("Correct!");
  }
};

// User has 10 guesses to guess correctly

// If user guesses incorrectly it is counted as a guess left -1, until user uses all 10 guesses



// If user guesses correctly it is counted as a win +1

// Track Guesses left, as well as guesses so far.

// If user wins or loses, game resets with a new letter.
var restart = function() {
	guessesLeft = 9;
	letterUser = [];
}