// Write your code here!
// remove the main#main element
const main = document.querySelector('main#main');
main.parentNode.removeChild(main);

// create an <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// set the text of the <h1> element to "YOUR-NAME is the champion"
newHeader.innerHTML = "helin is the champion";
