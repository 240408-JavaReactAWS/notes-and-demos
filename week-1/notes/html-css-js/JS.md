# Javascript

High-leveled

-   memory management and garbage collection
-   easily human readible

Interpreted

-   browser reads the code line by line

Multi-paradigmed

-   supports multiple programming paradigms, such as procedural, object oriented, and functional

Dynamically Typed

-   no static type checking, no need to declare variable types, reassign them whenever

Singled Threaded

-   runs off the event loop, multi-threading is not possible

It is the most commonly used client-slide scripting/programming langauge

-   Runs on the browser
-   Primarily used to create dynamic webpages
-   Runtimes such as NodeJS which allow it to run outside of the browser

Javascript follows the specifications set out by ECMAScript

-   This is where JS gets its versions
-   For example some JS versions are ES5, ES6, ES7, ES2020

## Linking your HTML and JS

HTML supports the use of Javascript, with the `<script>` tag, you can either write JS directly inside of these tags or you can link an external file

-   Java script written inside of the script tags is called **Internal Javascript** and Javascript writeen in a different file is called **external javascript**
-   The script tag can go in the head or the body, best practice is the bottom of the body
-   To use an external JS file, you use the `src` attribute with a path to the external file

## Syntax and Variables

Syntax Rules:

-   Case sensitive
-   Semicolon are optional
-   Spacing doesn't matter
-   Single and multi-line comments (are the same as java)

Javascript variables:

-   Used to store data/values
-   Use the keywords `var`, `let`, and `const` to declare
-   Variables have a name and use the equals sign to assign them a value
-   Cannot be name a keyword, cannot start with a number or specicial character (except for $ \_) and cannot contain spaces
-   Literals in javascript are fixed values, aka you primitives

# Data Types

Javascript has 7 primitive datatypes:

-   string
-   number
-   boolean
-   null
-   undefined
-   BigInt
-   Symbol

Strings in Javascript

-   Simply text enclosed by single or double quotes

Numbers in Javascript

-   Can be positive or negative
-   Can be decimal or non-decimal
-   Include the special datatypes including infinity and NaN

Boolean in Javascript:

-   Simple true or false

Null in Javascript:

-   null refers to nothing
-   It is not the same as empty string or 0

Undefined in Javascript

-   Variable was declared but not initialized
-   var x;

Objects in Javascript

-   A set of key value pairs, the key is a string, the value can be anything, including another object or an array
-   You can access the object properties (values) using dot notation or brackets

# Type coercion

the process of converting a value from one datatype to another

There are two types of type coercion, explicit and implicit

-   Explicit occurs when we specify that we want the type changed to a new type
    -   `var num = new Number("3")`
-   Implicit occurs when JS will attempt to carry out your instructions by changing the type of the variable
    -   `var div = "3"/4`

# Arrays

An object that stores a list of values

-   Allowed to store any and all data types in a single array
-   Index starting at 0
-   Values can be accessed by the associated index inside of brackets
-   Arrays also include a property called length that indicates the number of elements in the array
-   Arrays are dynamic, the size will automatially grow as you add items
-   Arrays come with several built in methods:
    -   .push()
    -   .pop()
    -   .foreach()
    -   .filter()
    -   .map()
    -   .slice()

# Operators and Control Flow

Javascript operators perform some operation on single or multiple operands and produce a result

There are five types of operators in Javascript:

-   Arithmetic: -, +, \*, /, %, ++, --
-   Comparison: ==, ===, !=, >, <, >=, <=
-   Logical: &&, ||, !
-   Assignment Operators: =, +=, -=, \*=, /=, %=
-   Ternary Operator: condition ? value : value

Control Flow Statements:

-   if/else
-   for
-   for in
-   for of
-   while
-   do while

## Difference between == and ===

-   They both are used for comparison between objects
-   == compares two variables and does not take into account their data types
-   == has the ability to convert the datatypes to match in the comparison
-   === compare two variables and will check for strict type, meaning it checks to see if the type and the value are the same
-   === will only return true if the datatype and value match

### TLDR: === does strict comparison, type and value must be equal, == only checks the value

## Truthy and Falsy in Javascript

In Javascript any expression or value that results in the boolean false is considered falsy, these include:

-   boolean false
-   empty string ''
-   Undefined
-   Null
-   NaN
-   0

Everything else is considered truthy

