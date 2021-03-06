/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

// call the movies function, pass in the function and name of movie
emotions("happy", function laugh(num) {
  var string = "";
  for (i = 0; i <+ num; i++) {
      string += "ha";
  }
  return string + "!";
});

// or...

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(n) {
    return 'ha'.repeat(n) + '!';
});
