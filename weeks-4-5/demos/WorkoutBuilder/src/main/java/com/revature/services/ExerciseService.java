package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchExerciseException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Exercise;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.repos.ExerciseDAO;
import com.revature.repos.UserDAO;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {

    private final ExerciseDAO ed;

    private final UserDAO ud;

    /**
     * Constructor for ExerciseService.
     * @param ed ExerciseDAO dependency
     * @param ud UserDAO dependency
     */
    @Autowired
    public ExerciseService(ExerciseDAO ed, UserDAO ud) {
        this.ed = ed;
        this.ud = ud;
    }

    /**
     * Fetches all exercises.
     * @return List of all exercises
     */
    public List<Exercise> getAllExercises() {
        return ed.findAll();
    }

    /**
     * Saves a new exercise.
     * @param username Username of the admin user creating the exercise
     * @param exercise Exercise to be saved
     * @return Saved exercise
     * @throws NoSuchUserException If the admin user does not exist
     * @throws InvalidCredentialsException If the user is not an admin
     */
    public Exercise saveNewExercise(String username, Exercise exercise) throws NoSuchUserException,
            InvalidCredentialsException {
        validateAdminUser(username);
        return ed.save(exercise);
    }

    /**
     * Updates an existing exercise.
     * @param username Username of the admin user updating the exercise
     * @param exercise Exercise to be updated
     * @return Updated exercise
     * @throws NoSuchUserException If the admin user does not exist
     * @throws InvalidCredentialsException If the user is not an admin
     * @throws NoSuchExerciseException If the exercise does not exist
     */
    public Exercise updateExercise(String username, Exercise exercise) throws NoSuchUserException,
            InvalidCredentialsException, NoSuchExerciseException {
        validateAdminUser(username);
        validateExerciseExists(exercise.getExerciseId());
        return ed.save(exercise);
    }

    /**
     * Deletes an exercise by its ID.
     * @param username Username of the admin user deleting the exercise
     * @param id ID of the exercise to be deleted
     * @return true if the exercise was deleted, false otherwise
     * @throws NoSuchUserException If the admin user does not exist
     * @throws InvalidCredentialsException If the user is not an admin
     * @throws NoSuchExerciseException If the exercise does not exist
     */
    public boolean deleteExerciseById(String username, int id) throws NoSuchUserException,
            InvalidCredentialsException, NoSuchExerciseException {
        validateAdminUser(username);
        validateExerciseExists(id);
        ed.deleteById(id);
        return !ed.existsById(id);
    }

    /**
     * Validates if a user is an admin.
     * @param username Username of the user to be validated
     * @throws NoSuchUserException If the user does not exist
     * @throws InvalidCredentialsException If the user is not an admin
     */
    private void validateAdminUser(String username) throws NoSuchUserException, InvalidCredentialsException {
        User returnedUser = ud.findUserByUsername(username).orElseThrow(() ->
                new NoSuchUserException("No user found with username: " + username));
        if (!returnedUser.getRole().equals(Role.ADMIN)){
            throw new InvalidCredentialsException("User: " +username +" is not an admin");
        }
    }

    /**
     * Validates if an exercise exists.
     * @param id ID of the exercise to be validated
     * @throws NoSuchExerciseException If the exercise does not exist
     */
    private void validateExerciseExists(int id) throws NoSuchExerciseException {
        if (ed.findById(id).isEmpty()){
            throw new NoSuchExerciseException("No exercise with id: " + id);
        }
    }
}
