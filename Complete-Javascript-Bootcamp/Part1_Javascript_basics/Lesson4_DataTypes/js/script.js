// Data Types

// Value can be object or primitive

// 7 Primitive data types:

// 1. Number (Floating point numbers. Used for decimals and integers)
let age = 25; // is 25.0 , decimal not visible
console.log(age);
let width = window.innerWidth;
//let PI = 3.1415;
let dateNow = Date();
let position = window.position;

// 2. String (Sequence of characters. Used for text)
let firstName = "Aleksandr";
console.log(firstName);
let otherString = 'As';
console.log(otherString);
//let lastName = "Bestman'; - synatax error
//Bestman - reference error

// 3.Boolean (Logical type that can only be true or false. Used for taking decisions)
false;
console.log(false);
let isWorking = true;
let middleAge = false;
console.log(isWorking);
console.log(typeof isWorking);

let windowStatus = window.closed;
console.log(windowStatus);

// 4. Undefined (Value taken by a variable that is not yet defined ('empty value'))
let year; // variable declared without assigning a value
let friends;
console.log(year);
console.log(typeof year);

year = 2020; // assigning new value
console.log(typeof year);

// 5. Null (Also means 'empty value')
console.log(typeof null); //Object is the bug , correct type should be null

// 6. Symbol (Introduced in ES2015. Value that is unique and cannot be changed. (Not useful for now))

// 7. BigInt (ES2020) (Larger integers than the Number type can hold)

// Javascript has dynamic typing feature - We do not have manually define the data type of the value stored in a variable. Instead, data types are dtermined automatically.
isWorking = 'Correct!'; // - it is string now. do not need to use let word
console.log(typeof isWorking);

// Object
var topic = document.getElementById('my ID');
console.log(typeof topic);

let me = {
    name: 'Alex';    
}
console.log(typeof me);

// Arrays
var links = document.getElementsByTagName('a');
document.write(links[0]);
console.log(typeof links);