# Functional Programming in JS

One of Javascripts many paradigms is functional programming, in this paradigm programmers attempt to break their entire program into small "pure" functions, whose main focus is "what to solve" instead of "how to solve". Typically, in functional programming your functions are simply expressions that will produce the same output every single time give the same inputs.

However, in Javascript we don't have to strictly follow this convention of "pure" functions, instead, we will be breaking our client side logic into these reusable functions that can be called from anywhere in the script. The important thing to take away from functional programming, is the use of functions themselves.

## Pass by value
In JavaScript, all function arguments are passed by value. This means that the value of any variable passed to a function is copied into the argument of the function. Any changes you make to the argument will not be reflected in the variable outside of the function.

# Functions

a peice of resubale code that can be called anywhere in the program

-   defined using the `function` keyword, and they can take as many parameters as you wish
-   you can use the `return` keyword if you want to return something

## Function Expressions:

known as an anonymous function, have no identifier/name, and are stored in a variable. This is possible because everything in Javascript is an object

-   example: `let func = function(){console.log(hello)}`

## Self-Invoking Functions / IIFE Functions

A self-invoking function is an anonymous function that is invoked immediately after its definition. It is also known as the IIFE (Immediately Invoked Function Expression) function.
It holds an anonymous function inside a set of parentheses (), which does the execution.

Syntax : `(function(){ code goes here...})();`

Example:
```javascript
(function(){
    // do this right now
    console.log("Look at me, I'm running");
})();
```


## Callback Function

a function that gets passed into another function as a parameter, then get executed once the original function is complete

-   This is helpful with asynchronous code
-   All functions are objects, so they can be passed as parameters to other functions
-   A callback function can also be created using the keyword callback

## Default Paremeters:

allow programmer to set a value to a function parameter incase no value is passed to the function



# Variable Scopes

The scope of a variable defines the lifetime and visibility of a variable in a Javascript program

-   the variable cannot be accessed outside of its scope

Two major divisions of scope: Global and Local

## Global Scope

accessible everywhere in the application, it has the lifetime of the application

## Local Scope

accessible only in their location

Local Scope is broken into Function and Block Scope

## Function Scope:

variables declared inside of a function are only accessible inside of the function, and their lifetime is the span of the function

## Block Scope:

Introduced in ES6, variables with the keyword `let` and `const` can only be accessed inside of their block code, lifetime again is just the span of that block of code

## Lexical Scope

Lexical scope is that a variable defined outside a function can access the inside another function defined after the variable declaration. The inner functions are lexically bound to the execution context of their outer functions.

Example:
```javascript
function func1(){
    var animal1 = "Lion";   //exist in Lexical scope

    function func2(){    //Inner Function

        var animal2 = "Tiger"; //exist in function scope
        console.log(animal1);
        console.log(animal2);

    }
    func2();
    console.log(animal2); // results error - due to it exist in function scope
}

foo1();
```
The result will be:
```
Lion
Tiger
error: animal2 is not defined
```


# Hoisting:

variables and functions are moved to the top of their scope before code execution

-   Only the declarations are hoisted, not the assignments
-   Only variables declared with the var keyword are hoisted out of block scope

# ES6 Features

# let and const keywords

let and const were introduced in ES6 as means of preventing hoisting from block scope

The let keyword allows you to declare a variable in block scope without it being hoisted

The const keyword also allows you to delcare a variable in block scope without being hoisted, except it is treated as a constant, so you cannot reasign it

It is now considered best practice to use let and const over the var keyword

# Arrow Functions:

-   a new simplified way to write concise functions
-   lookes like this `let func = (args) => expession`
-   Multi-line arrow functions must have curly braces around the expression

# Template Literals

Template literals are an easy way to create multi-line strings and perform string interpolation

-   Template literals are Strings that are enclosed by backticks `
-   It allows for embedded expressions, placeholders indicated by a dollar sign and curly braces `${expression}`
-   These expressions can be used to evaluate functions, or variables

# this keyword

The `this` keyword had multiple meanings based on where its used

-   `this` alone refers to the global window object
-   `this` in event handlers refers to the HTML element that receives the event
-   `this` in object method binding refers to the object

# strict

Declaring "use strict" in Javascript means that you will not be allowed to use:

-   undefined variables
-   any keyword as variable or function names
-   restricts some other nichee instances



