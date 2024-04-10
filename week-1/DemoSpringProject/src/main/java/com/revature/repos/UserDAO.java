package com.revature.repos;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
    /*
    As a reminder this class is used to talk with the DB, we need to set it up as a JPA Repository so Spring Data
    knows to look for it

    Recall that we need to extend the JpaRepository interface from Spring Data. This will give us basic implementations
    of CRUD (Create Read, Update and Delete) methods and will allow us to define any custom methods we want as well

    Reminder make sure to make this class and all our other layers with the appropriate stereotype annotation (component,
    repository, service, or controller)
     */

    // We can define additional methods down here if we'd like and Spring Data will build them out based off name

    User findUserByUsername(String username);

}
