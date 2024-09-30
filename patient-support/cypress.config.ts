/* eslint-disable no-undef */
/// <reference types="cypress" />
import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      const createEsbuildPlugin =
        require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // return any mods to Cypress
      return config;
    },
  },
});
