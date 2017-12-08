// Listen for Keypress

document.addEventListener("keypress", getKey);
    function getKey(ev) {
        console.log(ev.key);
    }


// This function will pick our word
var category = ["HTML", "Javascript", "Closure", "Event"];
function chooseWord(category) {
    return category[Math.floor(Math.random() * category.length)];
  
}


