# Git Repository Actvitiy

During training, one of the most common things you'll need to do is push or pull from a git repository. This is an essential skill to have as a developer as it allows you to save and share your work with others. You should have some practice with this from PEP but here we'll practice making a brand new repository for our organization and adding a simple fun facts file to it. 


# Steps

1. Starting from our [organization's homepage](https://github.com/240408-JavaReactAWS), click on "Repositories" on the navbar.

2. Open the repository creation page by clicking on the green button that says "New repository"

3. This page will allow you to create your own repository, we just need to provide the right information to get it working. Select the box where it says "Repository name" and add in your name in the format "firstname-lastname". Verify that the "Owner" (just to left of that repository name) is our organization: "240408-JavaReactAWS".

4. Verify the following settings: The repository is PUBLIC, not private. Optional, but if you like you can add a README file to initialize the repository. 

5. Now that the repo exists, let's clone it to our local machine. Open up a git bash window wherever you want the repo to live. You can do this one of two ways, navigate to the folder you want the repo to exist in and right click and select "Git Bash Here". If it's not visible, you may have to look under more options (this can happen if you're on windows 11). If the option is still not visible you can always just open a Git Bash window from the search bar and navigate to where you want your file to live. As a reminder there are a few helpful commands to navigating directories in gitbash

    - `cd folder-you-want-to-go-to`. cd is the command for "change directory", it'll allow you to navigate to a child folder of the current directory you're in.
    - `cd ..` This will allow you to go up to the parent directory of the current one you're in.
    - `ls` ls is a command that allows you to see the contents of a directory, in case you're not sure what child directories you have. In the Git Bash window, after running `ls` all the child folders/directories will be blue with a / after their name.

6. After using the commands above to navigate to where you want your repository to exist, we'll need to clone our repository to our local machine. We can do this in a couple steps. First navigate to the repository page on github. You should see a green button labelled "Code". Clicking this will pull up an easy way to copy the link of the remote repository. Copy the url listed to your clipboard for later use. Returning to your gitbash window, you should be able to clone your repository by running the command `git clone your-url-here`. If you're having trouble pasting the url, just right-click and select paste, or use Shift+Insert as Ctrl+V doesn't work in Git Bash.

7. After cloning your repository, you should be able to `cd` into it and verify it was cloned correctly. If you named your repo correctly you should be able to run `cd firstname-lastname` and navigate into it, you'll be able to verify you're in the right spot since it should have the word "(main)" written in teal at the end of the file path.

8. From here you need to add a new file in the repo folder. You can do this by creating a new text document from the file explorer in the appropriate folder. Name the file firstname-lastname. From here open the file, add in 3 fun facts about yourself, save the file and close it.

9. Now that we have our fun facts saved, we need to share our work on github. We'll do this by running the following commands in the git bash window: `git add .` (this adds all the updated files to the staging area to be committed, don't forget the . as it denotes that you want to add the all the files from the directory), then run `git commit -m "short commit message here"` (this will commit our changes to the local repository, the commit message can be whatever you want but it should be short, simple, and describe the changes you made during this commit) and then finally `git push` (this will push our changes to our remote repository and allow us to see our changes on github). For your first time pushing, you may need to sign into github, via the credential manager that pops up, do that and the push should go through

10. Navigate back to our repo page on github and refresh, you should be able to see your changes on your repo. This completes the into git activity.