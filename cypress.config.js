const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true, // aktifkan rekaman video
    setupNodeEvents(on, config) {
      // Mochawesome reporter
      config.reporter = "mochawesome";
      config.reporterOptions = {
        reportDir: "cypress/reports/mocha",
        overwrite: false,
        html: true,
        json: true,
        embeddedScreenshots: true, // embed screenshot di HTML
        inlineAssets: true,         // self-contained HTML
        saveAllAttempts: true,      // simpan semua percobaan test
      };

      // Log screenshot path setelah diambil
      on("after:screenshot", (details) => {
        console.log("Screenshot taken:", details.path);
      });

      // Bisa hook tambahan untuk video atau laporan custom
      on("after:spec", (spec, results) => {
        console.log(`Spec finished: ${spec.name}`);
        if (results && results.video) {
          console.log(`Video saved at: ${results.video}`);
        }
      });

      return config;
    },
  },
});
