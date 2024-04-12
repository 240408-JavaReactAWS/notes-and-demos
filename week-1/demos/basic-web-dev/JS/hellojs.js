/*
This is a multiline comment in JS


This is our first JS file where we'll test the basic of JavaScript

What is JS?
JavaScript (JS) is a programming language mainly used to provide functionality to the front-end of application (Think UI functionality). It
primarily runs in the browser in conjuction with HTML and CSS files but can also be used as a backend environment where used with a runtime like
NodeJS. 

Notes about JS:
High-Leveled: Further away from machine readable code and more into human readable syntax
Dynamically and Loosely typed: Don't need to declare a type for our variables and they can change at runtime dynamically
Single-Threaded: Operates in one single flow, as opposed to Java where you can use multithreading to achieve parallel processing
Interpreted Language: Basically means it gets compiled one line at a time as needed, whereas Java is a Compiled language since the entire file/program
                    must be valid before it can be run
Multi-Paradigmed: Used in multiple different ways (OOP, Functional, etc.)

So when learning a new programming language, you'll often find that pieces of logic are very similar (for-loops and if-else statements)
but the syntax may be slightly different so it's good to return to basics as needed
*/

// Creating a variable
var x = 10;
// Notice here that we didn't declare a datatype

// In JS, types can change dynamically so we can reassigned x to other variable types
x = "Ten"
x = false
x = true
x = {
    name: "bryan"
}
x = 10
// All of these are valid statements

// How can we go about printing this?
console.log(x)
console.log("Hello, World!")


// Let and Const

/*
Due to the global nature of the variable assignment keyword 'var' new keywords were introduced to change the functionality and allow for locally
scoped variable. Let and Const were the new keywords added in ES6 to allow for this change. Let functions very similarly to var and const is
used for variables that are constants (values that don't change).

What is ES6?
The standards for JavaScript are laid out by this thing called ECMAScript, so they declare the different versions that we keep track of 
(ES5, ES6, ES2020)
*/

let y = 5;

y = "Five"

const z = 6;

// z = "Six" 
// This shouldn't work since z is a constant
console.log(y)
console.log(z)

/*
Datatypes

Just because there are dynamic variables inside of JS that doesn't mean there are no datatypes, there definitely are, they vary slightly from Java

Primitive Types: number, boolean, string, undefined, null, BigInt, and Symbol

Number: A number, could be any number, positive negative decimal it doesn't matter
Boolean: True/False
Strings: Collection of text (Can be declared with "", '', ``)
Undefined is like declaring a variable but not giving it a value
Null is the absence of a value

Objects
Objects in JavaScript are created using key-value pairs and should look relatively similar to JSON Format (JavaScript Object Notation)
*/

let sampleObject = {
    username: "bryanserfozo",
    password: "password",
    empId: 51,
    isMarried: false
}


// Control Flow
// Control Flow is all of your loops and conditional statements that affect the flow of logic in your program

// If-else

let a = 0

if (a < 0){
    console.log("a is negative")
} else if (a == 0){
    console.log("a is zero")
} else{
    console.log("a is positive")
}

// For loops

for (let i = 0; i< 5; i++){
    console.log("The number is " + i)
}

// There are other For-Loops which we'll talk about in a minute but we'll move on from there

// While loops
let bool = true
let counter = 1

while (bool){
    console.log("Counter is " + counter)
    if (counter == 7){
        console.log("All done!")
        bool = false
    }

    counter++
}

// Do-While
// Always executes at least once even if the condition is false
// Value of counter right now is 8

do{
    console.log("Counter value from do while loop: " + counter)
} while (counter < 0)



console.log("----------------------")
// New control flow 

// For-Of loop
// Is used for iterable things like arrays to execute some log for every element in the array
// Recall an array is a series of values
let simpleArray = [1,2,3,4,5]

for (let num of simpleArray){
    console.log(num*num)
}

// For-In loop
// Allows us to iterate over an object's properties and do some logic based off each one

let person = {
    name: "Kaitlyn",
    age: 25,
    isMarried: false,
    favoriteFood: "Steak"
}

// Now that we have an object we can iterate over it and do some logic on each step
for (let prop in person){
    console.log(prop + ": " + person[prop])
    if (person[prop] == "Steak"){
        person[prop] = "Fish"
    }
}

console.log(person)