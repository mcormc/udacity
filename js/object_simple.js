var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() { // this is a method
        if (umbrella.isOpen === true) {
            return "The umbrella is 
            already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the 
            umbrella";
        }
    } // this ends the method
};

