const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  responseTimeout: 10000,
  requestTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.stxnext.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    testIsolation: true,
  },
});
