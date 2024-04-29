# AWS

## What is Cloud Computing?

Cloud computing is the on-demand delivery of compute power, database storage, applications and other IT resources through a cloud services platform via the Internet with pay-as-you-go pricing.

### Various Features of Cloud Computing

- Resource Pooling
- On-Demand Self-Service
- Easy Maintenance
- Large Network Access
- Availability
- Automatic System
- Economical
- Security
- Pay As You Go
- Measured Service

## 3 Models of Cloud Computing

- Software As A Service (SaaS)
- Platform As A Service (PaaS)
- Infrastructure As A Service (IaaS)

<img src = "https://cms.webcreatify.com/gallery/1273-cloud-computing-2.png">

#### Pizzas As A Service

<img src = "https://miro.medium.com/max/1400/1*JacqOl2kjyTYzv31v0xITw.png">

## Regions and Availability Zones

### Regions

A highly available data center that houses Amazon cloud computing resources in different areas of the world (33 in total)

### Availability Zones

Each AWS Region contains multiple distinct locations called Availability Zones, or AZs. Each Availability Zone is engineered to be isolated from failures in other Availability Zones. (105 total in the world)

# RDS Overview

## What Is Amazon Relational Database Service (Amazon RDS)?
Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks.

* RDS **automates** expensive and time consuming tasks such as managing backups, software patching, automatic failure detection, and recovery.  

* You can help control who can access your RDS databases by using **AWS Identity and Access Management (IAM)** to define users and permissions.  

* RDS is available on several **database instance types**.  **Instance types** comprise varying combinations of CPU, memory, storage, and networking capacity and give you the flexibility to choose the appropriate mix of resources for your database.
    * Examples of instance types include `T3`, `T2`, `M6g`, `M5`, etc...You can read more about instance types [here](https://aws.amazon.com/rds/instance-types/).  

* RDS is **free to try** and you will be charged based on how much computational power you use per month (pay-as-you-go).  

* RDS provides you with six familiar database engines to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server. 

## Why Use RDS?
It's important to distinguish AWS RDS from *other database solutions offered through AWS*.

* AWS offers 15 database engines including *relational, key-value, document, in-memory, graph, time series, and ledger databases*.  

* With **RDS**, you don’t need to worry about database management tasks such as server provisioning, patching, setup, configuration, backups, or recovery. The RDS manages this for you.  

* **RDS** is a **relational** database service, therefore it organizes data within tables in rows and columns.  Compare this to non-relational or NoSQL databases which use different mechanisms to store and retrieve data through key-value pairs, document models, etc.  
<br />


## Regions & Availability Zones
* An **AWS Region** is a highly available data center that houses Amazon cloud computing resources in different areas of the world (for example, North America, Europe, or Asia).  

* Each AWS Region contains multiple distinct locations called **Availability Zones**, or AZs.  

* Each Availability Zone is engineered to be isolated from failures in other Availability Zones. Each is engineered to provide inexpensive, low-latency network connectivity to other Availability Zones in the same AWS Region. 

* By launching instances in separate Availability Zones, you can protect your applications from the failure of a single location.  This makes AWS fault-tolerant.
    * **Fault-tolerance** defines the ability for a system to remain in operation even if some of the components used to build the system fail.
<br />

## Security
* A **security group** controls the access to a DB instance. It does so by allowing access to IP address ranges or Amazon EC2 instances that you specify.

* You can set security groups when configuring your RDS instance.  


## How to Interact with Amazon RDS
There are several ways that you can interact with Amazon RDS.
### 1. AWS Management Console
You can manage your DB instances from the console with no programming required. To access the Amazon RDS console, sign in to the AWS Management Console and open the Amazon RDS console at <a href="https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Frds%2F%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Frds&forceMobileApp=0">https://console.aws.amazon.com/rds/</a>

### 2. Command Line Interface
You can use the AWS Command Line Interface (AWS CLI) to access the Amazon RDS API interactively.  Install the AWS CLI [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).  To begin using the AWS CLI with RDS, view the [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/rds/index.html).

### 3. Programatically Accessing Amazon RDS
While developing an application, developers may use the *AWS Software Development Kits (SDKs)* and utilize the [RDS Application Programming Interface (API)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/ProgrammingGuide.html) to automate tasks for managing DB instances and other objects in Amazon RDS.

## What is AWS EC2?

AWS EC2 (Elastic Cloud Compute) is a web service offered by Amazon that provides resizable compute capacity in the AWS cloud. It enables you to manage a Linux/UNIX and Windows server instances in Amazon’s Data Centers

- It offers Infrastructure as a service (IaaS).

- It provides complete control of computing resources, which one can scale as per the requirement.

### AMI

- You use preconfigured templates for your instances known as Amazon Machine Images (AMIs).

An AMI includes the following:

- A template for the root volume for the instance (for example, an operating system, an application server, and applications).
- Launch permissions that control which AWS accounts can use the AMI to launch instances.
- A block device mapping that specifies the volumes to attach to the instance when it’s launched.

### What is an EC2 Instance?

A virtual server used for running applications on Amazon’s EC2 is an instance. An instance can be understood as a small part of a large computer, having its own hard drive, network connection, OS, etc. You can have multiple small computers on a single physical machine, and all these small machines are called Instances.

### EBS - Elastic Block Store

- Elastic Block Store is a system storage for Amazon EC2 VM’s

- An "EBS-backed" instance is an EC2 instance which uses an EBS volume as it’s root device. 

- EBS volumes are redundant, "virtual" drives, which are not tied to any particular hardware, however they are restricted to a particular EC2 availability zone. This means that an EBS volume can move from one piece of hardware to another within the same availability zone. 

- You can think of EBS volumes as a kind of Network Attached Storage.

## Autoscaling

- The idea that we want to automatically scale the amount of resources at our disposal
- Very powerful, and helpful in Industry
- But on a personal level, could accidentally accrue a lot of cost

<img src = "https://www.section.io/assets/images/blog/featured-images/horizontal-vs-vertical-scaling-diagram.png" width = 1000>

- Vertical vs Horizontal Scaling
    - Vertical Scaling: Increase the power of an instance/server
    - Horizontal Scaling: Increase the number of instances/servers
    - In older days, Vertical Scaling was primarily used
        - It took a lot of time to provision and configure new servers
    - In modern days, companies such as Amazon have setup really convenient ways
        to provision new servers
        - This has opened the door to Horizontal Scaling

Generally speaking, vertical scaling becomes more expensive, the higher scale you go. This becomes inefficient. Which makes Horizontal Scaling generally more efficient, money-wise.

Event small comapnies must now be prepared to scale their products globally. This of course has many challenges. But since that is where the demand is, that is where the money is.


# Amazon Simple Storage Service (S3)

Amazon S3 is object storage built to store and retrieve any amount of data from anywhere on the Internet.

- You can store any type of file in S3

- S3 is designed to deliver 99.999999999% durability

- Typical use-cases include:
    - Backup and Storage - provide data backup and storage services for others
    - Application Hosting - provide services that deploy, install, and manage web apps
    - Media Hosting - build a redundant, scalable, and highly available infrastructure that hosts video
    - Software Delivery - Host your software applications which customers can download
    - Static Websites - configure a static website to run from an S3 bucket.

## S3 Buckets

- Files are stored in buckets
- Buckets are root level folders
- Buckets store objects, which consist of data and its descriptive metadata.
- Unlimited storage available
- You create buckets within a REGION
- Objects consist of:
    - Key (name of obj)
    - Value (data made up of a sequence of bytes)
    - Version ID (used for versioning)
    - Metadata (data about the data that is stored)