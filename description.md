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
  - add methods `clickHomepageLink()`, `clickOnlineBankingMenuLink()`, `clickFeedbackLink()` in file `./pages/HomePage.js` 
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

[Source code](https://att-c.udemycdn.com/2020-09-10_14-10-57-5006c1de82c84f1c59028e0daeb7ab00/original.zip?response-content-disposition=attachment%3B+filename%3Djest-pptr-project.zip&Expires=1679267049&Signature=WEUsc2qBL~M4dhQJUorHhB-CrUHObwWFVVCKEM1sRyqDjW0W8KLhNQo3GA7m9MjB8G~T-4bfFz4LNXD92rdGQsUf7yQpOGZz0P6d3FzYUfPA0juR7VP53aqMREN8ng~5LdepaaQCst5wVMyxZIyaCb838WqAt3-pckbyEWAMHzofkFvPML1aBVTG1qCYPcvpAmY9-yBvXhJyPjvrUMSj5Toz6tTGtqE6fKRnRZBS~H6MM3jvLxgDXo9MbL40KN0oxH~9YT2Q~b8FBI2oit-ntLexBEYkLW0EwsgDaxZfVRgGBaKzHElp8I5vZZmVw2pfxtAmUr41niSj~V08qB9v2g__&Key-Pair-Id=APKAITJV77WS5ZT7262A) for this section #5 from the course ["Automated Software Testing with Puppeteer"](https://www.udemy.com/course/automated-headless-browser-testing-with-puppeteer/).


 