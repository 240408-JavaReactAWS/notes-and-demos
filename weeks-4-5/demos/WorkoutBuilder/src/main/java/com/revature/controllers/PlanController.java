package com.revature.controllers;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchPlanException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Plan;
import com.revature.models.User;
import com.revature.services.PlanService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("plans")
@CrossOrigin(origins = {"http://localhost:3000", "http://workout-builder-240408.s3-website-us-east-1.amazonaws.com"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowedHeaders = {"username", "Content-Type"},
        allowCredentials = "true")
public class PlanController {

    private final PlanService ps;

    @Autowired
    public PlanController(PlanService ps) {
        this.ps = ps;
    }

    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlansFromUserHandler(
            @RequestHeader(name="username") String username){



        if (username == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        List<Plan> plans = new LinkedList<>();

        try{
            plans = ps.getPlansByUser(username);
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Plan> getPlanByIdAndUserHandler(
            @RequestHeader(name="username") String username,
            @PathVariable int id
    ){

        if (username == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan returnedPlan;

        try{
            returnedPlan = ps.getPlanByUserAndId(username, id);
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(returnedPlan, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Plan> updatePlanByUserHandler(
            @RequestHeader(name="username") String username,
            @RequestBody Plan plan
    ){


        if (username == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan updatedPlan;

        try{
            updatedPlan = ps.updatePlanByUser(plan, username);
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(updatedPlan, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deletePlansByUserHandler(
            @RequestHeader(name="username") String username,
            @PathVariable int id
    ){


        if (username == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        boolean successfullyDeleted = false;

        try{
            successfullyDeleted = ps.deleteByUserAndId(username, id);
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(successfullyDeleted, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Plan> createPlanByUser(
            @RequestHeader(name="username") String username,
            @RequestBody Plan plan
    ){


        if (username == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan savedPlan;

        try{
            savedPlan = ps.savePlanByUser(plan, username);
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(savedPlan, HttpStatus.CREATED);
    }
}
