package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users") // Controls where the requests are being sent to -> http://localhost:8080/users
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
    @GetMapping("/{id}")
    public User getUserByIdHandler(@PathVariable int id){
        return us.findUserById(id);
    }


    // TODO Create POST Mapping
    // A post mapping is going to contain the user information in JSON format inside the body of the request so we need
    // to be able to pull that off of the request itself
    @PostMapping
    public User createUserHandler(@RequestBody User user){
        return us.createUser(user);
    }
}
