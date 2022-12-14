//
// JavaScript Crash Course
// ------------------------------------------------------------------

// Console Output
console.log("Hello, world!");
console.error("Error message");
console.warn("This is a warning");

// ------------------------------------------------------------------
// VARIABLES - var, let, const
let year = 2022;
year = 2023;

// ------------------------------------------------------------------
// DATA TYPES - Strings, Numbers, Boolean, null, undefined
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;

const y = undefined;
let z;

// Check type
console.log(typeof x);

// ------------------------------------------------------------------
// STRINGS

// Concatenation
console.log("My name is " + name + " and I am " + age);

// Template literal (better) - ES6, ES2015
const welcome = `My name is ${name} and I am ${age}.`;
console.log(welcome);

// String methods & properties
const message = "Hello World!";

// Get length
console.log(message.length);

// Change case
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// Get substring
console.log(message.substring(0, 5)); // Hello
console.log(message.substring(0, 5).toUpperCase()); // chain methods

// Split into array
const subjects = "technology, Computers, IT, Coding";

console.log(subjects.split(", "));
// ['technology', 'Computers', 'IT', 'Coding']

// ------------------------------------------------------------------
// ARRAYS
const numbers = new Array(1, 2, 3, 4, 5); // constructor

const stuffs = ["apples", "oranges", "pears", 10, true];
const fruits = ["apples", "oranges", "pears"];

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[3] = "grapes";

// Add value using push()
fruits.push("strawberries");

// Add to beginning
fruits.unshift("mangos");

// Remove last value
fruits.pop();

// Check if array
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("Hello")); // false

// Get index
console.log(fruits.indexOf("oranges"));

console.log(fruits);

// ------------------------------------------------------------------
// OBJECT LITERALS














// -------------------------------------------------------
/* MULTI LINE COMMENT

END O FILE */
