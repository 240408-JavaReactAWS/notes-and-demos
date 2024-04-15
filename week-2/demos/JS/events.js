// GOAL We want to make it so that whenever we click the create new user button it will do something
// Eventually we'll turn this into an HTTP Request so it'll talk to the backend when it creates a brand new user so we can have a full-stack app

// First we'll need to get the elements from our HTML page
let usernameInput = document.getElementById("usernameInput")
let passwordInput = document.getElementById('passwordInput')
let createUserButton = document.getElementById('createUserButton')


// So now that we have the elements themselves we'll need to do a couple things
// The easiest thing to do is listen for a click event and print out the results of the input boxes

async function submitNewUser(){
    // The goal is to call this function whenever the button is pressed and use it to do something

    // We need to get the current value of the boxes when the button is clicked, we use the .value property to get this

    let usernameValue = usernameInput.value
    let passwordValue = passwordInput.value

    // To try to match the format of the other page and to keep things uniform for our HTTP request we'll create an object
    // to store this info

    let user = {
        username: usernameValue,
        password: passwordValue
    }

    // Pretend this sends an HTTP request
    // console.log(user)

    // We'll send a fetch request from here!
    let data = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    console.log(data.body)
}

// Why does nothing happen? We've created our function but we need to apply that function to the button itself
// We need to add an eventlistener
// Event Listeners listen for a variety of events that could be anything from a keypress to a click or a mouseover or a general change to the 
// element

createUserButton.addEventListener('click', submitNewUser)

// Let's take a look at a bit more of a dubious method and create a keylogger
// We can print out each letter or key that is entered into the password field

function printPressed(event){
    // This method takes in the event object itself
    // What is the event object? It's a JS object that encapsulates the entirety of the event and allows you to gain specific information that
    // would otherwise not be available

    // We can leverage the key property of the event object to find out what key was pressed when the event happened
    console.log(`The key pressed was: ${event.key}`)

    // Other things this is useful for: determing what element was click, position of the mouse, etc
}

passwordInput.addEventListener('keypress', printPressed)

// An additional thing to note is that we can declare event listeners on the HTML page itself

function usernameMouseOver(){
    console.log("Username Input was Moused Over!")
}