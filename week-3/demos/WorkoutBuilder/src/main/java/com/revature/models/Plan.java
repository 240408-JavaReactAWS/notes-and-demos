package com.revature.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Plan {

    @Id
    @Column(name = "plan_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int planId;

    @Column(nullable = false)
    private String name;

    // Now for relationships
    @ManyToOne
    @JoinColumn(name = "owner")
    private User owner;

    @ManyToMany
    @JoinTable(
            name = "plan_exercise_junction",
            joinColumns = {@JoinColumn(name = "plan_id")},
            inverseJoinColumns = {@JoinColumn(name = "exercise_id")}
    )
    private List<Exercise> exercises;

    public Plan() {
        this.exercises = new ArrayList<>();
    }

    public Plan(int planId, String name, User owner, List<Exercise> exercises) {
        this.planId = planId;
        this.name = name;
        this.owner = owner;
        this.exercises = exercises;
    }

    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Plan plan = (Plan) o;
        return planId == plan.planId && Objects.equals(name, plan.name) && Objects.equals(owner, plan.owner) && Objects.equals(exercises, plan.exercises);
    }

    @Override
    public int hashCode() {
        return Objects.hash(planId, name, owner, exercises);
    }

    @Override
    public String toString() {
        return "Plan{" +
                "planId=" + planId +
                ", name='" + name + '\'' +
                ", owner=" + owner +
                ", exercises=" + exercises +
                '}';
    }
}
