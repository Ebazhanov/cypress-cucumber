Feature: Lendico QA Challenge

  Scenario: Plan A
    Given selected '400.000' for '8 jahre'
    And prefilled Company information section 'PlanA'
    And prefilled Personal data section 'PlanA'
    When customer accepts all checkboxes and clicks Submit button
    Then redirects to Ready page with correctly shown data 'PlanA' entered by the customer

  Scenario: Plan B 1.1
    Given prefilled Company information section 'PlanA'
    And customer accepts all checkboxes and clicks Submit button
    Then shows validation general error message "Nicht alle Felder wurden korrekt...."

  Scenario: Plan B 1.2
    Given selected '100.000' for '8 jahre'
    When customer clicks "Request to start" button
    Then shows monthly rate '6.468,75 €' and fixed rate '1,99 %' with disabled amount field and duration dropdown


