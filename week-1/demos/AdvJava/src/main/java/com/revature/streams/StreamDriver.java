package com.revature.streams;

import java.util.List;
import java.util.stream.Collectors;

public class StreamDriver {

    /* Streams are a useful wa to implement logic over a collection of values and remain efficient since it only passes
    over the data once

    Streams have 2 kinds of operations that are used: Intermediate and Terminal
    Intermediate -> Operations that perform some logic on the stream itself and return a stream
        Filter
        Sorted
        Distinct -> Removes duplicates
        Map

    Terminal - > Terminate the stream and can also be used to collect the data into a new collection (recall that streams
    don't store the date itself)
        forEach
        Collect
        Count,Max,Min -> Returns a single value from the stream itself

    This list is certainly not exhaustive there are several other operations as well
     */

    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 64, 51, 2, 17, 53, 73, 2, 9, 19, 29, 42);

        // Let's start with the simplest stream I can think of
//        nums.stream().forEach((x) -> System.out.println(x));
        // We took a collection, started streaming the values and then executed a terminal operation called forEach

        // This operation works but isn't really useful so maybe we should perform some operations on the data itself

        nums.stream()
                .filter( (y) -> y%2 == 0)
                .forEach((x) -> System.out.println(x));

        System.out.println("-----------------");

        nums.stream()
                .filter((y) -> y%2 == 0)
                .sorted() // sorts on the natural ordering of the elements
                .distinct() // Returns only unique values
                .forEach((x) -> System.out.println(x));


        // Maybe we're some company and we have all the subtotals for our daily charges
        // What if we want to calculate all of the final totals (totals after tax)

        List<Double> subtotals = List.of(1.99, 2.73, 5.00, 18.01, 9.99);

        // Typically when calculating total, you move up to the next dollar and then calculate a flat tax based off that
        // amount

        List<Double> finalTotals = subtotals.stream() // We want to perform some complex operations on each value in the stream
                .map((subtotal) -> {
                    double nextWholeDollar = Math.ceil(subtotal);
                    // Tax varies from county to county, where I live there is 7% sales tax
                    double taxAmount = nextWholeDollar * .07;

                    return subtotal + taxAmount;
                })
                .collect(Collectors.toList());

        System.out.println("----------");
        subtotals.forEach((x) -> System.out.println(x));
        System.out.println("------------------");
        finalTotals.forEach((x) -> System.out.println(x));
    }
}
