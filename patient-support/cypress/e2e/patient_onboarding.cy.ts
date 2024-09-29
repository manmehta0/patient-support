import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a Tauri error about the window
  // and don't want to fail the test so we return false
  if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});

Given('I am on the Patient Onboarding page', () => {
  cy.visit('http://localhost:3000/'); // Update with the actual path
});

When('I fill in the registration form', () => {
  cy.get('input[name="name"]').type('John Doe');
  cy.get('input[name="cancerType"]').type('Breast Cancer');
  cy.get('input[name="stage"]').type('Stage 2');
  cy.get('input[name="currentTreatment"]').type('Chemotherapy');
});

When('I submit the form', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see a success message', () => {
  cy.contains('Patient profile created successfully!').should('be.visible');
});
