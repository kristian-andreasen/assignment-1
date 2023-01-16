# Assignment 1

## Overview

This website uses vanilla JavaScript to make the page interactive by dynamically manipulating the DOM. However there is no backend, so data is not saved and stored for the user. This means that every time the user refreshes the page, all changes are lost.

## Learning goals:

- Manipulate HTML using JavaScript
- Use JavaScript arrays
- Bind events to HTML elements
- Listen for events from HTML elements
- Write custom CSS to style HTML elements and layouts

## Contributing Guide
How to get started editing the code and creating your first pull request.

### Getting started

- Make sure you have a [GitHub account](https://github.com/join).
- Fork the repository on GitHub.
- Clone or download your fork to your local machine.

### Making changes

Once you have your repository, you can get to work.

1. Rebase your local branches against upstream master so you are working off the latest changes:

   ```sh
   git fetch --all
   git rebase upstream/master
   ```

2. Create a local feature branch off of master to make your changes:

   ```sh
   git checkout -b my-feature master
   ```

3. Make your changes and commits to this local feature branch.

4. Repeat step 1 on your local feature branch once you're done your work, to ensure you have no conflicts with other work done since you stated.

5. Push up your local feature branch to your GitHub fork:
   ```sh
   git push --set-upstream origin my-feature
   ```
6. On GitHub, create a new PR against the upstream master branch following the advice below.

7. Once your PR is merged, ensure you keep your local branches up-to-date:
   ```sh
   git fetch --all
   git checkout master
   git rebase upstream/master
   git push -u origin master
   ```
8. Delete your local feature branch if you no longer need it:
   ```sh
   git branch -d my-feature
   ```
## Pull request guidelines
Please follow the  Conventional Commits specification for writing commit messages: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
