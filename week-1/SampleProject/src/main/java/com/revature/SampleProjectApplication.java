package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SampleProjectApplication {

	/*
	This file is used for the startup of our application. It contains the only main method in the application and is
	used to start the Spring Boot App. In our case once we start it up, it'll be listening for HTTP requests sent to it
	and will allow us to do some logic and work whenever we receive a request
	 */

	public static void main(String[] args) {
		SpringApplication.run(SampleProjectApplication.class, args);
	}

}
