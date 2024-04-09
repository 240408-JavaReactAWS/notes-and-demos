package com.revature.lambdas;

import java.util.function.*;

public class FunctionalInterfaceDriver {

    /*
    Java has a couple built in functional interface that are used by different built-in methods in java (we'll see some
    of this in a bit when we look at streams)

    Predicate -> Takes in a value, returns a boolean value denoting whether or not this passes the method called test

    Supplier -> Supplies a value, this is a function that takes in nothing but returns a value, the method is called get

    Consumer -> Opposite of Supplier, takes in a value and returns nothing, implements the accept method

    Function -> This is a simple function that takes in a value and returns a value, implements the apply method

    Note: This list is definitely NOT exhaustive, there are plenty of built-in functional interfaces that take in
    multiple values, have more complex function and work with specific data types
     */

    public static void main(String[] args) {

        // 1. Predicate
        // We want a true or false value to show if a number is odd or even
        Predicate<Integer> isEven = (x) -> x % 2 == 0;

//        Predicate<Integer> isEvenAnonClass = new Predicate<Integer>() {
//            @Override
//            public boolean test(Integer integer) {
//                return false;
//            }
//        };

        System.out.println(isEven.test(3));
        System.out.println(isEven.test(6));
        System.out.println(isEven.test(9));

        // 2. Supplier
        // Interesting because it doesn't take in any values but it does return one
        Supplier<String> myStringSupplier = () -> "Hello From Lambda";

        System.out.println(myStringSupplier.get());

        // 3. Consumer
        // Consumes a value, so it takes one in and returns nothing
        Consumer<String> myStringConsumer = (str) -> System.out.println(str.toLowerCase());

        // What does the string consumer do? It converts a string to lowercase then prints it out
        // Recall that print statements do not return anything so the return of this accept method is void

        myStringConsumer.accept("Hello Consumer");

        // 4. Function
        // Takes in a value and returns a value
        Function<Integer, String> myNewFunction = (num) -> "My number is " + num;

        System.out.println(myNewFunction.apply(51));
    }
}
