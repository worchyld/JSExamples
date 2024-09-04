var message = 'Hello, World!';
// create h1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add to document
document.body.appendChild(heading);
var person;
person = {
    name: 'John',
    age: 25,
}; // valid
var greeting;
greeting = function (name) {
    var message = "Hi ".concat(name);
    console.log("in here");
    return message;
};
