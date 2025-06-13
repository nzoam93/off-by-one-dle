export let currentGuess = [];
export let gameOver = false;
export let gameWon = false;
export let secretWord = "";
export let numRows = 8;
export let wordLength = 5;
export let numberOfGuesses = 0;
export let dictionary = [];
export let guessResults = [] //array of emojis to share
export let gameDifficulty = "easy";

export function setCurrentGuess(guess) {
  currentGuess = guess;
}
export function setGameOver(value) {
  gameOver = value;
}
export function setGameWon(value){
  gameWon = value;
}
export function setSecretWord(word) {
  secretWord = word;
  wordLength = word.length;
}
export function setNumberOfGuesses(n) {
  numberOfGuesses = n;
}
export function setDictionary(dict) {
  dictionary = dict;
}
export function setGuessResults(value){
  guessResults = value
}

export function setGameDifficulty(value){
  gameDifficulty = value;
}
