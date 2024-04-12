// Arrays are most similar to Lists in Java 
/*
Arrays in JS are ordered/indexed, and dynamic in size, (Recall Arrays are fixed in size in Java)
There are various method associated with them
*/

let simpleArray = [1, "two", false, {property:"value"}, 1]

// We've already seen that we can iterate over this with a special loop called a for-of loop

simpleArray.push('2')
// push allows use to add a value to the end of the array

// What on earth is a callback function? This is what the forEach method takes in
// Callback function is simply just a function that gets passed to another function as an argument

simpleArray.forEach(function(x){
    console.log(x);
});

console.log('-------------------')

// There are two major methods for removing values: shift and pop
// Shift removes the first element
// Pop removes the last element

let x = simpleArray.shift()
let y = simpleArray.pop()

console.log(x)
console.log(y)

// Another couple fun mehtods we can use on Arrays are filter and map which function almost identical to filter and map from the Java Stream API
console.log('------------------')
let numArray = [1,2,3,4,5,6,7,8]

// Map will take in a callback function and apply the function to each value in the array
// We can actually store this value back in the array itself as so
// numArray = numArray.map(function (num) {
//     return num*num;
// })

// Arrow functions operate just like lambdas in java with slightly different syntax
numArray = numArray.map((num) => {
    return num * num
})

numArray.forEach(function(x){
    console.log(x);
});

console.log('--------------------')

numArray = numArray.filter((x) => {
    if (x % 3 == 0){
        return true
    } else {
        return false
    }
})

console.log(numArray)