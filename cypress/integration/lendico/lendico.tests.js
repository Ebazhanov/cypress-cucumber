import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { LandingPage } from '../pages/login.steps';

before(() => {
  cy.visit('/', {
    auth: {
      username: 'QA-CHALLENGE',
      password: 'jooTh9me',
    },
  });
});

const landingPage = new LandingPage();

Given(`Enter company name`, () => {
  cy.get(landingPage.getCompanyNameField()).type('test');
});
