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
- If needed, provide any links to best practice guidelines that support the change you want to make, e.g., for making accessibility improvements to components.
- Tag others on the team who may have expertise or would contribute to any needed discussion.
- **Always tag an editor.**

### 🧹 Follow code standards

Once you're ready to submit code, be sure it's properly formatted _before_ you ask for a review and run our built-in code linters (eslint + prettier) over your changed files:

```console
pnpm lint && pnpm format
```

Any public methods or component props should be properly typed and documented with comments. (See existing components for examples.) For future developers, also add comments around any tricky bits of _internal_ logic you're adding.

### 📝 Write Storybook stories

All new components and component features should be accompanied by [Storybook stories](https://reuters-graphics.github.io/graphics-svelte-components/) included with your PR. See other components for examples of how to add them.

Be sure to target your Storybook docs for non-developers with real world examples of how to use components within the graphics kit.

### 🍺 Submit code with a changeset

All code contributions should be made through the normal [GitHub Flow](https://www.w3schools.com/git/git_github_flow.asp#:~:text=The%20GitHub%20flow%20is%20a,Make%20changes%20and%20add%20Commits). Basically, make a branch and submit a pull request.

(Generally, it's better to avoid bundling several new features or components in a single PR. Breaking them apart into smaller, individual contributions makes them easier to review and manage.)

Each PR should be accompanied by a [changeset](https://github.com/changesets/changesets). You can add one by running:

```console
pnpm changeset add
```

Once you've submitted your PR, tag an editor to review it.

An editor will approve your PR after addressing any issues they see. Once an editor approves and there are no conflicts or failing tests, you can merge your PR into master.

### Test in downstream projects

Once a PR is created, a testable version of the library is published via [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new). A comment will be added to your PR that documents how to install the library's test version. Use it to test any new components or features in the graphics kit.

### ✉️ Publishing to the team

Publishing is handled via [changesets](https://github.com/changesets/changesets) and should follow [semantic versioning](https://semver.org/) conventions. Most MINOR and all MAJOR version changes should be identified ahead of time during PR review.

Once a new version of the library is published, a [PR will be created in the graphics kit](https://github.com/reuters-graphics/bluprint_graphics-kit/pulls) to update this dependency. Merge that.
