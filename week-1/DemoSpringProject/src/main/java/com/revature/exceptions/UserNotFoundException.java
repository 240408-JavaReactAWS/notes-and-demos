package com.revature.exceptions;

public class UserNotFoundException extends RuntimeException{

    /*
    We'll throw this exception whenever a request tries to find a user that doesn't exist and we'll listen for this
    in our controller and respond accordingly
     */

    public UserNotFoundException(String message) {
        super(message);
    }
}
