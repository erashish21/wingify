# wingify
# Cypress Test Suite

This repository contains automated tests written using Cypress for testing the login page and home page of a web application.

## Prerequisites

Before running the tests, ensure that you have the following software installed:

- Node.js (https://nodejs.org)
- Cypress (https://www.cypress.io)

## Running the Tests

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Open Cypress by running the command: `npx cypress open`.
5. In the Cypress Test Runner, click on the test file you want to run (e.g., login.spec.js or home.spec.js).
6. The tests will run in a new browser window or tab, and you can observe the test execution.

## Test Descriptions

- `login.spec.js`: Contains tests for the login page. It verifies successful login with valid credentials and navigation to the home page.
- `home.spec.js`: Contains tests for the home page. It checks if the values in the transaction table's "Amount" column are sorted in ascending order when the "Amount" header is clicked.

Please note that these tests assume a specific web application at the provided URLs. Adjust the URLs and element selectors according to your application's structure.

Feel free to explore the test files and modify them as per your testing needs.

