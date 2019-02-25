var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// Prints:
// JELLY DONUT HOLE
// CHOCOLATE DONUT HOLE
// GLAZED DONUT HOLE
