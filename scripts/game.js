/* document.addEventListener("keypress", getKey);
    function getKey(ev) {
        console.log(ev.key);
    } */


// ARRAYS & VARIABLES
var words = ["html", "javascript", "closure", "event"]; // LIST OF WORDS
var word = words[Math.floor(Math.random() * words.length)]; // NEW VARIABLE 'WORD': This new var = a random selection 

var answerArray = []; // Empty Array to be filled with underscores to match letters in word
for (var i = 0; i < word.length; i++) { // 
    answerArray[i] = "_";
}

var remainingLetters = word.length; // Create the variable 'remainingLetters' and set it to the length of the secret word.
console.log(word);
console.log(remainingLetters);
console.log(answerArray);
(answerArray.join(" "));
