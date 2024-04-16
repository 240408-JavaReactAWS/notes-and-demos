"use strict";
// Since we're in TS and TS is an OOP language it makes sense that we can define classes and use them
// NOTE: Classes also exist in JS but it's multi-paradigmed and we don't typically focus on creating too many classes in JS
class Animal {
    // Constructor
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    // Getters and setters
    get getSpecies() {
        return this.species;
    }
    set setSpecies(species) {
        this.species = species;
    }
    // Methods
    move(feet) {
        console.log(`${this.name} moved a total of ${feet} feet`);
    }
}
// So now that we've defined a class we can create objects of that type
let perry = new Animal("Perry", "Platypus");
// We use the new keyword to create an instance of a class
// Let's check our access to certain fields
console.log(perry.name);
console.log(perry.getSpecies);
perry.move(5);
// perry.name = "Not perry";
// Other OOP Properties
// Inheritance
// We can inherit from other classes
class Dog extends Animal {
    bark() {
        console.log("ARF ARF ARF");
    }
    // Polymorphsim (Many forms: overloading and overriding)
    move(feet) {
        console.log(`The dog ${this.name} moved a total of ${feet} feet. What a good boy!`);
    }
}
let cash = new Dog("Cash", "Pit Bull");
cash.bark();
cash.move(0);
// Abstraction
// We can create abstract classes with abstract methods
class Car {
    // Implementing class will have to provide functionality for the drive method
    alarm() {
        console.log("BEEP BEEP BEEP");
    }
}
class Jeep extends Car {
    drive() {
        console.log("The Jeep drove around the block");
    }
}
let greenJeep = new Jeep();
greenJeep.alarm();
greenJeep.drive();
