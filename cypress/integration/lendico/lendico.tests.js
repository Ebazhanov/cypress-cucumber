import {And, Given, When} from 'cypress-cucumber-preprocessor/steps';
import {LandingPage} from '../pages/LandingPage';

before(() => {
    cy.login();
});

const landingPage = new LandingPage();

Given(`Selected company - ASD GmbH`, () => {
    cy.get(landingPage.getCompanyNameField()).click().type('ASD GmbH');
    cy.get(landingPage.getCompanyASDGmbH()).click();
});

When(`Selects revenue with more then 50k`, () => {
    cy.get(landingPage.getRevenueMoreThen()).click();
});

And('Enters date founded field', () => {
    cy.get(landingPage.getDateFoundedField()).type('02.2001');
});

And('Selects Loan purpose - Investment in Fixed Assets', () => {
    cy.get(landingPage.getLoanPurposeDropDown()).click();
    cy.get(landingPage.getLoanPurposeInvestmentInFixedAssets()).click();
});

And('Selects representative salutation - Herr', () => {
    cy.get(landingPage.getRepresentativeInfoSalutationLabel()).click();
});

And('Enter First name {string} and Last Name {string}', (firstName, lastName) => {
    cy.get(landingPage.getFirstNameField()).type(firstName);
    cy.get(landingPage.getLastNameField()).type(lastName);
});

And('Enter Day of Birth {string}, Nationality {string} and phone number {string}', (dayOfBirth, nationality, phoneNumber) => {
    cy.get(landingPage.getDateOfBirthdayField()).type(dayOfBirth);
    cy.get(landingPage.getNationalityDropDown()).type(nationality);
    cy.get(landingPage.getPhoneNumberField()).type(phoneNumber);
});

And('Enter Email {string}, Street and house number {string}, Postcode {string} and City {string}', (email, streetNumber, postcode, city) => {
    cy.get(landingPage.getEmailField()).type(email);
    cy.get(landingPage.getStreetAndHouseNumberField()).type(streetNumber);
    cy.get(landingPage.getPostcodeField()).type(postcode);
    cy.get(landingPage.getCityField()).type(city);
});

And('Clicks accept Lendico\'s terms and agree with offers ...', () => {
    cy.get(landingPage.getAcceptLendicoTermsCheckbox()).click()
    cy.get(landingPage.getAgreeToOfferCheckbox()).click()
    cy.get(landingPage.getSubmitButton()).click()
})

When('Clicks on Submit button', () => {
    cy.get(landingPage.getSubmitButton()).click()
})

Then('Successfully redirected to review page with customer data', () => {
    cy.url().should('contain', '/ready/')
})

And('Display correctly Personal data: {string}, {string}, {string}, {string}, {string}, {string}, {string}', (salutation, firstName, lastName, bithDate, email, phoneNumber, address) => {
    cy.contains(salutation).should('be.visible')
    cy.contains(firstName).should('be.visible')
    cy.contains(lastName).should('be.visible')
    cy.contains(bithDate).should('be.visible')
    cy.contains(email).should('be.visible')
    cy.contains(phoneNumber).should('be.visible')
    cy.contains(address).should('be.visible')
})

And('Display correctly Credit Details data: {string}, {string}', (amount, duration) => {
    cy.contains(amount).should('be.visible')
    cy.contains(duration).should('be.visible')
})

And('Display correctly Company information data: {string}, {string}, {string}', (companyName, establishmentDate, address) => {
    cy.contains(companyName).should('be.visible')
    cy.contains(establishmentDate).should('be.visible')
    cy.contains(address).should('be.visible')
})

Given('Selected Amount {string} and Duration {string} years', (amount, duration)=>{
    cy.get('.loan-calculator').shadow().find('div.len-text-wrapper.len-widget__column > div.len-text-input > input').click()
    cy.get(landingPage.geAmountField()).clear().type(duration)
})
