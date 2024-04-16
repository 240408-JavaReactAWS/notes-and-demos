"use strict";
// Enums are very similar to what we see in Java when working with ENUMS
// An Enum is an enumerated list of constants
// There are 2 major types of enums in TS
// String enums
// Number enums
var Roles;
(function (Roles) {
    Roles[Roles["Customer"] = 1] = "Customer";
    Roles[Roles["Teller"] = 2] = "Teller";
    Roles[Roles["Admin"] = 3] = "Admin"; // this is 3
    // This is a number enum since the variables aren't assigned to string values
})(Roles || (Roles = {}));
function printRoleNumber(role) {
    console.log(role);
}
// Testing against various roles
printRoleNumber(Roles.Customer); // 1
printRoleNumber(Roles.Admin); // 3
// We can also call this with a different syntax
printRoleNumber(Roles['Teller']); // prints 2
// When might this be useful?
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND"; //404
})(StatusCodes || (StatusCodes = {}));
// Let's say I have a method that checks if a status code is an error or not
// Recall status codes greater than or to 400 are errors
function testStatusCode(statusCode) {
    console.log(statusCode);
    if (statusCode >= 400) {
        return true;
    }
    else {
        return false;
    }
}
console.log(`Is this an error code? ${testStatusCode(StatusCodes.CREATED)}`);
// String enums 
// String enums are a useful way to store constant strings that get used over and over
var Directions;
(function (Directions) {
    Directions["North"] = "UP";
    Directions["South"] = "DOWN";
    Directions["West"] = "LEFT";
    Directions["East"] = "RIGHT";
})(Directions || (Directions = {}));
// Here we'll have to specify the string value since it can't auto increment like it does with numbers 
