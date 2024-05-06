package com.revature.repos;

import com.revature.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseDAO extends JpaRepository<Exercise, Integer> {
}
