# TypeScript

* [Typescript](https://www.typescriptlang.org/) is a **typed superset of JavaScript**. 
* It is an **open-source** and  **object-oriented programming language** that supports classes, interfaces, inheritance, modules, etc., developed by **Microsoft**. 
* It can be used to **manipulate the DOM** for adding or removing elements, similar to JavaScript. 
* It is **portable** across browsers, devices, and operating systems.
* It supports **strong typing** or **static typing**, unlike JavaScript. 
* TypeScript files are saved with a `.ts` extension and then compiled into JavaScript using the TypeScript compiler. 
* TypeScript gets compiled to JavaScript, which can run on any JavaScript runtime environment.(Eg: Node.js)

## Setting up Typescript

You can install Typescript using NPM (Node Package Manager) or the TypeScript Visual Studio Plugin.

After installing NPM, run the `npm install -g typescript` command to install TypeScript. To check the version, run the `tsc -v` command in the terminal. 

To compile the TypeScript code, run the `tsc` command, followed by the name of the file you are compiling. For example, `tsc hello.ts`. After compliation, typescript compiler creates a javascript file with the same name (hello.js). Run the javascript file using `node hello.js` command in the terminal. 

## Variable declaration in TypeScript

TypeScript variables also follow JavaScript variable naming conventions. Similar to JavaScript, we use `var`, `let`, and `const` keywords to declare variables.

Since TypeScript is a **strongly typed** programing language, we specify the type when we declare a variable.

The Syntax for declaring a variable in TypeScript - `let [identifier] : [type] = value; `. 

**Example:**
```typescript
let myString: string;
myString = 'This is a string';

myString =5; // Error: Type '5' is not assignable to type 'string'.
```

## Datatypes in TypeScript

The basic datatypes used in Typescript are:

### Boolean 

The `boolean` type is to represent a true or false value.

```typescript
let isEmpty: boolean = true;
```

### Number

TypeScript uses the `number` type to store decimal, hexademial, binary and octal literals in a variable.

```typescript
let a: number = 6;    
let b: number = 0xf00d;        //hexadecimal
let c: number = 0b1010;        //binary
let d: number = 0o744;        //octal
```

### String

TypeScript uses a `string` type that represents text characters enclosed within double quotes (") or single quotes ('). 

```typescript
let color: string = "yellow";
color = 'blue';
```
We can also use template strings, which can span multiple lines and have embedded expressions. 

```typescript
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
        I'm ${ age } years old.`;
```

### Undefined and Null

In TypeScript, both undefined and null have their own types named `undefined` and `null` respectively. By default, null and undefined are subtypes of all other types. So we can assign null and undefined to number, string, etc.

```typescript
let u: undefined = undefined;
let n: null = null;
```

### Any

We may need to describe a type of a variable that we do not know when we are writing an application. In this case, we can label the variable with the `any` type.

```typescript
let variable: any = 14;
variable = "maybe a string instead";
variable = false; 
```

### Void

In TypeScript, the `void` type is used as the return type of functions that do not return a value.

```typescript
function sayHello(): void {
    console.log("Hello!!!");
}
```
Declaring variables of type `void` is not useful, because we can then only assign null or undefined values to them.

### Arrays

Like in JavaScript, TypeScript allows you to work with arrays of values. We can use the type of the elements followed by [] or use a generic array type`Array<elemType>` for declaring the array type.

```typescript    
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let list: any[] = [1, "two", 3];
```

### Tuples

TypeScript introduced a new type called Tuple, which is an array with a fixed number of elements whose types are known.

```typescript
var employee: [number, string] = [1, "John"];
//Accessing Tuple
employee[0]; // returns 1
employee[1]; // returns "John"

var person: [number, string, boolean] = [1, "Steve", true];

// tuple array
var employee: [number, string][];
employee = [[1, "John"], [2, "Adam"], [3, "Jeff"]];
```

### Enum

TypeScript supports the `enum` type that allows us to declare a set of named constants. It is a collection of related values that can be numeric or string values.

```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```

### Never 

The `never` type represents a type of values that never occur. For instance, never is the return type for a function that always throws an exception or one that never returns.

```typescript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
```
## Classes in TypeScript

We know that TypeScript is an object-oriented programming language. The `class` keyword is used to declare a class in TypeScript. An instance of the class can be created using the `new` keyword.

Let's take a look at a simple class example:

```typescript
class Greeting {
    //fields
    name: string;
    //constructor
    constructor(name: string) {
        this.greeting = name;
    }
    //methods
    greet() : string {
        return "Hello, " + this.name;
    }
}
//creating an object
let greeter = new Greeting("James");
greeter.greet(); //returns "Hello, James"
```

### Inheritance

In TypeScript, we can implement an inheritance hierarchy using the `extends` keyword, similar to other object-oriented programming languages.

```typescript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();  // returns 'Woof! Woof!'
dog.move(10); // returns 'Animal moved 10m.'
```
### Access Modifiers

* **public** -  In TypeScript, each member is `public` by default. We can still mark a member `public` explicitly.
* **private** -  We can mark a member as `private` that cannot be visible outside of the class.
* **protected** -  If a member marked as `protected`, then the member can be accessed only by its containing class and deriving classes.

### Readonly modifier

We can make properties accessible but immutable by using the `readonly` keyword. Readonly properties must be initialized at their declaration or in the constructor.

```typescript
class Employee {
    readonly name: string;
    readonly dept_id: number = 123;
    constructor (name: string) {
        this.name = name;
    }
}

let e1 = new Employee("Grace");
e1.dept_id = "543"; // error! dept_id is readonly.
```

### Modules

In TypeScript, the code we write is globally scoped by default. TypeScript provides modules and namespaces to restrict scopes and also to organize and maintain a large codebase. All variables, classes, and functions declared in a module are not accessible outside the module. A module is created using the `export` keyword and used in another module using the `import` keyword.

To export a class, function or variable, add the `export` keyword at the begining.

```typescript
// 'module.ts' file
export function sayHello(){
    console.log("hello");
}

export class Employee{
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee(){
    console.log(`Employee Code: $ {this.empCode} , Employee Name: ${this.empName} `);
  
    }
}

export const maxLength : number = 1200;

```

The syntax for importing a module: `import { export name } from "file path without extension";`. For example , `import { Employee } from "./module";`

```typescript
//'main.ts' file
//importing the Entire Module into a Variable

import * as Emp from "./module";

console.log(Emp.maxLength); // returns '1200'

Emp.sayHello(); //returns 'hello'

let empObj = new Emp.Employee("Gavin" , 2);
empObj.displayEmployee(); // returns 'Employee Code: 2 , Employee Name: Gavin'

```


### Accessors and Mutators

TypeScript supports getter and setter methods to access and set class members. The getter and setter methods are created using  the `get` and `set` keywords.

```typescript
class MyClass { 
    private _width: number; 
    private _height:number; 
    get area() { 
        return this._width * this._height; 
    } 
    set width(newWidth : number){
        console.log("setting width for square...");
        this._width = newWidth;
    }
    set height(newHeight : number){
        console.log("setting height for square...");
        this._height = newHeight;
    }
} 
let obj = new MyClass();

obj.width = 10;
obj.height = 5;

console.log("area: " + obj.area);

//output will be:
//setting width for square...
//setting height for square...
//area: 50
```

## Decorators

A Decorator is a special kind of declaration attached to a class declaration, method, accessor, property, or parameter. Decorators are defined in the `@expression` format, where `expression` evaluates a function that called at runtime.

For the decorator `@frozen`, we write the frozen function as follows:
```typescript
function frozen(target) {
    // do something with 'target' ...
}
```

In TypeScript, we need to enable experimental support for decorators. In the tsconfig.json file, we set the **experimentalDecorators** compiler option property to true, in order to use decorators in our code.

**Example:** tsconfig.json
```json
{
    "compilerOptions": {
        "target": "ES6",
        "experimentalDecorators": true
    }
}
```

> Note:  By running `tsc --init`  command, the Typescript compiler automatically creates a tsconfig.json file in our working directory.

## Types of Decorators

There are 4 different types of decorators:

1. Class decorators
2. Method decorators
3. Property decorators
4. Parameter decorators


### Class Decorators 
A Class Decorator is declared before a class declaration that applied to the **constructor of the class** and is used to observe, modify, or replace a class definition.

We can define the `@frozen` decorator using the following function declaration:
```typescript
function frozen(constructor: Function) {
    console.log('-- decorator function invoked --');
    Object.freeze(constructor);
}
```
The class definition that uses `@frozen`:
```typescript
@frozen
class Greeter {
    name: string;
    constructor(name: string) {
	    console.log('-- this constructor invoked --');
        this.name = name;
    }
    greet() {
        console.log("Hello, " + this.name);
    }
}
```
### Method Decorators
 
A Method Decorator is declared before a method declaration, and is applied to the **Property Descriptor** for the method. They are used to observe, modify, or replace a method definition. 

**Example:**
```typescript
class Greeter {
    name: string;
    constructor(name: string) {
    console.log('-- this constructor invoked --');
        this.name = name;
    }
    @enumerable(false)
    greet() {
        console.log("Hello, " + this.name);
    }
}
```
We can define the decorator `@enumberable` using the following function declaration:
```typescript
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
```
The `@enumerable(false)` decorator is a decorator factory. When the `@enumerable(false)` decorator called, it modifies the [enumerable property](https://javascript.info/property-descriptors) of the property descriptor.

###  Property Decorator

Property decorators are used to listen to state changes on a class. 

**Example:**
```typescript
class Employee { 
  @logProperty
  public name: string;
}

//property decorator
function logProperty(target: any, key: string) {
 
  // property value
  var _val = this[key];
 
  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };
 
  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };
 
  // Delete property.
  if (delete this[key]) {
 
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
```
### Parameter Decorators 

A Parameter Decorator is declared before a **parameter declaration** and is applied to the function for a class constructor or method declaration.

**Example:**
```typescript
function greet(@required name: string) {
        console.log( `hello, ${name}`);
}

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    // parameter decorator definition
}
```

### Accessor Decorators

An Accessor Decorator is applied to the **property descriptor for the accessor**.

**Example:**
```typescript
class Student{
    private _id: number;
    private _name: string;
    constructor(id: number, name: string) {
 	this._id = id;
        this._name = name;       
    }

    @configurable(false)
    get id() { return this._id; }

    @configurable(false)
    get name() { return this._name; }
}

// Accessor Decorator
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```

The `@configurable(false)` decorator is a decorator factory. When the `@configurable(false)` decorator called, it modifies the [configurable property](https://javascript.info/property-descriptors) of the property descriptor.

## Interfaces

Interfaces allow us to create **contracts** that other classes/ objects can implement. Interfaces are defined using the `interface` keyword that includes properties and methods. We can have **optional properties**, marked with a "?" that do not have to be implemented.

The TypeScript compiler **does not convert the interface** to JavaScript. Instead they are only used for **type checking**.

**Example:**

```typescript
interface User {
    username: string;
    password: string;
    confirmPassword?: string; 
}

let user: User;

user = {username: 'Jack', password: 'supersecret'};  

user = {username: 'Jack', password: 'supersecret' confirmPassword: 'supersecret'};

// Compilation error : anything and anynumber doesn't exists in User
// The property name should be same
// user = { anything: 'anything', anynumber: 5};

// Compilation error 
// the password property value should be string
//user = {username: 'max', password: 123};

```

Interfaces can also contain **functions without the function body** which is used to ensure the function signature.

```typescript
interface CanDrive {
    accelerate(speed:number): void;
}

let car:CanDrive = {
    accelerate: function (speed:number) {
        // ...
    }
};

```


## References

* [Get TypeScript](https://www.typescriptlang.org/#download-links)
* [TypeScript Docs - 5 minutes overview of the Language](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript Docs - Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [TypeScript Docs - Classes](https://www.typescriptlang.org/docs/handbook/classes.html)
* [TypeScript Docs - Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
* [TypeScript Docs - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
