/* eslint-disable no-undef */
/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on('uncaught:exception', (err) => {
  // we expect a Tauri error about the window
  // and don't want to fail the test so we return false
  if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});

Given('I am on the Patient Onboarding page', () => {
  cy.visit('https://cancerpatientsupportportal.com/'); // Update with the actual path
});

When('I fill in the registration form', () => {
  cy.get("[data-testid=location]").type('92618');
  cy.get("[type=button]").contains('Cancer Type').as('cancer_type').type('breast cancer');
  cy.get("[role=option]", { timeout: 10000 }).contains('Breast Cancer').click();
});

/*When('I fill in the registration form', () => {
  cy.get('input[name="name"]').type('John Doe');
  cy.get('input[name="cancerType"]').type('Breast Cancer');
  cy.get('input[name="stage"]').type('Stage 2');
  cy.get('input[name="currentTreatment"]').type('Chemotherapy');
});*/

When('I submit the form', () => {
  cy.get("[data-testid=search_btn]", { timeout: 30000 }).click();
});

Then('I should see a success message', () => {
  cy.get('li.count', { timeout: 30000 }).should('not.be.empty');
});
