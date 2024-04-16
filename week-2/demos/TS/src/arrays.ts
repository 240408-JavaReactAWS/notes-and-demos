// Arrays in TS are very similar to Arrays in JS we just now need to specify the datatypes of the values inside of the array
let numArray: number[] = [1,2,3,4,5];

// These hold all the same properties as those in JS (indexed, can expand in size etc) only major difference is that the types need to specified
let stringOrBoolArray : (boolean | string)[] = ["String", false, "Another String", true]

// We should also note that TS gives us access to certain generics that we can use
// Arrays are one area where we can use them but they're not very useful here, we'll make more use of them later
let genericArray : Array<number | boolean> = [1, 2, false, true, 5]

// TUPLES 
// Tuples in TS are FIXED LENGTH data structures where you specify the data type at each point

// Let's use an HTTP Response for our example
// HTTP Response contains a variety of things but 3 major pieces: status code, http headers, body (JSON String format)
// So if I wanted to create a simple data structure to hold this I might use a tuple

let httpResponse: [number, string[], string]

// So if I wanted to use this it MUST have 3 elements and those elements must match the datatypes listed about

httpResponse = [201, ["Content-Type=application/json", "Authorization=username"], "{'username': 'janedoe'}"]

// This is useful for methods that return multiple things at once which we may not see too much of but it's there nonetheless