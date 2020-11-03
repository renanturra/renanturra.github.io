# Hosting a Resume on Github

## Intro
The purpose of this README is to show how Computer Science students (or any students that are somewhat familiar with technologies) can create and host their resume on GitHub Pages. 

By the end of this tutorial, you will have your resume hosted by GitHub and available for potential future employees to access it.

This tutorial follow the guidelines presented by _Andrew Etter_ on his book called _Modern Technical Writing_


## Prerequisites

The prerequisite for hosting your resume on GitHub Pages is a resume formatted in markdown. If you are not familiar with markdown, you can see it a simple text file that uses symbols to format the text.   

For more information on how to use markdown, you can at [More Resources](#more-resources).  


## Instructions

The steps that you need to follow are very straightforward. First, we will take a look at an overview of the steps. Then, we will look at each step in more detail.

**The steps are:**  
1. Create GitHub account
2. Create a new repository called _username.github.io_
3. Create a file called `index.md` to your new repository and add your resume to the file
4. Select a theme for your new resume

At the end of this steps, you will be able to access and share your website!

### Steps
1. Creating a GitHub account  
To host a page on GitHub Pages, you will need a GitHub account. Access [GitHub](https://github.com/) and sign up for a new account. GitHub can be very useful when making changes to a software or when editing files. Being a Distributed Version Control system, GitHub keeps track of all the changes that are made in the files, keeping them saved with their respective version. Besides that, Etter affirms that keeping documentation together with the code is important to keep "documentation and code branches to stay in sync" 

2. Create a new repository called _username.github.io_  
Now that you have an account, we need to create your first repository. To do that, you should:
    - Click on the `+` sign at the top right of the page
    - Click on `New repository`
    - Under `Repository name`, add _username.github.io_ where _username_ will be your GitHub user
    - Click `Create repository` 

    When you use the _username.github.io_ special naming, you are telling GitHub to create a static page using Jekyll. You can learn more about this tool by accessing [Jekyll website](https://jekyllrb.com).  

    Static pages are a simple pages are not generated dinamically. This means that the page will always be the same for everyone that access it. According to Etter, the advantages of static pages are given since they "have no server-side application dependencies, no databases, and nothing to install, so migrating the entire site is as easy as moving a directory". In another words, having your resume in a static page means that you don't need to worry about all the complexity that hosting a website involves.

3. Create a file called `index.md` to your new repository and add your resume to the file  
Now that we have our repository, we need to add a new file to it. On your newly created repository, you should:
    - Click `Add File` and select `Create new file`
    - Inside the input box that reads `Name your file...`, write `index.md`
    - Copy all the contents of your mardown formatted resume
    - Under `Edit new file`, paste your resume 
    - Click `Commit new file` at the bottom of the page  

    Your resume is already being hosted by GitHub Pages. You can access it by opening your browser and typing _username.github.io_. When you create a file called `index.md`, GitHub understands that this is the main page of your static website.

4. Select a theme for your new resume
Your resume hosted on GitHub Pages is already up and running, but we need to add some styling to it.
    - In your repository, click on `Settings` on the upper tab
    - Scroll down to the section called `GitHub Pages`
    - Click on `Change theme`
    - Find the theme that best suits you and click `Select theme`



### More Resources
1. Markdown tutorial:  
If you have no previous experience with markdown, [Markdown Tutorial](https://www.markdowntutorial.com) can provide you a lot of information about this lightweight markup language.

2. Modern Technical Writing:  
To learn more about technical writing, you can check out [_Modern Technical Writing_](https://www.amazon.ca/Modern-Technical-Writing-Introduction-Documentation-ebook/dp/B01A2QL9SS) by Andrew Etter. This book presents guidelines and techniques that will help you write better sofware documentation.

3. StackEdit:  
If you need a quick way to edit and visualize your markdown document, you can access [StackEdit](https://stackedit.io/). This tool provides a great interface for users that are new  


## Authors and Acknowledgments

**Author:** Renan Desconsi Turra

**Template author:** [Steve Smith](https://github.com/orderedlist)  


## FAQ

### 1. Why is markdown better than a word processor?  
With markdown you can have a smaller file that's easier read and shared by humans and also by computers. <TODO>

### 2. Why is my resume not showing up?  
There are a few issues that might happen when you try to host your resume. You should check the following things:
- When you make changes to your files on GitHub
- Make sure your resume is properly formatted in markdown and named as `index.md`
- Check if our respository was created correctly, using the _username.github.io_ format



## Audience Analysis

**Audience:** Computer Science Student  
**Venue:** README in GitHub Pages  
**Purpose:** Explain how to host a resume on GitHub Pages  
**Additional Purpose:** Introduce a demo principles of Andrew Etter's book _Modern Technical Writing_  
**Desired Reaction:** Encourage reader to create their own resume hosted by GitHub Pages  
**Vocabulary:** Informal, but familiar to software documentation  
**Tone:** <TODO>