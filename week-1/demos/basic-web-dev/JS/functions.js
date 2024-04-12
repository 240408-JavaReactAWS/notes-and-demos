/*
Functions in JS are very similar in nature to those you'd see everywhere else
Basically just a block of repeatable code that can be called with different parameters if necessary
*/

function simpleFunction(){
    // Notice that unlike java, I don't have to declare really anything (return type or datatypes at all)

    console.log("I'm inside a function!")
}

// Why does nothing appear?
// we have to call the function to use it
simpleFunction()

// Let's create a function to tell whether a number is even or not
function isEven(num){


    if (num % 2 == 0){
        return "Even"
    } else{
        return 'Odd'
    }
}

console.log(isEven(7))
console.log(isEven(4))


// Default values
// This is going to be similar to method overloading in Java (same method signature but different number of paramters)
// We'll us a default parameter in case one was not provided

function multiply(x, y=1){
    // Default value of y is 1
    return x*y
    // If they provide 2 values, we'll multiply them together, otherwise we'll multiply the first value by 1
}

console.log(multiply(7,5))

console.log(multiply(9))

// This is similar to having 2 functions for the price of 1 since you can decide what functionality to take based off how many values were provided

let anonFunction = function (x){
    return x / 2;
}

// There's also a thing called an IIFE (Immediately Invoked Function Expression)

let num = 0;

(function(num){
    console.log("I am self invoked!")
    console.log(num)
})(5);

/*
Why do we care about this? What is it useful for?

Initialization ability make this useful for make a backend call right when loading up a page but we won't use it super often
*/


/*
Fun quirks of JS

Type Coercion and Truthy/Falsy

*/

// Truthy/Falsy
// In JS since types are dynamic they can be converted between one another and JS will attempt to do whenever it deems it necessary

// What happens here?
let str = ""

if (str){
    console.log("String is true")
} else {
    console.log("String is false")
}

// What is happening here?
// When JS attempts to convert some value to true/false it uses a set of rules it calls truthy/falsy

/*
1. If a value is not falsy, it is truthy

Falsy Values:
null,
undefined,
false,
empty string,
0,
NaN (not a number)
*/


// What situations is this useful?
// Maybe we want to check and see if a input box has been filled out
let usernameInput = 'jonsmith'

if (usernameInput){
    console.log("Good to sign in!")
} else{
    console.log("Username field needs to be filled out")
}

// Type Coercion
// As mentioned previously, JS will attempt to convert between datatypes if it deems it necessary
console.log('------------------------------')

let x = "3" / 4;

console.log(x)
// What happened here? JS determined it needed to convert "3" to 3 (number) before it could divide

// This can lead to some funky stuff if you're not paying attention

console.log(true + true + true)
// Convert true to a number => 1 + 1 + 1

console.log(5 == "5")
// This is fine and dandy right now but what if I NEED to make sure the datatype is the same and the value is the same

// There are 2 equality operators in JS
// == checks the value of both sides to see if equal, will type coerce if necessary (loose eqaulity)
// === checks the datatype and value to make sure both are equal, will NOT type coerce (strict equality)

console.log(5 === "5")

// Hoisting is another interesting thing about JS
// As far as we have seen everything in this file has executed top to bottom in a straight line (barring some conditional statements)

// JS does this funny thing called Hoisting where is pulls functions and variable DECLARATIONS to the top of their scope before execution
// We've been working global scope almost entirely so far so we don't need to worry about scope

toBeHoisted()


function toBeHoisted(){
    console.log("Function has been hoisted")
}

printFunction(z)
// Why does this NOT throw an exception?
// Variable declaration is HOISTED but not the value
var z = 3;

printFunction(z)

function printFunction(num){
    console.log(num);
}

// How can we use hoisting to our advantage? 
// Basically allows us to define our functions wherever we want and will guarantee they should still work


