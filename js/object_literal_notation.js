var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; } // method
};

sister.paintPicture(); // returns "Sarah paints!"



// two equivalent ways to use the key to return its value
sister["parents"] // bracket notation - returns [ "alice", "andy" ]
sister.parents // dot notation - also returns ["alice", "andy"]


// The sister object above contains a bunch of properties about my sister, 
// but doesn't really say what my sister does. For instance, let's say my sister 
// likes to paint. You might have a paintPicture() method that returns "Sarah paints a picture!" 
// whenever you call it. The syntax for this is pretty much exactly the same as how you defined 
// the properties of the object. The only difference is, the value in the key:value pair will 
// be a function.

sister.name // returns "Sarah"
