package com.revature.lambdas;

public class LambdaDriver{

    public static void main(String[] args) {

        /*
        Lambdas are a tool that were introduced in Java 8 that allow us to implement some shorthand functions
        If you've ever used JavaScript, Lambdas are very similar to what arrow functions look like over there
        These are used to implement things called functional interfaces
            A Functional Interface is an interface with only one abstract method
            There are several built in functional interfaces that we'll discuss but we can create our own
         */


        // We've created the interface MyFunctionalInterface, how do we go about providing an implementation?

        // 1. Create an implementing class
        MyFunctionalInterface mfi = new FunctionalImpl();
        System.out.println(mfi.doMath(2, 3));


        // 2. Creating an anonymous class
        // Basically the same thing as creating an implementing class just without giving it a name
        MyFunctionalInterface mfi2 = new MyFunctionalInterface() {

            @Override
            public int doMath(int a, int b) {
                return a - b;
            }

        };

        System.out.println(mfi2.doMath(2,3));

        // 3. Lambda
        // Most succinct and clean looking
        // Lambda notation: (var1, var2) -> { logic }

        MyFunctionalInterface mfi3 = (a, b) -> a*b;
        // A couple things to note is 1. how simple this looks comparatively and 2. there's no return statement
        System.out.println(mfi3.doMath(2,3));

        // What if there's more complex logic than just one line?
        MyFunctionalInterface mfi4 = (x, y) -> {
            x = x*x;
            y = y*y;

            //If using curly braces for multiple lines you need to add a return statement
            return x - y;
        };

        System.out.println(mfi4.doMath(2,3)); // 4 - 9 = -5
    }

}

class FunctionalImpl implements MyFunctionalInterface{

    @Override
    public int doMath(int a, int b) {
        return a + b;
    }
}
