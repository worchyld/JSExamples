var message = 'Hello, World!';
// create h1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add to document
document.body.appendChild(heading);
// counter
var counter = 0;
function increment(counter) {
    return counter++;
}
var countup = increment(counter);
console.log(countup);
// string interpolations
var firstName = "John";
var title = "Web Developer";
var profile = "I'm ".concat(firstName, ". \nI'm a ").concat(title);
console.log(profile);
// object
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);
// arrays
var skills = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');
console.log(skills);
