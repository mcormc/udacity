// The function that you pass to the forEach() method can take up to three parameters. 
// In the video, (https://www.youtube.com/watch?v=BsEdgtnaTzk) these are called element, index, and array, but you can call them whatever you like.

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

// Prints:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat
