# React Starter Kit

Add short description of application here....

[![Framework: Create React App](https://img.shields.io/badge/Bootstraped-Create%20React%20App-0ad1aa?style=flat-square&logo=react)](https://create-react-app.dev)
[![Language: Typescript](https://img.shields.io/badge/Language-Typescript-007acc?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Code Style: Google](https://img.shields.io/badge/Code%20Style-Google%20GTS-blueviolet.svg?style=flat-square&logo=google)](https://github.com/google/gts)

---

## Getting Started

ADD the steps to get started here...

- [Available Scripts](#available-scripts)
- [Development Guidelines](#development-guidelines)
- [Commit Messaging Guidelines](#commit-messaging-guidelines)
- [Project Dependencies](#project-dependencies)
- [Learn More](#learn-more)

---

## Available Scripts

In the project directory, you can run:

> ### `npm start`
>
> Runs the app in the development mode.<br />
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
>
> The page will reload if you make edits.<br />
> You will also see any lint errors in the console.

> ### `npm run commit`
>
> Runs `Commitizen`, a command line utility, to ensure all commits have a uniformed format. All commits will be linted, so this script helps alleviate the pain of failing `git commit` linting errors.

> ### `npm test`
>
> Launches the test runner in the interactive watch mode.<br />
> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> ### `npm build`
>
> Builds the app for production to the `build` folder.<br />
> It correctly bundles React in production mode and optimizes the build for the best performance.
>
> The build is minified and the filenames include the hashes.<br />
> Your app is ready to be deployed!
>
> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more > information.

> ### `npm run check`
>
> Lints and checks for formatting problems using Google Typescript Style configuration.

> ### `npm run fix`
>
> Automatically fixes formatting and linting problems (if possible) using Google Typescript Style configuration.

> ### `npm run clean:dist`
>
> Removes output files from `npm build`

> ### `npm run clean:pkg`
>
> Removes all `node_modules` & `package-lock.json` file in preparation for a fresh install.

> ### `npm run storybook`
>
> Starts the storybook documentation site [Storybook Docs](https://storybook.js.org/docs/guides/quick-start-guide/)

> ### `npm run build-storybook`
>
> Builds the storybook documentation site for deployment [Storybook Docs](https://storybook.js.org/docs/guides/quick-start-guide/)

> ### `npm run mock-start`
>
> Starts a mock server that utilizes `json-server` to support offline data.

---

## Development Guidelines

**Keep It Simple**

- Clear vs Clever
- Single Responsibility Principle.
- Keep component files small.

**Separation of Concerns**

- Prioritize creating small / reusable UI components
- Thinking In React (https://reactjs.org/docs/thinking-in-react.html)

**Write Self-Documenting Code**

- Using declarative programming paradigm
- Descriptive naming conventions

**Resist Premature Optimization**

**DRY Coding Principles**

**Atomic GIT Commits**

- Each commit should be self-contained, related, and fully-functional revolving around a single task or fix.
- "Self-contained, and related" means that commits should contain all changes and files related to the commit in question, and only those changes.
- "Fully-functional" means that each commit along the way should be a fully buildable/passable stopping point.

**Fully review own code before notifying reviewers**

**Utilize ES6 features when applicable:**

- Destructure props and/or state
- Spread & Rest operators
- .map, .filter, etc.

**Mindfully add code to production:**

- Should be as close to production ready as possible.

**Organization of import statements:**

- Ordered by 3rd party imports, global imports, relative imports.

**Prioritize using functional components over class components.**

- This is where hooks can help!

---

## Commit Messaging Guidelines

We are following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification.

### Summary:

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- **`fix`**: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
- **`feat`**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- **`BREAKING CHANGE`**: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
- types other than `fix`: and `feat`: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, and others.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.

### Example:

```
feat(`Jira-tag`/`story-number`): Added home page routing
```

[Learn More](https://www.conventionalcommits.org/en/v1.0.0/#summary)

---

## Project Dependencies

Below is a list of libraries & tools that are being leveraged.

### Foundation:

- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[Create React App](https://create-react-app.dev)** - React application bootstrap engine.
- **[Typescript](https://www.typescriptlang.org)** - Adding type safety to Javascript
- **[git](https://git-scm.com/)** - Git is a distributed version-control system for tracking changes in source code during software development.

### Utility:

- **[Lodash](https://lodash.com/)** - A modern JavaScript utility library delivering modularity, performance & extras.
- **[Polished](https://polished.js.org/)** - A lightweight toolset to help styles calculations in JavaScript
- **[Numeral](http://numeraljs.com/)** - A javascript library for formatting and manipulating numbers.
- **[clsx](https://polished.js.org/)** - A utility for constructing `className` strings conditionally.
- **[axios](https://github.com/axios/axios)** - A utility for creating promise based HTTP client for the browser and node.js
- **[yup](https://github.com/jquense/yup)** - Dead simple Object schema validation. Pairs with Formik. [(examples)](https://jaredpalmer.com/formik/docs/guides/validation)
- **[React Router](https://reacttraining.com/react-router/web/guides/quick-start)** - Routing utility for React apps.

### UI:

- **[Styled Components](https://lodash.com/)** - Styling library in Javascript
- **[Recharts](https://recharts.org/en-US/)** - Charting component library
- **[React Toastify](https://github.com/fkhadra/react-toastify)** - Notification component library
- **[React Modal](https://github.com/reactjs/react-modal)** - Accessible modal dialog component for React
- **[Formik](https://jaredpalmer.com/formik/)** - React Form Builder library
- **[Storybook](https://storybook.js.org/)** - Playground for developing UI components in isolation as well as showcasing all completed components

### Development:

- **[Json Server](https://github.com/typicode/json-server)** - Mock server that creates a full fake REST API.
- **[Casual](https://github.com/boo1ean/casual#readme)** - Mock data generator library.
- **[Google GTS](https://github.com/google/gts)** - Google's Typescript Styling standards & cli.
- **[Prettier](https://prettier.io)** - Typescript formatter.
- **[ESLint + TSLint](https://eslint.org/)** - Typescript linting.
- **[Jest](https://jestjs.io/)** - JavaScript Testing Framework.
- **[React Testing Library](https://eslint.org/)** - React component testing
- **[Commitizen](http://commitizen.github.io/cz-cli/)** - git commit prompting
- **[Commitlint](https://commitlint.js.org/)** - Linting git commit messages
- **[CZ Conventional Changelog](https://github.com/commitizen/cz-conventional-changelog)** - git commit templates
- **[Husky](https://github.com/typicode/husky)** - git hooks task runner
- **[Lint Staged](https://github.com/okonet/lint-staged)** - git staged files task runner

---

## Suggested Code Editor Plugins

### VS Code

#### Must Haves:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VSCode Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

#### Optional:

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
- [Reload](https://marketplace.visualstudio.com/items?itemName=natqe.reload)

---

## Learn More

### React Resources

- [React documentation](https://reactjs.org/)

---

### [[ ⬆ BACK TO TOP ⬆ ]](#getting-started)
