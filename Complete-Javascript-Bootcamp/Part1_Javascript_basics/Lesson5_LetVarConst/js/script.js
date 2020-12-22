// let, var and const

// Declaring a variable with let
let age = 43;
console.log(age);

age = 44; // mutate the variable
console.log(age);

// Const introduced in ES6. Not supposed to be changed
const yearOfBirth = 1977;
// yearOfBirth = 2020; // type error as it is immutable variable
console.log(yearOfBirth);
// const month; //Syntax error as we need the initial value

// Var used to defining variables in older versions
var job = 'programmer';
console.log(job);

job = 'bloger';
console.log(job);

lastName = "Bestman"; // not declaring a variable in current scope. Creating a property only
console.log(lastName);

