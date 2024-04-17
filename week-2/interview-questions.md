# HTML-CSS QC Questions 

1. What is HTML
 
2. What is the structure of an HTML document? List some tags. What is `<head>` used for? `<body>`?

3. What is a doctype?

4. What is the tag for an ordered list? Unordered list?
 
5. What are some HTML5 tags? Why were HTML5 tags introduced?
 
6. Do all tags come in a pair? What are the other things inside tags called? list some.
  
7. What is the syntax for a comment in HTML?
  
8. Give me the HTML markup for a table.

9. What are some tags you would use in a form?
  
10. What is CSS? what are the different ways of styling an HTML file? Which is best? why?
  
11. Describe the CSS box model.

12. Which way has highest priority when styles cascade: inline, internal, and external.

13. Syntax for styling an element? What is a class and how to style them? What is an id? how to style? difference?

14. What if I want to select child elements, What syntax is that?
  
15. Can I select multiple elements at once? How?
  
16. What is a psuedo-class? What is syntax for selecting that?
  
17. What is Bootstrap?


# JavaScript

## Language Fundamentals

### Basic

* What is JavaScript? What do we use it for?

* Can we run JavaScript in a web browser, on a server, or both?

* What are the benefits of JS over your core language? Drawbacks?

* What programming paradigm(s) does JS support?

* What are the data types in JS?

  * What is the type of NaN? What is the isNaN function?

  * What is the data type of a function?

  * What about an array?

  * What is the difference between undefined and null?

* What are JS objects? what is the syntax?

* Use the object literal syntax to create an object with some properties

* What are arrays in JS? can you change their size?

* List some array methods and explain how they work.

* What is JSON? Is it different from JS objects?

* What are some ways you can use functions in JS?

* What are the different scopes of variables in JS?

* What are the different ways to declare global variables?

* Is it a best practice to use global variables? Why or why not?

* If you declare a variable `var` inside a for loop is that block scoped or function scoped?

* If you declare a variable `let` inside a for loop is that block scoped or function scoped?

* What are callback functions? What about self-invoking functions?

* What is a truthy or falsy value? List the falsy values.

* What is the difference between == and ===? Which one allows for type coercion?

* What is the difference between `for of` and `for in`?

* What is the difference between a do-while and a while loop?

* What is the difference between `console.log(++x)` and `console.log(x++)`?

### Intermediate

* What is function and variable hoisting?

* What is closure and when should you use it?

* What does the "this" keyword refer to?

* Explain the concept of lexical scope

* How would you rewrite this using an anonymous function? Arrow function?

* What is the difference between `setInterval()` and `setTimeout()`?
  * How would you stop a `setInterval()` once it has been set?
  * Advanced: How do they work with regards to the callback queue?

* How would you handle an error in JS?

* What attributes does an Error object have?

* What is an Immediately Invoked Function Expression?
  * How would you write one?

## ES6+

### Basic

* What standard is JS based off of?

* What is the difference between var, let, and const keywords?
    
* How would we rewrite this code with a template literal?

```JavaScript
let n = 'Dorian';
let message = 'My name is '+n;
console.log(message);
```

### Intermediate
* What’s the difference between a normal function declaration and an arrow function?
    
* How would you set default values for parameters to a function?
    
* Explain the async/await keywords. Why is it preferred to use this instead of .then() methods?

* How do you interact with a Promise? When would it be appropriate to use a Promise?

## DOM Manipulation

* Explain the following code:

```javascript
document.getElementById("myid").addEventListener('click', (e) => {
  e.stopPropagation();
});
```

* What is the global object in client-side JavaScript? What are some built-in functions on this object?

* What is the DOM? How is it represented as a data structure? What object in a browser environment allows us to interact with the DOM?

* List some ways of querying the DOM for elements

* How would you insert a new element into the DOM?

* What are event listeners? What are some events we can listen for? What are some different ways of setting event listeners?

* What is bubbling and capturing and what is the difference?

* What are some methods on the event object and what do they do?

## Asynchronous Web

* What is the Fetch API?

* How do you send a Fetch request?

* How would you retreive JSON data from a Fetch request?

* How do you handle a failed request in Fetch?


# TypeScript

* What are the differences between TypeScript and JavaScript?

* What are the data types in TypeScript?

* What data type allows a TypeScript variable to act like a JavaScript variable?

* What are Enums? What are the different types?

* What are Union Types in TypeScript?

* What is the difference between an Array and a Tuple in TypeScript?

* What are Utility Types in TypeScript? Give some examples

* What is the difference between an Interface and a Type Alias in TypeScript?

* How can you create a class in TypeScript?

* How can you create a function in TypeScript?

* How can you acheive the different OOP pillars in TypeScript?

* What is the purpose of the tsconfig.json file?