# Cledara

Cypress was chosen as the test framework of choice for this task, because I wanted to use a different test framework from the ones currently suggested in the task. I implemented the test framework using a component page object model. CPOM is a model that I was recently introduced to and decided to experiment with it on this task).

## Setup

To run this test, follow these steps, please make sure you have **node** and **yarn** installed on your local machine then follow these steps;

- Clone repo
- Go into directory and run `yarn` to install all dependencies

### How to run tests

Tests can be found inside the `e2e` directory.
To run all tests, use this command `yarn test` inside the root directory.

## Linting

Eslint is used for linting. To run **eslint** use `yarn lint` command

To fix eslint errors run `yarn lint --fix`

## Formatting

Prettier is used to format the code automatically on save. To run **prettier** manually, please use this command `yarn format`

### Open cypress test runner

Run `yarn run cypress:open` to open Cypress. If
If you are opening Cypress for the first time on the this project, then follow these steps;

- Select `E2E Testing`.
- Select the browser of your choice e.g `Chrome`.
- Click on `Start E2E Tesing in Chrome` button.
