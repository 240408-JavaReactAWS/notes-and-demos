package com.revature.repos;

import com.revature.models.Plan;
import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanDAO extends JpaRepository<Plan, Integer> {

    List<Plan> getPlansByOwner(User owner);
}
