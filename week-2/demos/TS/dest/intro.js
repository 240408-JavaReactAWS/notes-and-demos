"use strict";
// This is a valid TS file, note the .ts extension
// Just as a reminder, TypeScript is a typed superset of JS so it all JS is valid TS but it includes some extra functionality
let sampleVariable = "Hello World!";
// This contrains the datatype of sampleVariable so now it can only hold strings
sampleVariable = "Another String!";
// Datatypes in TS
/*
String -> Strings of text
Boolean -> True/false
Number -> numbers, all kinds
Undefined -> a variable declaration with assignment
Null -> The absence of a value
Any
Void
Enums
Tuples
Arrays
Never
*/
// Explicit type declaration
let x = 5;
console.log(x);
// Implicit Type declaration
let bool = true;
console.log(bool);
// bool = "Something else"; // Doesn't work because bool is implicitly marked as a boolean value
/*
Why do we care about this?

The main idea with TypeScript is to have the functionality of JavaScript but with the strength of a strongly types language
Essentially we just want to be more mindful of types
This helps in a couple ways
    - Reduces the fun quirks that JavaScript has so you don't have to worry about random type coercion or anything like that
    - It's easier for larger groups on projects since you can exactly what type a variable is so there's no confusion (debugging lifesaver)
    - You get better and more consistent access to Intellisense
        - What is Intellisense? This is our IDE giving us the properties of an object, parameters for methods, etc. Basically you get more detailed
        and consistent help from your IDE when developing

*/
// Any is used in TS when we want to avoid type checking entirely
let y = true;
y = "String";
y = 6;
// All of this is valid since y can have any type, generally you shouldn't use this too liberally since we use TS for typechecking anyhow
// Let's say theres a situation where you need a variable to be either a boolean or a string but it cannot be any other type
// UNION TYPES
// Basically allows us to combine types for a variables so they can be either or
let boolOrString = true;
boolOrString = "true";
// Let's talk about void
// VOID is used as a return type for a function that returns nothing
function myFirstFunction(message) {
    console.log(message);
}
myFirstFunction("Passing in a String");
// Let's imagine we have a function that takes in a more complex data type than these simple ones
function sendOfferLetter(emailObject) {
    console.log(`Hello ${emailObject.email}, welcome to our company. We'd like to extend an offer for the position of ` +
        `${emailObject.position} with a starting salary of ${emailObject.salary}`);
}
// To utilize a function like this I need to create an object that matches the shape of the input parameter
let sampleEmailObject = {
    email: 'bryanserfozo1234@example.com',
    position: 'Java Full Stack Developer',
    salary: 80000
};
// we can now pass this object to the function and it should work fine
sendOfferLetter(sampleEmailObject);
// Just to check this out and see how we can verify the object is correct, let's try a wrong email object
let wrongEmailObject = {
    email: 'ethan@revature.com',
    opportunity: 'Jave Full Stack Developer',
    name: 'Ethan'
};
// We can use this on objects to verify they fit the shape
let emailTypeAlias = {
    email: "",
    salary: 1234,
    position: ""
};
function sendDifferentOfferLetter(emailObject) {
}
// What if we run into a scenario when we don't NEED all of these fields?
// I was always told it's rude to ask someone's age so maybe this shouldn't be required
let p1 = {
    firstName: "Jon",
    lastName: "Smith",
    age: 43,
    isMarried: true
};
let p2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    isMarried: false
};
// NEVER Data Type
// This is generally something that you won't use very often but it used to specify when a function will never return a value
// Think of a method that only ever throws an exception
function neverFunction() {
    throw new DOMException();
}
// Not the most useful but there are certain scenarios where it exists so it has a data type
