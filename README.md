# Time Tracker
Ruby on Rails 
React

### Snapshot

![]()

### Introduction.



### Tools

* Rails
* Ruby
* API
* Node.js
* React
* React-DOM
* npm
* CSS
* ES6
* Webpack
* Jest

# Ruby On Rails / React

This is the **GitHub Actions configuration**. If you are looking for the **Stickler configuration**, you can find it [here](https://github.com/microverseinc/linters-config/tree/Stickler/react-redux).

If you are not familiar with linters and GitHub Actions, read [root level README](../README.md).

## Set-up GitHub Actions

This GitHub Action is going to run [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you find style issues.

[Stylelint](https://stylelint.io/) is a linter for your stylesheets that helps you avoid errors and enforce conventions.

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Please do the following **steps in this order**:

1. In the first commit of your feature branch create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](.github/workflows/linters.yml) to that folder.
    - **Remember** to use the file linked above
    - **Remember** that `.github` folder starts with a dot.
2. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
3. When you open your first pull request you should see the result of the GitHub Actions:

![gh actions checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-eslint-stylelint-checks.png)

Click on the `Details` link to see the full output and the errors that need to be fixed:

![gh actions failing checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-html-css-failing-checks.png)

## Set-up linters in your local env

**Note**: The `npm` package manager is going to create a `node_modules` directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a [`.gitignore`](https://git-scm.com/docs/gitignore) file and add `node_modules` to it:

```
# .gitignore
node_modules/
```

### Rubocop

1. Add `gem 'rubocop', '~>0.81.0'` to `Gemfile` (not sure how to use Gemfile? Read [this](https://bundler.io/v1.15/guides/bundler_setup.html)).
2. Run `bundle install`.
3. Copy [.rubocop.yml](./.rubocop.yml) to the root directory of your project
4. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
5. Run `rubocop`.
6. Fix linter errors.
7. **IMPORTANT NOTE**: feel free to research [auto-correct options for Rubocop](https://rubocop.readthedocs.io/en/latest/auto_correct/) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!


### ESLint

1. Run `npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

```
$ npm install --save-dev eslint@6.8.x eslint-config-airbnb@18.1.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-react@7.20.x eslint-plugin-react-hooks@2.5.x

+ eslint-config-airbnb@18.1.0
+ eslint-plugin-react@7.20.6
+ eslint-plugin-import@2.20.2
+ eslint-plugin-jsx-a11y@6.2.3
+ eslint-plugin-react-hooks@2.5.1
+ eslint@6.8.0
added 456 packages from 105 contributors, removed 150 packages, updated 1384 packages and audited 1851 packages in 264.998s

70 packages are looking for funding
```

2. Copy [.eslintrc.json](./.eslintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx eslint .` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Stylelint

1. Run

   ```
   npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator
   ```

   (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).


```
$ npm install --save-dev stylelint@13.3.x stylelint-scss@3.17.x stylelint-config-standard@20.0.x stylelint-csstree-validator

+ stylelint-config-standard@20.0.0
+ stylelint-csstree-validator@1.8.0
+ stylelint-scss@3.17.2
+ stylelint@13.3.3
added 136 packages from 91 contributors, removed 10 packages, updated 6 packages and audited 1987 packages in 67.901s

113 packages are looking for funding
```

2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx stylelint "**/*.{css,scss}"
   ```
   on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

## Test/Deployment Actions

Feel free to add your own deployment actions which can run your tests and deploy to Heroku.

Make sure that you do not modify the [`.github/workflows/linters.yml`](.github/workflows/linters.yml) but that you create a separe GitHub Action workflow file for that.

- [GitHub Actions with Ruby on Rails: Setting up Continuous Integration](https://gorails.com/episodes/github-actions-continuous-integration-ruby-on-rails)
- [Deploying to Heroku from GitHub Actions](https://dev.to/heroku/deploying-to-heroku-from-github-actions-29ej)
- [Building a Rails CI pipeline with GitHub Actions](https://boringrails.com/articles/building-a-rails-ci-pipeline-with-github-actions/)
- [Github Actions to run Rubocop and RSpec tests on Rails with Postgres](https://dev.to/abdellani/github-actions-to-run-rubocop-and-rspec-tests-on-rails-with-postgres-47i)

## Troubleshooting

- If you are building an API only Rails application
For API only Rails application you can remove the Stylelint config. To do so remove line no. [23](https://github.com/microverseinc/linters-config/blob/f0c812753d0418288c404ed4a441a2e7370e9f4e/ror/.github/workflows/linters.yml#L23) to [36](https://github.com/microverseinc/linters-config/blob/f0c812753d0418288c404ed4a441a2e7370e9f4e/ror/.github/workflows/linters.yml#L36) from the [linter.yml]((https://github.com/microverseinc/linters-config/blob/master/ror/.github/workflows/linters.yml)) file.

### Future Features

1. Persistent storage of bookmarks with Firebase DB
2. Feature to remove bookmarks

### To begin

1. Clone Repo by using this command 'git clone --branch development https://github.com/geraldgsh/time-tracker.git'. 
2. 'npm install' to install dependencies
3. Follow [this instruction]() for DB setup.
4. Run 'rails db:migrate' to initialize
5. Type `rails server` in terminal within root project folder.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To Test

Run the following command terminal for root folder

```
$ bundle exec rspec spec/models
.......

Finished in 0.26756 seconds (files took 2.63 seconds to load)
7 examples, 0 failures

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/time-tracker/wiki) for more details. 

#### Live Demo
[Demo](https://time-tracker.netlify.com)

#### Getting Started
Clone repo and open index.html with your favorite browser.

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source


### Github Repo
https://github.com/geraldgsh/time-tracker

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/gh-carder/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.