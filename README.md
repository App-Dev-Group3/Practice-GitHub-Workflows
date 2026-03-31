# Practice-GitHub-Workflows

A hands-on guide to practicing Git workflows for team collaboration. This repository includes a simple Node.js project, automated CI/CD pipelines, and step-by-step instructions for common Git workflow patterns.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Git Workflow Guide](#git-workflow-guide)
- [GitHub Actions CI/CD](#github-actions-cicd)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Overview

This repository is designed to help developers practice real-world Git workflows using a feature-branch model. You will learn how to:

- Create and manage branches
- Open pull requests for code review
- Use GitHub Actions to automate testing and deployment
- Merge changes safely into the `main` branch

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/App-Dev-Group3/Practice-GitHub-Workflows.git
cd Practice-GitHub-Workflows

# 2. Install dependencies
npm install

# 3. Run the tests
npm test
```

---

## Git Workflow Guide

### 1. Start from a fresh `main` branch

```bash
git checkout main
git pull origin main
```

### 2. Create a feature branch

Branch names should be descriptive and use kebab-case:

```bash
git checkout -b feature/your-feature-name
```

### 3. Make changes and commit often

Write clear, concise commit messages:

```bash
git add .
git commit -m "feat: add user greeting function"
```

### 4. Push your branch and open a Pull Request

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub targeting the `main` branch.

### 5. Code Review

- At least one team member must review and approve before merging.
- Address any review comments with new commits on your branch.

### 6. Merge and clean up

After approval and all CI checks pass, merge via the GitHub UI, then:

```bash
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

---

## GitHub Actions CI/CD

Two workflows are included:

| Workflow | Trigger | Description |
|----------|---------|-------------|
| **CI** (`ci.yml`) | Push / Pull Request | Runs linting and tests on every push and PR |
| **Release** (`release.yml`) | Push to `main` | Prints a deployment summary when changes land on `main` |

Check the [`.github/workflows/`](.github/workflows) directory for the full configuration.

---

## Project Structure

```
Practice-GitHub-Workflows/
├── .github/
│   └── workflows/
│       ├── ci.yml        # Continuous Integration workflow
│       └── release.yml   # Release / deployment workflow
├── src/
│   └── greet.js          # Example module
├── tests/
│   └── greet.test.js     # Unit tests
├── package.json
└── README.md
```

---

## Contributing

1. Fork or clone this repository.
2. Follow the [Git Workflow Guide](#git-workflow-guide) above.
3. Ensure `npm test` passes locally before opening a PR.
4. Keep PRs focused — one feature or fix per PR.