# QA Challange Lendico

Project structure
----------------- 
```
Cypress
    │── integration
    │       ├── PlanA-data.json
    │       └── PlanB-data.json
    ├── integration
    │   ├── lendico
    │   │   └── lendico.tests.js
    │   ├── pages
    │   │   ├── LandingPage
    │   │   └── profile
    │   └── lendico.feature   
```

The list of tests: 

```
Feature: Lendico QA Challenge

  Background:
    Given user browser authorization

  Scenario Outline: Plan A - apply for loan
    When selected "<amount>" for "<years>" years and clicks `Start request` button
    And prefilled Company information section "<jsonFileName>"
    And prefilled Personal data section "<jsonFileName>"
    And customer accepts all checkboxes and clicks Submit button
    Then redirects to Confirmation page with correctly shown data "<jsonFileName>" entered by the customer

    Examples:
      | amount  | years | jsonFileName |
      | 400.000 | 5     | PlanA        |

  Scenario Outline: Plan B 1.1 - display general validation error
    When prefilled Company information section "<jsonFileName>"
    And customer accepts all checkboxes and clicks Submit button
    Then shows validation general error message "Nicht alle Felder wurden korrekt...."

    Examples:
      | jsonFileName |
      | PlanB        |

  Scenario Outline: Plan B 1.2 - calculates monthly and interest rate
    When selected "<amount>" for "<years>" years and clicks `Start request` button
    Then shows monthly rate "<monthlyRate>" and interest rate "<interestRate>" with disabled amount field and duration dropdown

    Examples:
      | amount | years | monthlyRate | interestRate |
      | 10.000 | 2     | 0,00 € | 1,99 %       |
```
