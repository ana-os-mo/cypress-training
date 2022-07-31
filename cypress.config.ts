import {defineConfig} from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    video: true,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // modify config values examples
      config.defaultCommandTimeout = 20000;
      config.responseTimeout = 20000;

      // IMPORTANT return the updated config object
      return config;
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome, mocha-junit-reporter",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mochawesome",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: "cypress/reports/junit/results-[hash].xml",
      },
    },
  },
});
