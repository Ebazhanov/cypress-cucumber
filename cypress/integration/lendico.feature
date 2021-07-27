Feature: Lendico QA Challenge

  Scenario: Plan A
  given prefilled Company information section
  and company representatives section
  when customer accept all checkboxes and clicks Request button
  then redirect to ... page with shown data entered by the customer

    Given Selected company - ASD GmbH
    When Selects revenue with more then 50k
    And Enters date founded field
    And Selects Loan purpose - Investment in Fixed Assets
    And Selects representative salutation - Herr
    And Enter First name 'Albert' and Last Name 'Einstein'
    And Enter Day of Birth '01.01.1990', Nationality 'Deutschland' and phone number '17476533309'
    And Enter Email 'test@test.com', Street and house number '5', Postcode '10781' and City 'Berlin'
    And Clicks accept Lendico's terms and agree with offers ...
    When Clicks on Submit button
    Then Successfully redirected to review page with customer data
    And Display correctly Personal data: 'Herr', 'Albert', 'Einstein', '01.01.1990', 'test@test.com', '+4917476533309', '5, 10781, Berlin'
    And Display correctly Credit Details data: '300,000.00 €', '4 Jahre'
    And Display correctly Company information data: 'ASD GmbH', '02.2001', 'Kurfürstendamm 180, 10707, Berlin'

  Scenario: Plan B 1.1
  when customer submit request it should displays monthly rate and 'new request' button
  with disabled amount and duration fields

    Given Selected Amount '10.000' and Duration '8' years
    When User clicks on Submit button
    Then Displays Monthly Rate '123123123'
    And Submit button changed to New request
    And Disabled Amount and Duration field


