package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoSpringProjectApplication {
	/*
	This file contains the only main method inside our application and is used to boot up the application itself.
	In our case since we'll be using this as a server, it'll allow the application to run until stopped and listen
	for HTTP requests during that time


	GOAL: Make a simple API that allows me to create a user with a username and password. We can get a specific user
	by their id and we can get all users as well
	 */

	public static void main(String[] args) {
		SpringApplication.run(DemoSpringProjectApplication.class, args);
	}

}
