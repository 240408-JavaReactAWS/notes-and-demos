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



# React

* What is React? Is it a library or framework? What's the difference between those?
  * React is a UI library. It's a library not a framework because you call it in your code; it can be integrated into part of or the entire UI
* Why use React?
  * We use it to make `single page` front end applications
  * Lets us dynamically create and render components without having to refresh pages
* What is the difference between React and ReactDOM?
  * React is a higher level package for both ReactDOM and React Native
  * ReactDOM is strictly the web implementation of React
* How many HTML pages does our React App use?
  * We render in one SINGLE page
  * It is constructed in a way that we only ever need to render one DOM object
* What is SPA?
  * Single Page Application is a website design approach where each new page's content is served not from loading new HTML pages but generated dynamically with JS's ability to manipulate the DOM elements on the existing page itself
* What are some benefits of SPA?
  * Allows users to contineu consuming and interacting with the page while new elements are being updated or fetched, and can result in much faster interactions
* What are some downsides of SPA?
  * Accessibility
  * SEO rankings
  * If your content is purely static, it can worsen initial load times
* What is the package.json?
  * Lists our dependencies
  * Lists our scripts
    * Start, test are aliases for `npm run [script]`
  * Run the build script to show the target folder
* What are node_modules?
  * Houses our dependency files
* What is gitignore?
  * Auto-generated by create-react-app to prevent us from pushing certain things to github repos
* What is the build folder?
  * After running the command `npm run build` a folder called build is created with our self-container app
* What is ReactDOM.render?
  * ReactDOM takes 2 arguements
    * The element to render
    * The location to add the element to in the DOM
* What is react.createElement?
  * react.createElement("h1", { style: { color: "blue" }}, "Hello world from react")
* What is the App.tsx? Why do we structure it in that way?
  * Main entrypoint for our application
  * This is where we render the root node for the DOM object
  * "A lot" of the time this is where we do our app routing
  * It's structured like this because easy to maintain and at the end of the day we only want one root for everything else
* What are the roles of Babel and Webpack?
  * Babel
    * Free open source JS transpiler or transcompiler that will turn things like JSX and tsx into valid JS code
    * Make sure to start all components with capital letter, this is how Babel knows its a component it has to transpile
  * Webpack
    * This is a packaging tool that takes all the different files and modules and build them into a web package to use within the browser
* What does it mean to be component-based? What does a component represent?
  * Components are reusable parts of the UI that maintain a state and get rendered to the page
* Tell me how you would start up a new React project? What does 'create react app' setup for you?
  * You should use `npm` to install `react` and any other dependencies
* How would you create a component?
  * Create either a JS class or function
* Why use components?
  * Increase reuseability and maintainability
  * Also helps loosen code coupling within the application
* What does a component have to render/return?
  * A component must return/render a JSX view of some type
  * This view can only have one single root JSX tag
 * We can list the component as many times as we would like to as long as it's wrapped in another tag
  * Are valuable for their reusability and their ability to manage their own independent state
* What are "props"? What is state? What data should be put in which?
  * Props are readonly; they are passed into the component
  * State is the immutable object representing the current state of the component
* What is the lifecycle of a component?
  * Constructor - use for initializing state
  * `render()` - returns the JSX to be compiled and rendered onto the browser
  * `componentDidMount()` - runs once, after the component is rendered
  * `componentDidUpdate()` - runs after every update of the component
  * `componentWillUnmount()` - runs before the component is removed from the DOM
* What is the difference between a functional and a class component?
  * Functional - before hooks, could not modify state and only used as 'display' component
  * Class - utilizes lifecycle methods and `render` method
* What are React hooks? How do we use them?
  * React hooks are functions we can call in order to access certain functionalites
  * They all start with `use` such as `useStyle()`, `useState()`, `useEffect()`
  * We call them hooks because they allow us to `hook` into certain aspects of a component whether it be style or lifecycle
* What do these hooks let us do?
  * `useState()`
    * We can add `useState()` to our imports
    * `useState()` is a function that returns an array of the following
      * Index 0, we have the state object
      * Index 1, we have the function to use to update that object state
  * `useEffect()`
    * Allows us to manage side-effects that aren't related to rendering the component
    * Typically actions such as logging or fetching data will utilize `useEffect()`
    * Takes in 2 params
      * A callback function denoting what action you want to perform
      * A dependency array of state values that act as triggers for the action on change
  * `useReducer()`
    * Allows us a better way of updating complex state logic
    * Takes in 2 params
      * The callback function with logic to update the state
      * The intial state of the object
