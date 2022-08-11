![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# Contributing Guide

## Why this?

Most Reuters Graphics repos don't include (or need) contributing guidelines. The ones that do represent critical infrastructure. They also are the ones we most want wider contributions from the team to improve and maintain.

This doc provides for a few simple guidelines to make sure changes are well considered and represent the best ideas for how to move our tools forward while opening up the opportunity for others to ship their next great idea.

## Who can contribute?

Contributions are always welcome from members of the Reuters Graphics team.

Anyone outside our team using these components is welcome to submit PRs or issues, **BUT** if they are designed solely to benefit a use case that isn't ours, they likely won't be merged.

## How should Reuters Graphics staff contribute?

### 🏷️ Make an issue

We recommend your first step is to create an issue on this repo describing what is missing, broken or could be added or improved. (We'll close that issue when we merge your PR.)

- It's helpful if that issue describes what changes you propose to make at a high level so we can agree on a general direction before you write code. That's especially true if code you're writing will change how others need to write theirs.
- If needed, provide any links to best practice guidelines that support the change you want to make.
- Tag others on the team who may have expertise or would contribute to any needed discussion.
- **Always tag an editor.**

### 🧹 Follow code standards

Once you're ready to submit code, be sure it's properly formatted _before_ you ask for a review. The easiest way is to ensure the built-in code formatter (prettier) is working. (It should.)

Be sure to add comments around any tricky bits of logic you're adding. Even better, document your code using [JSDoc](https://devhints.io/jsdoc) comments. (Check out [JSDoc shortcuts](https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support) in VS Code for a leg-up.)

### 📝 Write docs

All new components and component features should be reflected in a [docs page](https://reuters-graphics.github.io/graphics-svelte-components/) included with your PR. See the [README](https://github.com/reuters-graphics/graphics-svelte-components#developing-new-components) for instructions on how to add those docs.

### 🍺 Submit code

All code contributions should be made through the normal [GitHub Flow](https://www.w3schools.com/git/git_github_flow.asp#:~:text=The%20GitHub%20flow%20is%20a,Make%20changes%20and%20add%20Commits). Basically, make a branch and submit a pull request.

Generally, it's better to avoid bundling several new features or components in a single PR. Breaking them apart into smaller, individual contributions makes them easier to review and manage.

Once you've submitted your PR, tag an editor to review it.

An editor will approve your PR after addressing any issues they see. Once an editor approves and there are no code conflicts, you can merge your PR into master.

### ✉️ Publishing to the team

For now, only editors should publish new versions of the library to npm. We'll follow [semantic versioning](https://semver.org/) conventions. Most MINOR and all MAJOR version changes should be identified ahead of time during PR review.
