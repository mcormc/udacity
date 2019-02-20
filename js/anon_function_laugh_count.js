/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(laughCount) {
  var string = "";
  for (i = 0; i <+ laughCount; i++) {
      string += "ha";
  }
  return string + "!";
};

console.log(laugh(10));
