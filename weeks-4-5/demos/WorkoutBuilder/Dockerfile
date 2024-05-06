# This is a comment in the dockerfile
# Dockerfile is a text file that contains instructions for building a docker image

#The first thing we need in a dockerfile is the from command, this provides the base image that we plan to build off off
# In our case, we want to guarantee that we have Java to use inside the container so we will pick some distribution of Java
FROM amazoncorretto:17

# This guarantees that wherever we run this application it will have the ability to do java commands

# Next we want to copy the executable jar file into the container
# This will allow us to store a working version of our application to get it to run
COPY target/app.jar app.jar

# The first file is copying from the source to the inside of the container

# The next thing we want to do will be application specific, but in our case we're using Spring Web with port 8080
# So we need to EXPOSE that port (make it so the container can listen for traffic there)
EXPOSE 8080

# We need to run the application, so we need to use the CMD command
CMD ["java", "-jar", "app.jar"]