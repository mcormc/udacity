var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

// same as:

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x); 
}

// same as: 

for (var x = 9; x >= 1; x = x - 1) {
  console.log("hello " + x); 
}
