package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.exceptions.UsernameAlreadyTakenException;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = {"http://localhost:3000", "http://workout-builder-240408.s3-website-us-east-1.amazonaws.com"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowedHeaders = {"username", "Content-Type"},
        allowCredentials = "true")
public class UserController {

    private final UserService us;

    @Autowired
    public UserController(UserService us) {
        this.us = us;
    }

    @PostMapping("register")
    public ResponseEntity<User> registerNewUserHandler(@RequestBody User user){
        User savedUser;

        try{
            savedUser = us.createUser(user.getUsername(), user.getPassword());
//            session.setAttribute("user", savedUser); // Store the user in the session
        } catch (UsernameAlreadyTakenException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }

        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("login")
    public ResponseEntity<User> loginNewUserHandler(@RequestBody User user){
        User loggedInUser;

        try{
            loggedInUser = us.logInUser(user.getUsername(), user.getPassword());
//            session.setAttribute("user", loggedInUser); // Store the user in the session
        } catch (InvalidCredentialsException | NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
    }


    @GetMapping("session")
    public ResponseEntity<User> validateSession(HttpSession session){
        User user = (User) session.getAttribute("user");
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("admin")
    public ResponseEntity<User> validateAdmin(@RequestHeader(name="username") String username){
        User user = us.getUserByUsername(username);
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } else if (user.getRole() != Role.ADMIN) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @PostMapping("logout")
    public ResponseEntity<Void> logoutHandler(HttpSession session){
        session.removeAttribute("user"); // Remove the user from the session
        session.invalidate();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
