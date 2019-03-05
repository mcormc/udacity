// <h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);

// set value 
mainHeading.className = "im-the-new-class";
