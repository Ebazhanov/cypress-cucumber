Feature: Lendico QA Challenge

  Scenario: Plan A
    Given prefilled Company information section 'PlanA'
    And company representatives section 'PlanA'
    When customer accepts all checkboxes and clicks Submit button
    Then redirects to Ready page with correctly shown data 'PlanA' entered by the customer

  Scenario: Plan B 1.1
    Given prefilled Company information section 'PlanA'
    And customer accepts all checkboxes and clicks Submit button
    Then shows validation general error message "Nicht alle Felder wurden korrekt...."


