// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);


// another example:

const newSpan = document.createElement('span');

// causes an error
document.appendChild(newSpan);
