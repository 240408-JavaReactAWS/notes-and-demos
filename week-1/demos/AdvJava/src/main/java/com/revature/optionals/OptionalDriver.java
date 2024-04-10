package com.revature.optionals;

import javax.swing.text.html.Option;
import java.util.Optional;

public class OptionalDriver {

    /*
    Introduced in Java 8, the Optional class was created to provide a way to stop excessive null checking for values

    What does this mean?
    Often when we make calls to the DB or something similar there is a possibility that does not exist and thus is null.
    We often spend a good chunk of time checking to see if something is null so the optional class was introduced to
    reduce the amount we need to do
     */

    public static void main(String[] args) {
        String sample1 = "Hello World";
        String sample2 = null;

        Optional<String> possibleStringFromDatabase = Optional.ofNullable(sample1);

        // We can do some checking to see if the value is here by using the isPresent or isEmpty methods
        System.out.println(possibleStringFromDatabase.isPresent());
        System.out.println(possibleStringFromDatabase.isEmpty());

        // There are other things that become more important when using this
        System.out.println(possibleStringFromDatabase.orElse("No String was received from the database"));

        System.out.println(possibleStringFromDatabase.orElseThrow( () -> {
            throw new RuntimeException("No string was found in the database");
        }));

        // Also if you want to get the value from inside an optional
        possibleStringFromDatabase.get();
    }
}
