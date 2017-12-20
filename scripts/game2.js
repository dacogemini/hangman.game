/* document.addEventListener("keypress", getKey);
    function getKey(ev) {
        console.log(ev.key);
    } */


// ARRAYS 
var words = ["html", "javascript", "closure", "event"]; // LIST OF WORDS
var word = words[Math.floor(Math.random() * words.length)]; // NEW VARIABLE 'WORD': This new var = a random selection 

// Use an array of blanks for each letter in the word. This the ANSWER ARRAY, and we’ll fill it with the player’s CORRECT GUESSES as they’re made.
// The answer array will start out as a group of these empty entries equal in number to the letters in the secret word.

// ARRAY OF BLANKS. Example: HTML (randomly Selected) "_ " + "_ " "_ " + "_ "
var answerArray = [];

// Creates a looping variable i that starts at 0 and goes up to (but does not include) word.length.
// Each time around the loop, we add a new element to answerArray, at answerArray[i].When the loop finishes, 
// answerArray will be the same length as word. 
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
// Create the variable 'remainingLetters' and set it to the length of the secret word.
var remainingLetters = word.length;
document.getElementById("wordDisplay").innerHTML = answerArray.join(" ");



document.onkeyup = function (event) {
    // while (remainingLetters > 0) {
    var guess = event.key;
    console.log(guess);
    if (guess === null) {
        // break;
    } else if (guess.length !== 1) {

        alert("Please enter a single letter.");

    } else {
        for (var j = 0; j < word.length; j++) {
            console.log(j);
            if (word[j] === guess) {


                answerArray[j] = guess;
                remainingLetters--;
                document.getElementById("wordDisplay").innerHTML = answerArray.join(" ");
            }

        }
    }
    // }
};
// Console Logs
console.log(word);
console.log(remainingLetters);
console.log(answerArray);


// document.getElementById("wordDisplay").innerHTML = answerArray;