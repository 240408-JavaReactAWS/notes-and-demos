package com.revature.services;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.NoSuchPlanException;
import com.revature.exceptions.NoSuchUserException;
import com.revature.models.Plan;
import com.revature.models.User;
import com.revature.repos.PlanDAO;
import com.revature.repos.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    private final PlanDAO pd;

    private final UserDAO ud;

    @Autowired
    public PlanService(PlanDAO pd, UserDAO ud) {
        this.pd = pd;
        this.ud = ud;
    }

    public List<Plan> getPlansByUser(String username) throws NoSuchUserException {
        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }

        User returnedUser = possibleUser.get();

        return pd.getPlansByOwner(returnedUser);

    }

    public Plan updatePlanByUser(Plan plan, String username) throws
            NoSuchUserException, InvalidCredentialsException, NoSuchPlanException {
        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }
        User returnedUser = possibleUser.get();

        Optional<Plan> possiblePlan = pd.findById(plan.getPlanId());

        if (possiblePlan.isEmpty()){
            throw new NoSuchPlanException("No plan found with id: " + plan.getPlanId());
        }

        Plan returnedPlan = possiblePlan.get();

        if (returnedPlan.getOwner().equals(returnedUser)){
            // This means the proper user is accessing this piece
            returnedPlan.setName(plan.getName());
            returnedPlan.setExercises(plan.getExercises());
            return pd.save(returnedPlan);
        }
        throw new InvalidCredentialsException("Incorrect user attempting to modify workout plan");


    }

    public boolean deleteByUserAndId(String username, int id) throws
            NoSuchUserException, InvalidCredentialsException, NoSuchPlanException{

        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }
        User returnedUser = possibleUser.get();

        Optional<Plan> possiblePlan = pd.findById(id);

        if (possiblePlan.isEmpty()){
            throw new NoSuchPlanException("No plan found with id: " + id);
        }

        Plan returnedPlan = possiblePlan.get();

        if (returnedPlan.getOwner().equals(returnedUser)){
            // This means the proper user is accessing this piece
            pd.delete(returnedPlan);
            return !pd.existsById(id);
        }
        throw new InvalidCredentialsException("Incorrect user attempting to delete workout plan");
    }

    public Plan getPlanByUserAndId(String username, int id) throws
            NoSuchUserException, InvalidCredentialsException, NoSuchPlanException{

        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }
        User returnedUser = possibleUser.get();

        Optional<Plan> possiblePlan = pd.findById(id);

        if (possiblePlan.isEmpty()){
            throw new NoSuchPlanException("No plan found with id: " + id);
        }

        Plan returnedPlan = possiblePlan.get();

        if (returnedPlan.getOwner().equals(returnedUser)){
            // This means the proper user is accessing this piece
            return returnedPlan;
        }
        throw new InvalidCredentialsException("Incorrect user attempting to access workout plan");
    }

    public Plan savePlanByUser(Plan plan, String username) throws NoSuchUserException{
        Optional<User> possibleUser = ud.findUserByUsername(username);

        if (possibleUser.isEmpty()){
            throw new NoSuchUserException("No user found with username: " + username);
        }
        User returnedUser = possibleUser.get();

        plan.setOwner(returnedUser);

        return pd.save(plan);
    }
}
