// Enums are very similar to what we see in Java when working with ENUMS
// An Enum is an enumerated list of constants

// There are 2 major types of enums in TS
// String enums
// Number enums

enum Roles{
    Customer = 1, // This gives customer the value of 1 (if unspecified, the default starting number is 0)
    Teller, // It auto increments so this is 2
    Admin // this is 3

    // This is a number enum since the variables aren't assigned to string values
}

function printRoleNumber(role: Roles): void{
        console.log(role)
}

// Testing against various roles
printRoleNumber(Roles.Customer) // 1
printRoleNumber(Roles.Admin) // 3

// We can also call this with a different syntax
printRoleNumber(Roles['Teller']) // prints 2

// When might this be useful?
enum StatusCodes {
    OK = 200,
    CREATED, // 201
    BAD_REQUEST = 400,
    UNAUTHORIZED, // 401
    PAYMENT_REQUIRED, //402
    FORBIDDEN, //403
    NOT_FOUND //404
}

// Let's say I have a method that checks if a status code is an error or not
// Recall status codes greater than or to 400 are errors

function testStatusCode(statusCode: StatusCodes) : boolean{
    console.log(statusCode)
    if (statusCode >= 400){
        return true;
    } else{
        return false
    }
}

console.log(`Is this an error code? ${testStatusCode(StatusCodes.CREATED)}`)


// String enums 
// String enums are a useful way to store constant strings that get used over and over
enum Directions{
    North = "UP",
    South = "DOWN",
    West = "LEFT",
    East = "RIGHT"
}

// Here we'll have to specify the string value since it can't auto increment like it does with numbers 