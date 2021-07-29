import {And, Given} from 'cypress-cucumber-preprocessor/steps';
import {SubmitSections} from '../pages/SubmitSections';
import {CompanyInformationSection} from "../pages/CompanyInformationSection";
import {CompanyRepresentativesSection} from "../pages/CompanyRepresentativesSection";
import {LoanCalculatorSection} from "../pages/LoanCalculatorSection";
import {LoanSection} from "../pages/LoanSection";

const loanSection = new LoanSection();
const loanCalculatorSection = new LoanCalculatorSection();
const companyInformationSection = new CompanyInformationSection();
const companyRepresentativesSection = new CompanyRepresentativesSection();
const submitSections = new SubmitSections();

Given('lets get started', () => {
    cy.visit('/')
    cy.get(loanSection.getStartButton()).click()
})

When('selected {string} for {string} years and clicks `Start request` button', (amount, duration) => {
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getAmountField())
        .clear({force: true}).type(amount, {force: true})
    cy.ignoreUncaughtException()
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getDurationDropDown()).click()
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getCustomYearsDuration(duration)).click()
    cy.ignoreUncaughtException()
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getRequestToStartButton()).click()
})

When('customer clicks "Request to start" button', () => {
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getRequestToStartButton()).click()
})

Then('shows monthly rate {string} and interest rate {string} with disabled amount field and duration dropdown', (monthlyRate, fixedRate) => {
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getMonthlyRate()).should('contain.text', monthlyRate)
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getInterestRate()).should('contain.text', fixedRate)
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getDisabledAmountField()).should("exist")
    cy.get(loanCalculatorSection.getLoanCalculatorShadow()).shadow()
        .find(loanCalculatorSection.getDisabledDurationDropDown()).should('exist',)
})

Then('shows validation general error message "Nicht alle Felder wurden korrekt...."', () => {
    cy.get(submitSections.getGeneralValidationErrorMessage()).should("be.visible")
})

And(`prefilled Company information section {string}`, (jsonFileName) => {
    cy.fixture(`${jsonFileName}-data.json`).then((data) => {
        cy.get(companyInformationSection.getCompanyNameField()).click().type(data.companyInfo.companyName);
        cy.get(companyInformationSection.getCompanyASDGmbH()).click();
        cy.get(companyInformationSection.getRevenueMoreThen50()).click();
        cy.get(companyInformationSection.getDateFoundedField()).type(data.companyInfo.dateFounded);
        cy.get(companyInformationSection.getLoanPurposeDropDown()).click({force: true});
        cy.get(companyInformationSection.getLoanPurposeInvestmentInFixedAssets()).click();
    })
});

And(`prefilled Personal data section {string}`, (jsonFileName) => {
    cy.fixture(`${jsonFileName}-data.json`).then((data) => {
        cy.get(companyRepresentativesSection.getRepresentativeInfoSalutationLabel()).click();
        cy.get(companyRepresentativesSection.getFirstNameField()).type(data.personalData.firstName);
        cy.get(companyRepresentativesSection.getLastNameField()).type(data.personalData.lastName);
        cy.get(companyRepresentativesSection.getDateOfBirthdayField()).type(data.personalData.dayOfBirth);
        cy.get(companyRepresentativesSection.getNationalityDropDown()).type(data.personalData.nationality);
        cy.get(companyRepresentativesSection.getPhoneNumberField()).type(data.personalData.phoneNumber);
        cy.get(companyRepresentativesSection.getEmailField()).type(data.personalData.email);
        cy.get(companyRepresentativesSection.getStreetAndHouseNumberField()).type(data.personalData.streetNumber);
        cy.get(companyRepresentativesSection.getPostcodeField()).type(data.personalData.postcode);
        cy.get(companyRepresentativesSection.getCityField()).type(data.personalData.city);
    })
});

And('customer accepts all checkboxes and clicks Submit button', () => {
    cy.get(submitSections.getAcceptLendicoTermsCheckbox()).click()
    cy.get(submitSections.getAgreeToOfferCheckbox()).click()
    cy.get(submitSections.getSubmitButton()).click()
})

Then('redirects to Confirmation page with correctly shown data {string} entered by the customer', (jsonFileName) => {
    cy.fixture(`${jsonFileName}-data.json`).then((data) => {
        cy.url().should('contain', '/ready')
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
