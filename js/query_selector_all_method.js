// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');

// loop over a NodeList with either its .forEach() method, or the humble for loop:

const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}
