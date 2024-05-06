package com.revature.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Exercise {

    @Id
    @Column(name = "exercise_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int exerciseId;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    private BodyGroup bodyGroup;

    public Exercise() {
    }

    public Exercise(int exerciseId, String name, BodyGroup bodyGroup) {
        this.exerciseId = exerciseId;
        this.name = name;
        this.bodyGroup = bodyGroup;
    }

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BodyGroup getBodyGroup() {
        return bodyGroup;
    }

    public void setBodyGroup(BodyGroup bodyGroup) {
        this.bodyGroup = bodyGroup;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercise exercise = (Exercise) o;
        return exerciseId == exercise.exerciseId && Objects.equals(name, exercise.name) && bodyGroup == exercise.bodyGroup;
    }

    @Override
    public int hashCode() {
        return Objects.hash(exerciseId, name, bodyGroup);
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "exerciseId=" + exerciseId +
                ", name='" + name + '\'' +
                ", bodyGroup=" + bodyGroup +
                '}';
    }
}

