# Assignment 1

Table of contents
- [Overview](#overview)
- [Learning goals](#learning-goals')
- [Contributing guide](#contributing-guide)
   - [Getting Started](#getting-started)
   - [Making changes](#making-changes)
- [Pull request guidelines](#pull-request-guidelines)


## Overview
This website is a computer store that fetches the inventory from an API. The website gives an user a bank account with a balance starting at 200 DKK. The user is able to be rewarded 100 DKK for pressing the "work" button, and can transfer money to their bank balance with the "bank" button. There is also a "get loan" button that allows the user to take a loan, but the loan amount can not be doubled their current balance. The user can not get another loan before repaying their current loan. If the user currently has a loan then 10% of their salary is deducted, and the user can not transfer their salary until the loan is paid back. Lastly, the "buy" button allows the user to buy a computer if they have enough funds, and substracts the price from the balance.

When using the website open the Dev Tool in your browser, since all of the communication with the user is displayed in the console.

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
- Once you're up and running, find an interesting issue to fix.

### Making changes

Once you have your repository, you can get to work.

1. Rebase your local branches against upstream master so you are working off the latest changes:

   ```sh
   git fetch --all
   git rebase upstream/master
   ```

2. Make a new branch for your work. It helps to have a descriptive name, like `fix-fullscreen-issue`.

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

After the changes are made in your branch, you're ready to submit a pull request.
Please follow the Conventional Commits specification for writing commit messages: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

#### Considerations before submitting a pull request

- Did you manually test your new change?
- Does your pull request fix multiple issues? If so, you may consider breaking into separate pull requests.
- Expect review and discussion. If you cannot back up your changes with a good description and through review, please reconsider whether it should be done at all.

#### Each pull request should include

- a descriptive title
- a short summary of the changes
- a reference to the issue that it fixes
- steps to test the fix (if applicable)
- for design-related changes, it is helpful to include screenshots
