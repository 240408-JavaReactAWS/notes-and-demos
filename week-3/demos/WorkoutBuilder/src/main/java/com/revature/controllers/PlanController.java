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
@CrossOrigin(origins = {"http://localhost:3000"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowCredentials = "true")
public class PlanController {

    private final PlanService ps;

    @Autowired
    public PlanController(PlanService ps) {
        this.ps = ps;
    }

    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlansFromUserHandler(
//            @RequestHeader(name = "user", required = false) String username
            HttpSession session){

        User user = (User) session.getAttribute("user");

        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        List<Plan> plans = new LinkedList<>();

        try{
            plans = ps.getPlansByUser(user.getUsername());
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Plan> getPlanByIdAndUserHandler(
//            @RequestHeader(name = "user", required = false) String username,
            HttpSession session,
            @PathVariable int id
    ){
        User user = (User) session.getAttribute("user");
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan returnedPlan;

        try{
            returnedPlan = ps.getPlanByUserAndId(user.getUsername(), id);
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(returnedPlan, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Plan> updatePlanByUserHandler(
//            @RequestHeader(name = "user", required = false) String username,
            HttpSession session,
            @RequestBody Plan plan
    ){

        User user = (User) session.getAttribute("user");
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan updatedPlan;

        try{
            updatedPlan = ps.updatePlanByUser(plan, user.getUsername());
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(updatedPlan, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deletePlansByUserHandler(
//            @RequestHeader(name = "user", required = false) String username,
            HttpSession session,
            @PathVariable int id
    ){

        User user = (User) session.getAttribute("user");
        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        boolean successfullyDeleted = false;

        try{
            successfullyDeleted = ps.deleteByUserAndId(user.getUsername(), id);
        } catch( InvalidCredentialsException e){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        } catch (NoSuchUserException | NoSuchPlanException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(successfullyDeleted, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Plan> createPlanByUser(
//            @RequestHeader(name = "user", required = false) String username,
            HttpSession session,
            @RequestBody Plan plan
    ){
        User user = (User) session.getAttribute("user");

        if (user == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Plan savedPlan;

        try{
            savedPlan = ps.savePlanByUser(plan, user.getUsername());
        } catch (NoSuchUserException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(savedPlan, HttpStatus.CREATED);
    }
}
