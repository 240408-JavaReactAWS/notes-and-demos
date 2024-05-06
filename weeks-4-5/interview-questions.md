# Git

* What is version control?

* List the git commands you know and what they do
  
* How would you prevent a file from being tracked by git?
 
* What is a branch? What are some common branching strategies?
  
* How to create a new branch?
  
* What is a merge conflict? How do you prevent these and resolve if it happens?
 
* What is a GitHub pull request?
  
* What is the git workflow for editing code and saving changes?
  
* What is a commit?
  
* How would you go back in your commit history if you make a mistake?
  

# AWS

### Cloud / AWS Overview
* How would you describe AWS? What is "the cloud" or "cloud computing" and why is it so popular now?

* Define Infrastructure, Platform, and Software as a Service

* What's the difference between a Region and an Availability Zone (AZ)?

* How are you charged for using AWS services? Does it vary by service?

* Different ways to interact with AWS services?

### EC2

* What are the configuration options for EC2?

* What are the different EC2 instance sizes/types?
  
* Once you create an EC2, how to connect to it?
 
* What are Security Groups? When defining a rule for a security group, what 3 things do you need to specify?

* What's the difference between scalability, elasticity, and resiliency?
  * Scalability is a characteristic of cloud computing through which increasing workload can be handled by increasing in proportion the amount of resource capacity. It allows the architecture to provide on demand resources if the requirement is being raised by the traffic.
  * Elasticity is the concept of commissioning and decommissioning of large amount of resource capacity dynamically. It is measured by the speed by which the resources are coming on demand and the usage of the resources.
  * Resiliency refers to the ability to recover from a disaster or outage
* What is autoscaling?
  
* Ways of paying for EC2?
  

### RDS

* What's an RDS?

* Which vendors are supported?


### S3

* What kind of data would you store on S3 vs a database?
 
* Are there any limits on S3?
  
* What are the rules for bucket naming?
 
* What are the different storage tiers?
  
* Can you use S3 to host a front-end or back-end of an application?
 
# Docker

* What is a container? How is it different from a VM?

* What is the Docker Daemon?

* What is a Docker image? Container?

* How is a Docker image different from a Docker container? 

* List the steps to start Docker, create a Docker image, and spin up a container
  1. Write a Dockerfile
  2. Build the image `docker build <pathToDockerfile>`
  3. Spin up the container `docker run <imageName>`

* What is the relevance of the Dockerfile to this process? List some keywords in the Dockerfile.
  
* What are some other Docker commands?
  
* What is a container registry? How would you retrieve and upload images to DockerHub?
  * Holds images, either public or private
  * Use `docker pull` and `docker push` to upload/download images

* If you want to store state for a container, how does Docker recommend doing that?
  * Use a volume or connect to external state management service
  * Volumes are file systems mounted to a container and exist on the host independent of the container


# DevOps

1.  What is DevOps? What is the goal of various DevOps processes?
    
2.  Explain CI/CD. What is the difference between Continuous Deployment and Continuous Delivery?
    
3.  What tools have you used to achieve CI/CD? Explain how you’ve setup and used them
    
4.  What is a DevOps pipeline? Explain the steps to setting one up
    
5.  What is SonarQube / SonarCloud? Explain some of the features of it
    
6.  What is a “build”? What is the end result of a build? What is the build tool you’ve used for Java projects?

### SDLC

7.  What are the steps in the software development lifecycle?
    
8.  What is the difference between Waterfall and Agile methodologies? Explain the benefits and drawbacks of each
    
9.  List some of the principles declared in the Agile manifesto
    
10.  What specific Agile frameworks exist? What are the main features of each?
    
11.  What is the Scrum process? Explain each of the Scrum ceremonies
    
12.  How long is a typical sprint?
    
13.  What is a “standup” and what should you report about your work?
    
14.  What is the role of a “Scrum master” in a project? What about the “Product owner”?
    
15.  Explain the following metrics/charts: sprint velocity, burndown chart
    
16.  What is a Scrum board? Have you used any software tools for your team’s Scrum board?

17.  Name some technologies teams can use to keep track of progress on different projects, tasks, and due dates.