let message: string = 'Hello, World!';

// create h1 element
let heading = document.createElement('h1');
heading.textContent = message;

// add to document
document.body.appendChild(heading);

// counter
let counter: number = 0;

function increment(counter: number): number {
    return counter++;
}

let countup = increment(counter);

console.log(countup);

// string interpolations
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);

// object
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

// arrays
let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');

console.log(skills);