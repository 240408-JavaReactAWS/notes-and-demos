# Intro to Docker

Docker is an open source platform for developing, shipping, and running applications using containers

# Containerization

Helps to ensure the application, or set of processes can run reliably regardless of the host environment. The container shouldn't be able to modify or interact with anything it doesn't need to and on the whole, changes in the container should not effect the host or other containers

Linux Containers are the foundation of most modern container systems

-   began with cgroups and namespaces
    -   cgroups allowed control over the resources
    -   namespaces allowed for encapsulation of resources, and determined what is visible to particular processes

These containers are:

-   built from images ( a template for the container)
-   run on an engine (on the host OS) ie Docker Engine
-   Are ideally stateless
    -   any state that is needed for the application should be stored in a way that is detachable from the actual container
-   Virtualized and isolated

More benefits of containers:

-   Secure
-   Standardized and portable
-   LightWeight
-   Flexible and loosely coupled
-   Scalable

# Containers vs VMs

Containers and Virtual Machines both provide the ability to isolate processes, however each have their own pros and cons

## Virtual Machines: simulate a physical server/machine

-   They virtualize an entire OS
-   Enabled by hypervisors, a software that coordinates between multiple VM's and interfaces with the underlying infrastructure

VM Pros:

-   near total isolation
-   provides virtualization
-   ensures an application runs reliably regardless of the host

VM Cons:

-   considered bulky, expensive in context of resources

## Containers: bundle together applications with their supporting libraries and dependencies allowing them to run in isolation

-   The container will share the underlying OS kernel
-   Much lighter weight than a VM
-   Containerization is provided by an engine running on the host, ie Docker

Container Pros:

-   considered lightweight, because they don't require spinning a whole OS
-   they can enable layers of isolation
-   provide a virtualized view of certain resources
-   package an application in an isolated environment
-   ensure an application runs reliably regardless of the host

Container Cons:

-   having of layers of isolation can make things difficult

In general, it is suggested to use containers over VM's because of the cost of resources

# Docker Architecture

Docker runs on a Client-Server Architecture

-   You run commands on the Client, which interacts with the Docker Daemon

<img src ="https://www.whizlabs.com/blog/wp-content/uploads/2019/08/Docker_Architecture.png">

## Docker CLI

The Docker Command Line Interface is the client in the client-server architecture

-   It is used to interact with the Daemon
-   Uses a Rest API to send command to the Docker Daemon

## Docker Daemon

The Docker Daemon is the long running process on the docker host that does all of the heavy lifting

-   manage Docker objects
-   containers
-   images
-   the core of the running dockerized applications

## DockerHub Container Registry

Provides a centralized place to store images, allowing you to easily share images between docker hosts.

-   Dockerhub is a public registry managed by docker, that allows you to push and pull containers

-   https://hub.docker.com/search?q=

# Docker Objects

Are the building blocks that are managed by the docker daemon. The most fundamental objects are images and containers

## Docker Images

Docker Images are a blueprint for a container

-   Outlined in a dockerfile

## Docker Containers

Docker container are a runnable isolation instance of a set of processes and their dependencies

-   These are built from docker images, which lays out everything the processes that run in the container will need
-   managed by the docker daemon as part of the docker engine

# Dockerfile

Define everything needed for an image. It outlines the starting point, dependencies, and commands that make up all the processes for an image and in turn a container

-   Use these to create our images, contains a step-by-step instructions to create the image

# Dockerfile Keywords

`FROM image name`

-   Specifies the parent image from which the new image should be based

`RUN <command> / RUN ["executable", "param"]`

-   used to setup your image, the state of the image after each run command is committed forms a new layer

`ADD <src> <dest>`

-   adds files from build context or url to image

`COPY <src> <dest>`

-   adds files from build context to image, now preferred over ADD

`EXPOSE`

-   outline ports that being listened on by processes in the container

`WORKDIR`

-   set the working directory in the image and the eventual container of commands that follow

`CMD`

-   used to execute/run processes needed inside of your container

For more information, view this cheat sheet: https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index

# Building an Image

There are two ways to create an image:

-   Using the `docker build anyflags PATH` command in the CLI
    -   This is how you can create an image with a dockerfile
-   Using `docker commit flags CONTAINER imagename` command in the CLI
    -   You are commiting the changes from the container specified to the image specified
    -   You are creating an image based off of an existing docker container

# Creating a container

There are two ways to create a Docker container

-   Using `docker create imagename` in the CLI
    -   this creates a container in its created state, and configures and sets it up to be run, including the writible layer on the image from which the container is created
-   Using `docker run flags imagename` in the CLI
    -   This will pull the image from the registry if it doesn't exist locally
    -   Create and run the container automatically

# Managing Containers:

Some useful commands to manage containers include:

-   `docker container ls` displays all running containers
-   `docker ps -a` display all containers
-   `docker container kill containerID` can be used to stop a container
-   `docker container pause containerID` can pause the processes in the container
-   `docker container start containerID` can start the processes in the container
-   `docker container rm flags containerID` will remove a container
-   `docker volume rm volumename` will remove a volume

There are more commands in this cheatsheet: https://dockerlabs.collabnix.com/docker/cheatsheet/

# Docker Networking

One of the reasons Docker containers and services are so powerful is that you can connect them together, or connect them to non-Docker workloads. Docker containers and services do not even need to be aware that they are deployed on Docker, or whether their peers are also Docker workloads or not. Whether your Docker hosts run Linux, Windows, or a mix of the two, you can use Docker to manage them in a platform-agnostic way.

By default, Docker provides two network drivers for you, the `bridge` and the `overlay` drivers. You can also write a network driver plugin so that you can create your own drivers but that is an advanced task.

To add a container to a network use the command `docker run -d --net=bridge --name nameofcontainer`

# Docker Best Practices

The goals of containerization are:

-   ephemeral containers: the containers should be as easy as possible to tear down and build up requiring minimal configuration
-   lightweight containers and images

Be mindful of build context, aka what directory we are building in

Try to leverage multi-stage builds and image cache

Each container should only serve one purpose

Make commands in dockerfiles readible by separating them on different lines

Use volumes to persist data

Use secrets for sensitive data and config files for configurations that are not sensitive