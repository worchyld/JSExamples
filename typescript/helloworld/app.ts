let message: string = 'Hello, World!';

// create h1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add to document
document.body.appendChild(heading);