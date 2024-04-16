"use strict";
// In this class we'll go over some of the other features that are somewhat miscellanous and don't belong with the other
// There are a couple built in utility types to expand on your basic interface
// Partial -> Makes all fields optional
let samplePerson = {
    name: "Leroy",
    age: 26
    // Generally you'll need to specify a value for every field
    // But what if you don't know what values you will/won't have?
};
// Util types will use Generics to apply their functionality
let partialPerson = {
    age: 37
};
// Another utility type that's available is Readonly which makes every field read only
let permanentPerson = {
    name: "Please Change me",
    age: 24
};
// permanentPerson.name = "Something else";
let multiUtilTypePerson = {
    age: 24
};
// multiUtilTypePerson.age = 25;
console.log(multiUtilTypePerson.name);
// Literals and As Const
// Kinda similar to how an enum might work but we're giving specific options
let sampleLiteral = "hello";
// Syntax here is a little strange but basically you're saying the value of the variable can only be the literal values on the right side
// sampleLiteral = "hey";
// WHY WOULD WE DO THIS?
function sendHttpRequest(body, method) {
    // Imagine this does some logic
}
sendHttpRequest("String", "POST");
// By Using literals you can specify exactly what options a variable can be 
