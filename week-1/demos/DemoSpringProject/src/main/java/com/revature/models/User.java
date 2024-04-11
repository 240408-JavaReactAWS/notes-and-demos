package com.revature.models;

import jakarta.persistence.*;

import java.util.Objects;

/*
We'll make this class with some JPA annotations to tell Spring Data how we want the table to be built in the database
NOTE: We can use Spring data to construct our database tables automatically based off our java classes so we never
really have to run SQL to create them
 */

@Entity // Entity marks this class as one that needs to be created in the database
@Table(name = "users") // Table allows us to set any configuration details about the SQL table that we want
public class User {

    @Id // This marks a field as a primary key (unique identifier for each record)
    @Column (name = "userId")// Like @Table, allows us to provide configuration details about the column itself'
    // We want the ID to generate itself so we'd want to use a tool built into the SQL DB like autoincrement or serial
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Not every field NEEDS annotations, Spring data will read them in automatically and create columns for them
    // We only really need to add in the information if additional config details are important
    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    // Constructors
    // IMPORTANT NOTE: Jackson databind needs to have at least a no-args constructor to generate the JSON fields
    // correctly, so make sure to include on of those
    public User() {
    }

    // We want to be able to create a user with a username and password only so we should expect the id to be set
    // automatically so let's create a constructor that doesn't use those
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    // Overridden methods: Not explicitly necessary but useful for printing or checking equality if ever needed
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
