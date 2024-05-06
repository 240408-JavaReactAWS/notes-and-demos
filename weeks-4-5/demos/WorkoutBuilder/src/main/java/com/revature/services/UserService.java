package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.exceptions.UsernameAlreadyTakenException;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserDAO ud;

    @Autowired
    public UserService(UserDAO ud) {
        this.ud = ud;
    }

    public User createUser(String username, String password) throws UsernameAlreadyTakenException {
        // Validate no user exists by the username
        Optional<User> possibleUser = ud.findUserByUsername(username);
        if (possibleUser.isPresent()){
            throw new UsernameAlreadyTakenException("Username: " + username +" was already taken!");
        }

        User newUser = new User(username, password, Role.USER);
        // default user is a user not an admin

        return ud.save(newUser);

    }

    public User logInUser(String username, String password) throws InvalidCredentialsException, NoSuchUserException {
        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            // This should be swapped for NoSuchUserException
            throw new NoSuchUserException("No User found with username: " + username);
        }

        User returnedUser = possibleUser.get();

        if (password.equals(returnedUser.getPassword())){
            return returnedUser;
        } else{
            throw new InvalidCredentialsException("Password was incorrect!");
        }
    }

    public User getUserByUsername(String username) {
        Optional<User> possibleUser = ud.findUserByUsername(username);

        return possibleUser.orElse(null);
    }
}
