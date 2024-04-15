package com.revature.controllers;

import com.revature.exceptions.UserNotFoundException;
import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/users") // Controls where the requests are being sent to -> http://localhost:8080/users
@CrossOrigin(origins = {"http://localhost:5500", "http://127.0.0.1:5500"})
public class UserController {

    private UserService us;

    @Autowired
    public UserController(UserService us) {
        this.us = us;
    }

    // Now we need to do a couple things to get this class ready to go and handle our methods

    // TODO Create GET Mappings
    @GetMapping
    public List<User> getAllUsersHandler(){
        return us.getAllUsers();
    }

    // We'll use a path variable to pass in ID so if we wanted user 1 we'd got to http://localhost:8080/users/1
    @GetMapping("{id}")
    public ResponseEntity<User> getUserByIdHandler(@PathVariable int id){
        /*
        Recall, we should have a 200 status code when the user is found (200 = OK) but a 404 when there is no user
        404 = NOT FOUND

        ResponseEntity encapsulates the ENTIRE HTTP response, meaning we can specify things like headers and status
        codes to be returned. This helps our client side parse our response and understand what to do with our response
         */
        User user;
        try{
            user = us.findUserById(id);
        } catch (UserNotFoundException e){
            //This logic is used when the user is not found
            return new ResponseEntity<>(NOT_FOUND); // Returns a 404
        }

        return new ResponseEntity<>(user, OK); // Returns a 200
    }


    // TODO Create POST Mapping
    // A post mapping is going to contain the user information in JSON format inside the body of the request so we need
    // to be able to pull that off of the request itself
    @PostMapping
    public User createUserHandler(@RequestBody User user){
        return us.createUser(user);
    }


}
