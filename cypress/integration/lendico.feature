Feature: Lendico QA Challenge

  Scenario: Plan A - apply for loan
    Given selected '400.000' for '4 jahre' and clicks `Start request` button
    And prefilled Company information section 'PlanA'
    And prefilled Personal data section 'PlanA'
    When customer accepts all checkboxes and clicks Submit button
    Then redirects to Confirmation page with correctly shown data 'PlanA' entered by the customer

  Scenario: Plan B 1.1 - display general validation error
    Given prefilled Company information section 'PlanA'
    And customer accepts all checkboxes and clicks Submit button
    Then shows validation general error message "Nicht alle Felder wurden korrekt...."

  Scenario: Plan B 1.2 - calculates monthly and interest rate
    Given selected '100.000' for '8 jahre' and clicks `Start request` button
    Then shows monthly rate '0,00 €' and interest rate '1,99 %' with disabled amount field and duration dropdown


