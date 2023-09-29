---
title: Pull Requests and Merges
---

# Pull Requests and Merges

_(Updated: 15/09/2023)_

In a real life situation, you're going to come across multiple changes, on multiple files, for multiple features, from various team members. This sounds daunting and scary! Don't you worry child! It's just some new steps that you're gonna add to your workflow list and through repetition alone, it's going to look a lot like completing a simple task! But how are you going to let your teammates know about your suggestions/changes? That's where **pull requests** come into play!

## What are pull requests?

Pull requests are proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Like issues, pull requests each have their own discussion forum. Simply put, they let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

> **Note**: When working with pull requests, **keep the following in mind**:
>
> We recommend that you use a topic branch for your pull request. While you can send pull requests from any branch or commit, with a topic branch you can push follow-up commits if you need to update your proposed changes.
> Be very careful when force pushing commits to a pull request. Force pushing changes the repository history and can corrupt your pull request. If other collaborators branch the project before a force push, the force push may overwrite commits that collaborators based their work on.

You can create pull requests on GitHub.com, with GitHub Desktop, in GitHub Codespaces, on GitHub Mobile, and when using GitHub CLI.

After initializing a pull request, you'll see a review page that shows a high-level overview of the changes between your branch (the compare branch) and the repository's base branch. You can add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and assignees, and @mention individual contributors or teams.

Once you've created a pull request, you can push commits from your topic branch to add them to your existing pull request. These commits will appear in chronological order within your pull request and the changes will be visible in the "Files changed" tab.

Other contributors can review your proposed changes, add review comments, contribute to the pull request discussion, and even add commits to the pull request. By default, in public repositories, any user can submit reviews that approve or request changes to a pull request. Organization owners and repository admins can limit who is able to give approving pull request reviews or request changes.

After you're happy with the proposed changes, you can merge the pull request. If you're working in a shared repository model, you create a pull request and you, or someone else, will merge your changes from your feature branch into the base branch you specify in your pull request.

If status checks are required for a repository, the required status checks must pass before you can merge your branch into the protected branch.

You can link a pull request to an issue to show that a fix is in progress and to automatically close the issue when someone merges the pull request.

## Merging a pull request

Merge a pull request into the upstream branch when work is completed. Anyone with push access to the repository can complete the merge.

In a pull request, you propose that changes you've made on a head branch should be merged into a base branch. By default, any pull request can be merged at any time, unless the head branch is in conflict with the base branch. However, there may be restrictions on when you can merge a pull request into a specific branch. For example, you may only be able to merge a pull request into the default branch if required status checks are passing. Repository administrators can add constraints like this to branches using branch protection rules or repository rulesets.

### Sources and Attributions

**Content is based on the following sources:**

- [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests){:target="_blank"}
- [Merging a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request){:target="_blank"}