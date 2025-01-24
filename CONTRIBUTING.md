# Contributing

Thanks for your interest in contributing to RizzUI. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Structure

This repository is structured as follows:

```
apps
  ├── docs
  └── next
packages
  ├── tsconfig
  └── ui
```

| Path                | Description                                 |
| ------------------- | ------------------------------------------- |
| `apps/docs`         | Contains everything about documentation.    |
| `apps/next`         | A NEXT.JS playground to test components.    |
| `packages/tsconfig` | Contains typescript config for this repo.   |
| `packages/ui`       | contains all things related to npm package. |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/rizzui/rizzui.git
```

### Navigate to project directory

```bash
cd rizzui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run the project

```bash
pnpm dev
```

### Build the project

```bash
pnpm build
```

## Testing

Tests are written using [jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom). It will run automatically when you build the project.

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
