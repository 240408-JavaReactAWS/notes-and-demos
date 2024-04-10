package com.revature.services;

import com.revature.models.User;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    // Now we've marked this class as a bean we need to pull in the UserDAO as a dependency
    // Recall we achieve this through dependency injection
    // The recommended way to do dependency injection is through a constructor

    private UserDAO ud;

    @Autowired // This tells spring to wire the UserDAO bean into this class so we can use it
    public UserService(UserDAO ud) {
        this.ud = ud;
    }

    // We'll need methods that get called upon by the controller layer and those methods will talk to the dao layer

    // TODO Method for getting all users
    public List<User> getAllUsers(){
        // Now we call upon our DAO layer to get all of our users
        return ud.findAll();
    }

    // TODO Method for getting a user by id
    public User findUserById(int id){
        // This method should pass the id to the dao layer to search for the user
        // Possible validation we could do here: check that id > 0, make sure the user is present etc.

        return ud.findById(id).get();// There are other methods we can use that will return an Optional for better
        // null-checking but we'll skip that for now
    }

    // TODO method for creating a user

    public User createUser(User user){
        // Note: The user object that comes in will NOT have an id (since we want the db to make it for us)
        // but the returned user will have that Id so it will show the end user it was successful

        return ud.save(user);
    }
}
