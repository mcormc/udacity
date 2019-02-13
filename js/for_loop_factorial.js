/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
solution = 12;

for (var x = 1; x < 12; x++) {
    solution *= x;
}
console.log(solution);

// or...

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);
