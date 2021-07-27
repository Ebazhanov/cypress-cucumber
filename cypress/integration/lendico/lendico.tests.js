import {And, Given, When} from 'cypress-cucumber-preprocessor/steps';
import {LandingPage} from '../pages/LandingPage';

beforeEach(() => {
    cy.login();
});

const landingPage = new LandingPage();

Given(`prefilled Company information section {string}`, (jsonName) => {
    cy.fixture(`${jsonName}-data.json`).then((data) => {
        cy.get(landingPage.getCompanyNameField()).click().type(data.companyInfo.companyName);
        cy.get(landingPage.getCompanyASDGmbH()).click();
        cy.get(landingPage.getRevenueMoreThen50()).click();
        cy.get(landingPage.getDateFoundedField()).type(data.companyInfo.dateFounded);
        cy.get(landingPage.getLoanPurposeDropDown()).click();
        cy.get(landingPage.getLoanPurposeInvestmentInFixedAssets()).click();
        cy.get(landingPage.getLoanPurposeDropDown()).click();
        cy.get(landingPage.getLoanPurposeInvestmentInFixedAssets()).click();
    })
});

And(`company representatives section {string}`, (jsonName) => {
    cy.fixture(`${jsonName}-data.json`).then((data) => {
        cy.get(landingPage.getRepresentativeInfoSalutationLabel()).click();
        cy.get(landingPage.getFirstNameField()).type(data.personalData.firstName);
        cy.get(landingPage.getLastNameField()).type(data.personalData.lastName);
        cy.get(landingPage.getDateOfBirthdayField()).type(data.personalData.dayOfBirth);
        cy.get(landingPage.getNationalityDropDown()).type(data.personalData.nationality);
        cy.get(landingPage.getPhoneNumberField()).type(data.personalData.phoneNumber);
        cy.get(landingPage.getEmailField()).type(data.personalData.email);
        cy.get(landingPage.getStreetAndHouseNumberField()).type(data.personalData.streetNumber);
        cy.get(landingPage.getPostcodeField()).type(data.personalData.postcode);
        cy.get(landingPage.getCityField()).type(data.personalData.city);
    })
});

And('customer accepts all checkboxes and clicks Submit button', () => {
    cy.get(landingPage.getAcceptLendicoTermsCheckbox()).click()
    cy.get(landingPage.getAgreeToOfferCheckbox()).click()
    cy.get(landingPage.getSubmitButton()).click()
})

Then('shows validation general error message "Nicht alle Felder wurden korrekt...."', () => {
    cy.get(landingPage.getGeneralValidationErrorMessage()).should("be.visible")
})


Then('redirects to Ready page with correctly shown data {string} entered by the customer', (jsonName) => {
    cy.fixture(`${jsonName}-data.json`).then((data) => {
        cy.url().should('contain', '/ready/')
        cy.contains(data.personalData.salutation).should('be.visible')
        cy.contains(data.personalData.firstName).should('be.visible')
        cy.contains(data.personalData.lastName).should('be.visible')
        cy.contains(data.personalData.dayOfBirth).should('be.visible')
        cy.contains(data.personalData.email).should('be.visible')
        cy.contains(data.personalData.phoneNumber).should('be.visible')
        cy.contains(data.personalData.address).should('be.visible')
        cy.contains(data.creditDetails.amount).should('be.visible')
        cy.contains(data.creditDetails.duration).should('be.visible')
        cy.contains(data.companyInfo.companyName).should('be.visible')
        cy.contains(data.companyInfo.dateFounded).should('be.visible')
        cy.contains(data.companyInfo.address).should('be.visible')
    })
})


Given('Selected Amount {string} and Duration {string} years', (amount, duration) => {
    cy.fixture('example.json').then((user) => {
        cy.get('lendico-loan-calculator[type="new"]').shadow().find('.len-text-input__element').clear().type(user.email,{ delay: 500 })
        //cy.get('lendico-loan-calculator[type="new"]').shadow().find('.len-text-input__element').clear().type(amount, {force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    cy.get(landingPage.geAmountField()).clear().type(duration)
})
