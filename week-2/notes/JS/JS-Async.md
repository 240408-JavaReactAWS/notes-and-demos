# Intro to Asynchronous Javascript

program does not need to wait for a specific task that takes a long time

It simply start executing the function, then moves on to the next function while it finishes

-   You can send a request/start a lengthy function, and forget about it
-   Then when you receive the reponse/the function is finished you can handle it
-   You program does not need to wait for the response in the mean time

This is useful with API calls, and other processes that could hold up or "block" the execution of your programs main thread

## How Asynchronous Javascript Works

Javascript implements a stack where functions calls are stored

-   It uses a single thread to add, and call functions on the stack one at a time, until the stack is empty
-   This is how basic synchronous programming works

Javascript also has a built in queue, and the browser/node runtime environment has extra threads that can used by Javascript, the queue is used by the event loop

## Javascript Event Loop

When an asynchronous call happens, Javascript allows the browser thread/web api to handle the specific call, while moving on in the stack

Once the web api is done processing the function, it will return the callback or the response to the queue, then the next time the call stack is empty, the event loop will return response/callback from the queue

## Basic Animation of the event loop

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

<img src = "https://res.cloudinary.com/practicaldev/image/fetch/s--BLtCLQcd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://devtolydiahallie.s3-us-west-1.amazonaws.com/gif14.1.gif">

## Basic Steps of the Event Loop in JS

1. Asynchronous call gets added to the stack
2. JS decides to hand it off to the web api where it processes
3. Other functions can be added and executed on the call stack while the web api works
4. Once the web api has a response it gets added to the queue
5. The event loop checks the queue when the call stack is empty to see if something needs to be added to the call stack
6. Our response/callback is added to call stack and process as normal

https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

# Promises

Javascript uses promises for async opperations, they are placeholders for a future value. Many async functions return implicitly

Promises in Javascript are objects, and you create them using the new keyword

Promises take a callback function called the executor, this automatically runs the when the object is created

-   The executor also takes two callbacks, resolve and reject
    -   `resolve(value)` return the result of the job once it finishes sucessfully
    -   `reject(error)` is called when there is an error with processing the job

Promises have a property called status which gives us information about the state of the object. The promise can be in one of three states

-   pending
-   fulfilled
-   rejected

The promise objects connects the executor and any consuming functions which will receieve the result or the error from the promise

You would use `.then()` `.catch()` and `.finally()` methods on the promise object to consume (chain) the results or errors of the promise object

# Fetch API

fetch is a more modern and versatile way of making AJAX requests
The fetch API is provided by the window object, and provides the `.fetch()` method

-   `.fetch()` is used to send requests and returns a promise that is retrieved from the response
-   Successful requests get resolved, the returned promise will have the response body
-   Request that return an error HTTP-Status will be rejected

There are various methods you can use to access the response body of a success request:

-   `response.text()` read the response and return as text
-   `response.json()` parse the response as JSON
-   `response.formData()` return the response as FormData object
-   `response.blob()` return the response as Blov (binary data with type)
-   `response.arrayBuffer()` return the response as an ArrayBuffer (low level representation of binary data)

# async/await

introduced in ES8 to simplify asynchronous functionality

The async keyword denotes that a function will operate asynchronously via the event loop

-   Any function with the async keyword will implicitly return a promise object
-   Yuo can use any of the consumer function on the return of an async function, however there are nicer ways to handle these promises using await

The await keyword only works inside of async functions

-   await tells Javascript to wait for a promise to resolved before moving on
-   You can use await when calling any function that returns a promise, but it must be inside of an async function
-   It allows you to gather data, or wait for something while also not blocking the main thread

You no longer need to chain consumer functions together, making your code easier to read