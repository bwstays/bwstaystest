  `$ npm init`

  `$ npm i jest puppeteer jest-puppeteer`

  `$ npm i @babel/core @babel/preset-env babel-jest`

  Configure jest.

  `$ ./node_modules/.bin/jest --init`

  Add files: `babel.config.js`, `jest.config.js`, `jest-puppeteer.config.js`


  Create files:
    - ./example.test.js
    - ./pages/BasePage.js


  Create files:
    - ./tests/example.test.js
    - ./pages/HomePage.js


  Changes:
  - add methods  `clickContactLink()` in file `./pages/HomePage.js` 
  - update `HomePage.js`

  Create files:
    - `./pages/components/TopBar.js`


  Changes:
  - update `file example.test.js`:
    - add `it("Try to login"`
  - refactor - add `constants.js` file, change url

  Create files:
  - `LoginPage.js`


  Changes:
  - add `it("Feedback should work"` in `example.test.js`
  
  Create files:
  - `FeedbackPage.js`

- End-to-End Tests: part 1
  add E2E test (`E2E/example.test.js`)

  Add block `it("Should login to application",` in `E2E/example.test.js` file

  Add variables

 

 