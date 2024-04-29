# DevOps

## Agile and Devops

Agile is a mentality or philosophy utilized when approaching the creation of information systems, and is a flexible approach of addressing the steps of the Software Development Life Cycle. Development teams who practice an Agile methodology place a focus on producing code through iteration and collaboration rather than following a rigid plan.

At first glance, DevOps and Agile may seem contradictory; DevOps involves the creation of a systematic approach to producing code while Agile is a mentality that focuses on creating products by adapting to change quickly. However, the goal of both methodologies is to produce working and valuable product more efficiently. DevOps pertains to the entire system working together to produce, test, deploy and maintain the code base, while Agile practices allow for each step of that process to change wherever and whenever needed.
* Agile Practices with DevOps:
  * Continuous Integration
  * Continuous Delivery
  * Continuous Deployment

Adoption of the Agile philosophies can provide a stepping stone for the establishment of a working DevOps pipeline, as Agile practices intrinsically produce more continuous feedback loops. Continuous Integration, Continuous Delivery and Continuous Deployment seek to automate the phases of DevOps as much as possible.

![](https://wac-cdn.atlassian.com/dam/jcr:aa29a13c-67a8-424b-a21b-ad10fe6897df/DevOps%20infinity%20wheel_SIMPLE.png?cdnVersion=484)

<details>
<summary style="font-size: 24px;">Continuous Integration</summary>

## Continuous Integration
Continuous Integration (CI) is the first, and most fundamental step in creating an autonomous development pipeline.

Similarly to Continuous Delivery and Continuous Deployment, Continuous Integration is a development team mentality, and is achieved when all members of the development team practice consistent merging of code into a central repository. For CI to take place, these Central repositories should be in the form of version control software.

Version control software is a tool which utilizes some directory structure to store files. These tools can track changes to code, and allow for changes to be merged (allowing you to select which changes to keep or reject if/when conflicts arise) or files to be rolled back to a previous version. The integration of code into these repositories should happen as often as possible with at least one commit each day. Generally, the more frequently code is merged, the less conflicts and/or integration issues will arise.

The best way to ensure your code integrates well is to marry the integration of your code with testing the code. Running test suites on the code base after new commits helps to minimize potential disruptions if conflicts do arise, particularly when utilizing certain DevOps tools to automatically run unit and integration tests. 
</details>
<details>
<summary style="font-size: 24px;">Continuous Delivery</summary>

## Continuous Delivery
Continuous Delivery is a paradigm in which the building, management and testing of produced software is automated such that deployments can be performed at the push of a button.

Continuous delivery is often confused with Continuous Deployment, which automates the entire production pipeline, including deployment. Continuous Delivery; however is the process of automating all steps of a Development pipeline except for the final deployment step. Inherently, Continuous Delivery is dependent on the implementation of Continuous Integration, and also serves as a stepping stone to creating a fully automated Development Pipeline (Continuous Deployment). Though Continuous Integration can technically be achieved without automation, Continuous Delivery is only achieved when code integration, testing and product building has been automated. In this way, you are able to perform frequent deployments "at the press of a button", but may choose not to do so, usually for business purposes or possibly due to a preference for a regular scheduled deployment process.

The deployment to production may also be kept manual so that final user acceptance tests can be performed manually as a final safety check on the code to ensure that it meets business needs. This is due to the difficulty and cost of creating tests to evaluate the user experience and not simply the functionality.

<img src= "https://miro.medium.com/max/1400/1*cFe2QJYHDN2TD0Idy4dELA.png">
</details>
<details>
<summary style="font-size: 24px;">Continuous Deployment</summary>

## Continuous Deployment
Continuous Deployment is a process of releasing software in which changes are tested for stability and correctness automatically. This results in immediate, autonomous deployment of code to production environments.

Continuous Deployment is often confused with Continuous Delivery due to nomenclature as both are referred to as 'CD'; however, Continuous Delivery is simply a precursor to Continuous Deployment. In Continuous Delivery there is a final, manual approval process needed before code is deployed to production environments. Continuous Deployment forgoes human intervention at every step of the deployment process, and pushes new code into the working production environment immediately so long as it meets the test requirements. When Continuous Deployment is achieved, every committed change to the code base creates and deploys a new build to the production environment.

Continuous Deployment is the ultimate goal for establishing a true DevOps pipeline, as it ensures that all steps for the creation of product, including code creation, testing, building, and deployment are automated and work seamlessly together.

As the major difference for Continuous Deployment and Delivery resides in the manual approval of deploying code to production, many benefits (feedback speed, code quality and efficiency) are retained with the use of Continuous Deployment. However, there are some additional considerations for Continuous Deployment:
- With Continuous Deployment, there is no chance to perform manual tests before deploying to production, since the entire pipeline is automated.
</details>

### Common Devops Pipeline

- AWS CodePipeline
- Jenkins Build Automation Server

<img src = "https://miro.medium.com/max/1400/1*gJkzsFoJvrp19_7DUpEzrg.png" style="background-color: white;">


## Benefits of DevOps

-   **Speed**
    -   Teams that practice DevOps release deliverables more frequently, with higher quality and stability.
    -   A Report found that elite teams deploy 208 times more frequently and 106 times faster than low-performing teams.
    -   Continuous delivery allows teams to build, test, and deliver software with automated tools.
-   **Improved Collaboration**
    -   culture of collaboration between developers and operations teams, who share responsibilities and combine work.
    -   This makes teams more efficient and saves time related to work handoffs and creating code that is designed for the environment where it runs.
-   **Rapid Deployment**
    -   teams improve products rapidly.
    -   A competitive advantage can be gained by quickly releasing new features and repairing bugs.
-   **Quality and reliability**
    -   Practices like continuous integration and continuous delivery ensure changes are functional and safe, which improves the quality of a software product.
    -   Monitoring helps teams keep informed of performance in real-time.
-   **Security**
    -   By integrating security into a continuous integration, continuous delivery, and continuous deployment pipeline, DevSecOps is an active, integrated part of the development process.
    -   Security is built into the product by integrating active security audits and security testing into agile development and DevOps workflows.


# Jenkins

Jenkins is a self-contained, open source automation server, which can be used to automate the building, testing, and deployment of software.

It can installed standalone on a system, or work with tools like Docker

# Jenkins Projects, Jobs, and Builds

In Jenkins you work with Projects/Jobs:

-   Each job is a repeatable set of steps that automate a task
-   You can trigger your jobs manually, externally, or by other jobs
-   When a job is triggered, it create a build

Jobs have status called Health. The health is represented by a weather condition

-   Sunny: 81% or more build passed
-   Partially Sunny: 61 - 80% passed
-   Cloudy: 41 - 60% passed
-   Raining: 21 - 40% passed
-   Stormy: 20% or less passed

Builds have a more traditional status, each one gets a colored circle representing success or failure

-   Blue: success
-   Yellow: unstable
-   Red: Failure
-   Gray: No builds/aborted build

## Pipeline Tutorial
A Jenkins Pipeline is a suite of plugins which support the implementation of a Continuous Delivery Pipeline in Jenkins. The follow details steps for utilizing a Jenkins pipeline with Java.

You can follow these steps to establish your pipeline [here](https://gitlab.com/revature_training/devops-team/-/tree/master/trainer-examples/matthew-oberlies/pipeline-demo/scripts). Alternatively you can follow these [steps to build a Java app with Maven](https://www.jenkins.io/doc/tutorials/build-a-java-app-with-maven/).

Creating a custom pipeline can offer you a great deal of flexibility. To create a custom pipeline, you will need to create a `jenkinsfile`:
1. Configure your `jenkinsfile` (see below)
1. Navigate to your Jenkins server and select 'New Item' from the Jenkins menu.
1. Provide a name for your new item (i.e. "Pipeline-Example")
1. Click "Add Source" to choose the type and details for your repository
1. Click "Save". You can now build your project using this new pipeline

A `jenkinsfile` consists of agents, stages, and steps.

An [agent](https://www.jenkins.io/doc/book/pipeline/syntax/#agent) informs Jenkins where, and how to execute the Pipeline. For example:
* From a docker image
```
pipeline {
    agent { 
        docker { image 'maven:3.3.3' }
    }
    // additional information to follow //
}
```
* From anywhere

```
pipeline {
    agent any
    // additional information to follow //
}
```

An agent is required at the top level of a pipeline block but can also optionally be used at the stage level to define stage-level usage.

[Stages](https://www.jenkins.io/doc/book/pipeline/syntax/#stages) are a sequence of one or more individual custom [stage](https://www.jenkins.io/doc/book/pipeline/syntax/#stages) directives. Each stage will consist of multiple steps, that are performed by a Jenkins pipeline.

Stages Block
* The stages block is required to list each individual stage directive
* Each pipeline should only contain a single stages block.
* This stages block must contain as least one stage directive
* May contain multiple stage directives. 

Stage Directive
* Each stage directive requires a string parameter for the name of the stage.
* Each stage directive requires at least one step
* May contain multiple steps

For example:
```
pipeline {
    agent any
    stages {
        stage('Deploy') {
            // List of steps go here //
        }
    }
}
```

[Steps](https://www.jenkins.io/doc/book/pipeline/syntax/#steps) are the specific actions taken by a Jenkins Pipeline. 

Steps Block
* Do not require parameters
* May contain a script block to define behavior

For example:
```
pipeline {
    agent any
    stages {
        stage('Deploy') {
            steps {
                echo 'Hello World'

                script {
                    def browsers = ['chrome', 'firefox']
                    for (int i = 0; i < browsers.size(); i++) {
                        echo "Testing the ${browsers[i]} browser"
                    }
                }
            }
        }
    }
}
```

### Disadvantages of Jenkins
* Requires custom jenkinsfile syntax for pipeline configuration

### Advantages of Jenkins
* Completely Open Source
* Free
* Supports all Operating systems
* Supports all source code repositories


# DevOps Tools - Sonar

Sonar cloud, Sonar Qube and Sonar lint are code quality analysis tools which increase the readability, security and matainability of code. Utilizing code quality analysis tools can help development teams produce higher quality code, and provide standardization between developers, which can play a vital role in the integration of code.

### References
* [Sonar Cloud - Documentation](https://sonarcloud.io/documentation)
* [Sonar Qube - Documentation](https://docs.sonarqube.org/latest/)
* [Sonar Lint - Github](https://github.com/SonarSource/sonarlint-eclipse)

## Code Quality Analysis and Code Smells
Code Quality Analysis tools are programs specifically designed to expose errors as well as 'code smells'.

Code Smells
* Vulnerabilities 
  * Data security issues
* Bugs
  * Issues with functionality of code
* Maintainability issues
  * Confusing or hard to maintain code
  * Repeated instances of code
  * Unused imports
  * Empty code blocks
  * Unaddressed automated code comments

## Sonar Cloud
A cloud based code review solution which can be configured to review code within a cloud repositoy, such as Github.

### Sonar Cloud with Github Installation
* Navigate to the [Sonar Cloud Login Page](https://sonarcloud.io/sessions/new), and select "Log in with Github"
* Click on "Analyze your code" and follow the steps for project setup
* Select the repository to analyze.

You may Automatically analyze your code with Sonar Cloud, or by configuring another Continuous Integration Tool.
* [Sonar Cloud with Travis CI](https://sonarcloud.io/documentation/integrations/ci/travis-ci/)
* [Sonar Cloud with Circle CI](https://sonarcloud.io/documentation/integrations/ci/circleci/)

## Sonar Qube
Code review tool built to work on a centralized server or integrated into a development pipeline. Due to the increased flexibility and configuration options of Sonar Qube, it can be seen as a more powerful tool.

### Sona Qube Installation
* [Quickstart Guide](https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)
* [Production Environment Guide](https://docs.sonarqube.org/latest/setup/install-server/)

## Sonar Lint
Sonar Lint is a free, open-source linting tool. A linting tool/linter is a software tool which, when integrated with an IDE, can provide increased feedback to the developer. Traditional IDE tools utilize built-in linters to identify code syntax errors, and exceptions. Sonar Lint provides further suggestions by recognizing code smells.

### [Sonar Lint - Ecplise](https://marketplace.eclipse.org/content/sonarlint)
* Open Eclipse
* Select "Ecplise Marketplace..." from the Help Menu
* Search for "Sonar Lint" in the searchbox
* Select Install and accept the User Agreement
* Restart Ecplise

### [Sonar Lint - Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
* Open Visual Studio Code
* Select the "Extensions" Tab from the project explorer
* Search for "Sonar Lint" and Select Install