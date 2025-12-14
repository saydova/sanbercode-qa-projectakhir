const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // mochawesome reporter configuration
      config.reporter = "mochawesome";
      config.reporterOptions = {
        reportDir: "cypress/reports/mocha",
        overwrite: false,
        html: true,
        json: true,
        // reportFilename dinamic base on spec
        reportFilename: (spec) => {
          const specName = path.basename(spec.relative, path.extname(spec.relative));
          return specName;
        },
      };
      return config;
    },
  },
});
