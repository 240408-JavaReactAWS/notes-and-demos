package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchExerciseException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Exercise;
import com.revature.models.User;
import com.revature.services.ExerciseService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("exercises")
@CrossOrigin(origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowCredentials = "true")
public class ExerciseController {

    private final ExerciseService es;

    @Autowired
    public ExerciseController(ExerciseService es) {
        this.es = es;
    }

    @GetMapping
    public List<Exercise> getAllExercisesHandler(){
        return es.getAllExercises();
    }

    @PostMapping
    public ResponseEntity<Exercise> createNewExerciseHandler(
            @RequestBody Exercise exercise,
            //@RequestHeader(name = "user", required = false) String username
            HttpSession session){
        User user = (User) session.getAttribute("user");

        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Exercise savedExercise;

        try{
            savedExercise = es.saveNewExercise(user.getUsername(), exercise);

        } catch(NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>(savedExercise, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Exercise> updateExistingExerciseHandler(
            @RequestBody Exercise exercise,
//            @RequestHeader(name = "user", required = false) String username
            HttpSession session
    ) {
        User user = (User) session.getAttribute("user");

        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Exercise updatedExercise;

        try{
            updatedExercise = es.updateExercise(user.getUsername(), exercise);

        } catch(NoSuchUserException | NoSuchExerciseException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>(updatedExercise, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteExerciseByIdHandler(
//            @RequestHeader(name = "user", required = false) String username,
            HttpSession session,
            @PathVariable int id
    ){

        User user = (User) session.getAttribute("user");
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        boolean successfullyDeletedExercise = false;

        try{
            successfullyDeletedExercise = es.deleteExerciseById(user.getUsername(), id);
        } catch(NoSuchUserException | NoSuchExerciseException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>(successfullyDeletedExercise, HttpStatus.OK);
    }
}
