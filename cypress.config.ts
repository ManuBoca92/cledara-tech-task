import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.hollandandbarrett.com/',
    viewportHeight: 1200,
    viewportWidth: 1500,
    defaultCommandTimeout: 10000,
    requestTimeout: 20000,
    waitForAnimations: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
