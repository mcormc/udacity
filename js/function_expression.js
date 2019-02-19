// Function Expression: When a function is assigned to a variable. The function can be named, or anonymous. Use the variable name to call a function defined in a function expression.

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};

// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};

// for either of the definitions above, call the function like this:
doSomething(5); // Returns: 6
