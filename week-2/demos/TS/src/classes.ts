// Since we're in TS and TS is an OOP language it makes sense that we can define classes and use them
// NOTE: Classes also exist in JS but it's multi-paradigmed and we don't typically focus on creating too many classes in JS

class Animal{
    // Fields
    // Other things to introduced are the readonly modifier (acts like final in Java)
    readonly name: string;
    // There are access modifiers as well
    private species: string;

    // Constructor
    constructor(name: string, species: string){
        this.name = name;
        this.species = species
    }

    // Getters and setters
    get getSpecies(): string {
        return this.species;
    }

    set setSpecies(species: string){
        this.species = species;
    }

    // Methods
    move(feet: number) : void {
        console.log(`${this.name} moved a total of ${feet} feet`)
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
class Dog extends Animal{
    bark(): void {
        console.log("ARF ARF ARF")
    }

    // Polymorphsim (Many forms: overloading and overriding)
    move(feet: number): void{
        console.log(`The dog ${this.name} moved a total of ${feet} feet. What a good boy!`)
    }

}

let cash = new Dog("Cash", "Pit Bull");
cash.bark();
cash.move(0);

// Abstraction
// We can create abstract classes with abstract methods
abstract class Car{
    abstract drive(): void;
    // Implementing class will have to provide functionality for the drive method
    alarm(): void {
        console.log("BEEP BEEP BEEP")
    }
}

class Jeep extends Car{
    drive(): void{
        console.log("The Jeep drove around the block")
    }
}

let greenJeep : Jeep = new Jeep();
greenJeep.alarm()
greenJeep.drive()