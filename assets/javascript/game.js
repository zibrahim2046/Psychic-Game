// Made variable to define lower case alphabet

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// This section will log wins, losses, and guesses left

var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keycode).toLowerCase();
  if (userGuess == computerGuess) {
    wins++;
  } else {
    losses++;
  }
};

// Letter randomizer

function randomLetter(length) {
  var result = '';
  
  var alphabetLength = alphabet.length;
  for (var i = 0; i < length; i++) {
    result += characters(Math.floor(Math.random() * alphabetLength));
  }

// Html elements

var html = "<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>You have " + guesses + " guesses left.</p>";
document.querySelector("#score").innerHTML = html;

var letterGuesses = "<br><hr><h1>Your last guess was: " + userGuess + "</h1>";

document.querySelector("#letterGuess").innerHTML = letterGuesses}
