Feature: Patient Onboarding

  Scenario: Patient registers and submits their profile
    Given I am on the Patient Onboarding page
    When I fill in the registration form
    And I submit the form
    Then I should see a success message
