# Puppeteer with Jest & Docker - Page Object Model - Automation

Design Page Objects and run Tests

## Run application
 
Clone the repository

```bash
git clone https://github.com/bwstays/bwstaystest
```

Install dependencies

```bash
Install Node modules with command : npm i
```

Run test

```bash
Test Execution Sequentially (OR) Parallel
npm run test (OR) npm test                   #For Parallel execution
npm test tests\E2E\example.test.js                         #For running individual test
```

Folder Structure

    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── BasePage.js                     # Base page testing functionality
    │   ├── HomePage.js                  # Landing page testing functionality
    │
    ├── tests                                # Test suite
    │    ├── E2E\example.test.js              # Automated Test Script
    │
    │── config.js                           # Confiuguration JavSacript File
    │
    │
    ├── utils                               # Utility files for testing
    │    ├──locators.js                     # HTML and CSS identifier for elements to test
    │
    │
