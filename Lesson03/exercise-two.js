var sentence = "Bacon and eggs are delicious!";
// drop the last character
sentence = sentence.substring(0, sentence.length - 1);
var words = sentence.split(" ");
console.log(words);
console.log("now just get the third word. ");
console.log(words[2]);
