# Git Fundamentals

## Git is a version control system

It keeps track of every change ever made to a project during its lifetime

Provides a collaboration tool when working in groups

## Central vs Distributed Software Control

Central Software control (CSC) has the entire project stored in a central location with no copies allowed of the master file(s)

Distributed Software Control has a copy of all versions of the master file(s) locally on any machine this is pushed, pulled, and merged into a remote repository

Git is a Distributed Software Control System

# Git repository hosting platforms

Since git is a distributed Software Version control system we have local repositories that sync up with remote repositories. We need somewhere to store these remote repositories. Enter hosting platforms

There are many platforms that are available to be used, the most popular being GitLab, GitHub, BitBucket and more

The developers take changes from their local repositories and `push` them up to the remote repository where they they access all the code from another workstation, or other developers can `pull` in the changes to their local repository to look over the code, and even make more changes

## Git Initializing a repository

First and foremost you need to make sure that you have your git credentials configured so git bash can link your machine to your github account:

<code>
git config --global user.name gitusername
git config --global user.email gitemail@mail.com
</code>

Now to create your first local repository navigate, or open the gitbash in the folder/directory that you want to start the repository in

Once in the correct folder, you can type `git init` in the command line, this will create a .git directory to your current directory

This .git directory holds all the informations about our project versions and changes, and now that you have your local repository created, you can start making changes to your project and git will know everything that changes

# Git Basic Snapshotting

<img src = "https://res.cloudinary.com/practicaldev/image/fetch/s--M_fHUEqA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/128hsgntnsu9bww0y8sz.png" 
    width = "400" height = "100%">


While developing projects, you will follow a work flow while using git. The typical flow is project files start in the `Working directory` these files need to be tracked. Files from the working directory are chosen to be added to the `Staging Area`, where we commit the file changes to the `Repository`. Lets take a deeper look at each step in this work flow.

When you make changes to the files in your working directory you have to tell git that you want these files tracked, to do this you use the `git status` command. This is useful to see what files were changed in your project, and which ones need to be added to gits tracking

`git status` shows untracked files in red, and prompts you to use the command `git add` to add these files to git tracking, if you don't want these files tracked you can always use `git remove`

Using the command `git add` will add the files to to `Staging Area`, the staging area is where we organize what we want to be commited to the repository at the time. Git gives developers to pick and choose the files they want to be be included in the staging area at any given time, however when getting started with git, it is common for people to just use `git add .` which will add all changed files from the working directory to be commited to the git repository

When you are happy with the staging area, you can make your commit, a commit is a snapshot of changes to your software, or you can think of a commit was a new "version" of your software. To make a commit to your local repository

To make this commit you will run the git command `git commit -m "Write a quick concise message about what you changed in this commit"

It is best practice to commit early and often, instead of making huge changes in every commit

# Git Working with remote repositories

Up to this point we have created a local repo, created and made changes to files, tracked files from our working directory into the staging area, and commited to our local repo. Now we want to store our repository onto a hosting platform, in our case we will use github

Navigate to github and login, find the `+` button to create a new repository, go through the steps of naming it, giving it a description and skip the step the final step since we are importing an existing repository

After clicking `Create repository` you will see a screen that will walk you through different situations, we will follow the option of pushing an existing repository from the command line

## Git Pushing to a remote repository

Back in our git bash we have already commited changes to our git repo, now we just need to link our local repository to our remote one on github

First run `git remote add origin linktoremoterepo` this will actually link local repo to the remote repo for you

Then run `git push -u origin main` this will push your entire project, and all the change history to a new branch called main, and set the origin to the head of that branch, aka where your project currently is in its history

Now you should be able to view all the files from the project on github, you can also look through the commits, the files you changed, and more all from the user interface of github

## Complete git flow

1. Make changes to files
2. `git status` check on the files that were changed (optional)
3. `git add files` or `git add .`
4. `git commit -m "quick meaningful message"`
5. `git push origin/branchname` or `git push`

# Git Branching Basics

<img src = "https://docs.microsoft.com/en-us/azure/devops/repos/git/media/branching-guidance/featurebranching.png?view=azure-devops">

Every project as at least one branch known as the main branch, this is where the working code is stored. The HEAD points to the most recent commit that you made, as you make commits this pointer points to the next commit and so on. The main branch can be seen as a timeline of versions of the entire project.

Branching is a strategy to create a copy of a branch, typically the main branch, and make changes to that code independent of the master branch.

Branches are typically used to create new features separate from the main branch to protect it from bugs, once the feature is implemented successfully you can combine the new code back into the main branch, otherwise known as merging

There are a couple of ways you can create a new branch with git

1. Using the two step `git branch branchname` `git checkout branchname`
2. Using `git checkout -b branchname`

When the new branch is created, it will contain current version of the main branch

You can then create, and make changes to files in this new branch, and follow the same git flow from above

When you are ready to combine the changes from the feature branch to your main branch you use `git merge branchname`, keep in mind, you want to run this command from the branch you want to merge INTO

Git cheat sheet:

https://training.github.com/downloads/github-git-cheat-sheet.pdf