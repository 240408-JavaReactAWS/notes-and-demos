package com.revature;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.exceptions.UsernameAlreadyTakenException;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.repos.UserDAO;
import com.revature.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    // What is this class? This class is used for writing tests on the UserService class.
    // What is the purpose of the @InjectMocks annotation? The @InjectMocks annotation is used to inject the mocks
    // into the UserService class.
    @InjectMocks
    private UserService userService;

    // What is this annotation? This annotation is used to create a mock of the UserDAO class.
    // Why do we need a mock? We need a mock of the UserDAO class because we want to test the UserService class
    @Mock
    private UserDAO userDAO;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    /**
     * Test case for the successful creation of a user.
     * This test simulates the scenario where a new user is created successfully.
     * The UserDAO's findUserByUsername method is expected to return an empty Optional,
     * indicating that the username is not taken.
     * The UserDAO's save method is expected to return a User object with the provided username and password,
     * and a role of USER.
     * The UserService's createUser method is then called with the provided username and password.
     * The returned User object is expected to have the provided username and password, and a role of USER.
     *
     * @throws UsernameAlreadyTakenException if the username is already taken
     */
    @Test
    public void createUserSuccessfully() throws UsernameAlreadyTakenException {
        when(userDAO.findUserByUsername("newUser")).thenReturn(Optional.empty());
        when(userDAO.save(any(User.class))).thenReturn(new User("newUser", "password", Role.USER));

        User result = userService.createUser("newUser", "password");

        assertEquals("newUser", result.getUsername());
        assertEquals(Role.USER, result.getRole());
    }

    @Test
    public void createUserWhenUsernameAlreadyTaken() {
        when(userDAO.findUserByUsername("existingUser")).thenReturn(Optional.of(new User("existingUser", "password", Role.USER)));

        assertThrows(UsernameAlreadyTakenException.class, () -> userService.createUser("existingUser", "password"));
    }

    @Test
    public void logInUserSuccessfully() throws InvalidCredentialsException, NoSuchUserException {
        when(userDAO.findUserByUsername("existingUser")).thenReturn(Optional.of(new User("existingUser", "password", Role.USER)));

        User result = userService.logInUser("existingUser", "password");

        assertEquals("existingUser", result.getUsername());
        assertEquals(Role.USER, result.getRole());
    }

    @Test
    public void logInUserWithInvalidPassword() {
        when(userDAO.findUserByUsername("existingUser")).thenReturn(Optional.of(new User("existingUser", "password", Role.USER)));

        assertThrows(InvalidCredentialsException.class, () -> userService.logInUser("existingUser", "wrongPassword"));
    }

    @Test
    public void logInUserWithNonExistentUsername() {
        when(userDAO.findUserByUsername("nonExistentUser")).thenReturn(Optional.empty());

        assertThrows(NoSuchUserException.class, () -> userService.logInUser("nonExistentUser", "password"));
    }
}