* How do we save info in a component?
  * To save info we can use React component states
  * If we are using class components, we can set this initial state directly in the constructor 
  * If we are using a function component, we can use the `useState()` hook to create and offer a method to change state
* What is the purpose of a container component? 
  * A container component holds the state that it then passes to "display" child components
* What is routing and how would you do routing in React?
  * Need to install `react-router` using `npm`
  * `npm install react-router@next react-router-dom@next
  * Use the `BrowserRouter` component to provide context where routing will work
  * Use `Link` component to link to a particular route
  * Use `Switch` and `Route` components to link routes to particular components that get rendered
* What is JSX? What does it compile into? How to include JS code in JSX? 
  * JSX is an extension syntax to JS - it lets you write HTML and JS code together; compiles into JS
  * Not required but helps with development
  * Write JS code by using curly braces {like this}
* What are some of the differences between JSX HTML and normal HTML?
  * Attribute names
    * Example class => className
    * You can also create your own "attributes" which are called props
  * Tag names
    * HTML tag: `<p>`
    * Component tag: `<SomeComponent>`
    * We can directly add JS into JSX HTML by using { } where as in HTML you cannot do this
* How do you handle events in React?
  * Use event binding: `<button onClick={myClickHandler}></button>`
  * For sending parameters: `<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>`
  * Define `myClickHandler` function in your component somewhere
* What is Data Binding?
  * Data binding is when we bind data to a specific value in the state
  * For example, if we had login form and we had a username input, we want to bind whatever the user types in, to the username value in the state
```javascript
const [username, changeUsername] = useState("")
const [password, changePassword] = useState("")

const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  changeUsername(e.target.value)
}
const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  changePassword(e.target.value)
}
```
* Does React have 1-way or 2-way data binding and data flow?
  * 1-way data binding
  * Data always flows "down" to components nested within them
* If a parent component has data that a child component needs to access, what should you do?
  * Pass in the data through `props` to the child
* If you have state in two child components that a parent component needs access to, what is a good solution for that?
  * Lift the state up to the parent component and then pass it into each child via `props`
* How do you do conditional rendering?
  * Use an `if` statement in the `render()` function OR
  * Use a boolean value with logical `&&` operator in your JSX like below
```jsx
render() {
    return <div>{myBooleanValue && <SomeComponent />}</div>
}
```
* What should you remember to include as a prop for lists of elements?
  * Pass in a `key` prop that uniquely identifies the list item
  * Helps React know which items have changed, been added, or removed
* How do we use TypeScript in React?
  * `npm install typescript` to install TypeScript, `npx create-react-app --template typescript` to create a React App with TypeScript
* What are some pros/cons of using TypeScript in a React application?
  * Pros: strict type checking; intellisense; features like interfaces, decorators, and access modifiers
  * Cons: adds overhead and extra transpilation; may be unnecessary for small projects
* How would you handle forms and submitting forms with React?
  * Use "controlled components" where the state of the form is based on the state of the React component
  * Not recommended, but you can use uncontrolled component with a Ref to get form values from the DOM
* How do you recommend making an AJAX call in React? Which library have you used? Why not use `fetch` directly?   
  * Can use AJAX itself or `fetch`, but a library like Axios is a good idea b/c can centrally configure all requests
  * Example: need to include JWT token with every request for authorization
* How do you test React components and code that you write?
  * Jest is a unit testing tool you can use to test your code
  * Enzyme is a testing utility to make it easier to test your components' output
* What are some options for styling your React components?
  * Preferred: use the `className` prop
  * Optional: use inline styling, or "CSS-in-JS" where the styling is defined in JS
* What is the virtual DOM?
  * An "ideal" or "virtual" state of the UI that is managed by React and kept in sync with the actual DOM
  * Improves performance by only requiring changing the actual DOM when needed
* How does virtual DOM compare to the DOM?
  * Kept in sync with the real DOM by a library such as ReactDOM. The process is called reconciliation
  * You tell react what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out attribute manipulation, event handling and manual DOM updates that you would otherwise have to do

