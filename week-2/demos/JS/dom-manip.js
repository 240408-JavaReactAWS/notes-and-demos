// DOM Manipulation is the practice of using JS to affect the structure of an HTML Page
// Recall the DOM (Document Object Model) is a tree model that holds all the elements and attributes from the HTML page

// Our GOAL: Target a specific HTML element and append child elements to it

// For this demo we'll start by listing the user objects inside an Array but later on we'll pull it from an API
let users = [
    {
        id: 1,
        username: "bryanserfozo",
        password: "password"
    },
    {
        id: 2,
        username: "janedoe",
        password: "evenStrongerPassword"
    },
    {
        id: 3,
        username: "kaitlyn",
        password: "epassword"
    }
]

// GOAL is to show these users on the HTML page dynamically

// FIRST we need to find an element to target
let userContainer = document.getElementById("UserContainer")
// This lets me target the element specifically by using its id field
// We could multiple elements based off things like class or tag name but here we only need one

function populateUsers(users){
    // Inside of this function we'll dynamically iterate over the list of users and create an html representation for each user

    for (user of users){

        // Now we're doing some logic for every element in the array

        // What I want to do here is create a div (division for related elements) for each user and add their info inside
        let uDiv = document.createElement('div')

        // Here we'll start add in the info to the div
        // We can access the inside of an HTML element by using or manipulating its innerHTML property

        // uDiv.innerHTML = "<h2> " + user.username + " </h2>"

        /*
        Template literals were introduced in ES6 and allow for an easier way to format text when using vairables or expressions
        Simply put the JS expression between ${} and we should be able to see it once it resolves
        NOTE: You'll need to use `` to define the string
        */
       uDiv.innerHTML = `
            <h2>${user.username}</h2>
            <p>ID: ${user.id}</p>
            <p>Password: ${user.password}</p>
       `

        // How can we manipulate the div we've created to give it other attributes/properties
        uDiv.setAttribute('class', 'user')
        uDiv.setAttribute('id', `user-${user.id}`)

        
        // After creating and initializing the values in our new div we actually need to add it to the page

        userContainer.appendChild(uDiv)
    }
}

// populateUsers(users)

// Let's put a pause on this an switch over to events to talk about those

// PROMISES

// Promises are the promise of a future value in JS, we don't know exactly whether the promise will be succeessfully fulfilled or not so we can
// pass functions to this promise to handle both possibilities

let promise = new Promise(function (resolve, reject){
    // The promise will take in 2 callback functions, one for successful operations and the other for errors and use them as needed

    let x = 5
    let y = 3

    if (x >= y){
        resolve(x)
    } else {
        reject(x)
    }
})

// We can view the value of the promise by using consumer functions that chain into it

promise
    .then((x) => x = x * 2) // The current value of x is 5*2 = 10
    .then((x) => console.log(x)) 

// We can use other consumer functions with promises to show the result of a promise
promise
    .then(() => console.log("We resolved"))
    .catch(() => console.log("There was an error"))
    .finally(() => console.log("This prints out no matter what")) 

/*
A lot of this might seem ethereal for now let's actually a promise for something useful and see how it works

To get the information we want from our backend we were making HTTP calls with Postman last week.
That was good then when we didn't have a front end but now we want to build a frontend that communicates with the backend

GOAL: Send a GET Http request to our backend and do something with the result
*/

let data = fetch("http://localhost:8080/users")
// Recall that this returns a Promise object

// Once we get the response we'll need to parse it and call the populateUsers method on it
data
    .then((data) => data.json())
    .then((response) => populateUsers(response))
    .catch((error) => console.log("There was an error with the fetch request!"))

