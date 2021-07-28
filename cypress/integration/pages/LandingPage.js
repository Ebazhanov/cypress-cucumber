export class LandingPage {
    rootCompanyInformation = '.company-information-container';
    rootCompanyRepresentative = '.company-representative-container';
    rootSubmitSection = '.section-form';

    getLoanCalculatorShadow() {
        return 'lendico-loan-calculator[type="new"]';
    }

    getAmountField(){
        return '.len-text-input__element'
    }

    getDisabledAmountField(){
        return '.len-text-input--disabled'
    }

    getMonthlyRate(){
        return '.len-widget__property-wrapper div:nth-child(2) span:nth-child(1)'
    }

    getInterestRate(){
        return '.len-widget__property-wrapper > div:nth-child(2) > span:nth-child(2)'
    }

    getDisabledDurationDropDown(){
        return '.len-custom-select__input--disabled'
    }

    getRequestToStartButton() {
        return '.len-button';
    }

    getCompanyNameField() {
        return `${this.rootCompanyInformation} #companyName`;
    }

    getCompanyASDGmbH() {
        return `${this.rootCompanyInformation} .dropdown.company-lookup li:nth-child(7) span.company-address`;
    }

    getRevenueMoreThen50() {
        return `${this.rootCompanyInformation} .radio__wrapper > :nth-child(2)`;
    }

    getDateFoundedField() {
        return `${this.rootCompanyInformation} [name="Date_Founded__c"]`;
    }

    getLoanPurposeDropDown() {
        return `${this.rootCompanyInformation} .second-column [data-v-3b5fe05d=""] .len-custom-select .len-custom-select__input`;
    }

    getLoanPurposeInvestmentInFixedAssets() {
        return `${this.rootCompanyInformation} .len-custom-select__options > :nth-child(3)`;
    }

    getRepresentativeInfoSalutationLabel() {
        return `${this.rootCompanyRepresentative} [data-qa-id="representative-info-salutation"] [value="Herr"] + span`;
    }

    getFirstNameField() {
        return `${this.rootCompanyRepresentative} [name="search.FirstName"]`;
    }

    getLastNameField() {
        return `${this.rootCompanyRepresentative} [data-qa-id="representative-info-lastname"]`;
    }

    getDateOfBirthdayField() {
        return `${this.rootCompanyRepresentative} [name="dob"]`;
    }

    getNationalityDropDown() {
        return `${this.rootCompanyRepresentative} [data-qa-id="representative-info-nationality"]`;
    }

    getPhoneNumberField() {
        return `${this.rootCompanyRepresentative} [name="search.mobilePhone"]`;
    }

    getEmailField() {
        return `${this.rootCompanyRepresentative} [name="search.Email"]`;
    }

    getStreetAndHouseNumberField() {
        return `${this.rootCompanyRepresentative} [name="search.UserStreet"]`;
    }

    getPostcodeField() {
        return `${this.rootCompanyRepresentative} [name="search.userPostcodeDe"]`;
    }

    getCityField() {
        return `${this.rootCompanyRepresentative} [name="search.userCity"]`;
    }

    getAcceptLendicoTermsCheckbox() {
        return `${this.rootSubmitSection} [name="Terms_Conditions_Timestamp__c"]+span`;
    }

    getAgreeToOfferCheckbox() {
        return `${this.rootSubmitSection} [name="MarketingAgreement__c"]+span`;
    }

    getSubmitButton() {
        return `${this.rootSubmitSection} [data-qa-id="submit-form-button"]`;
    }

    getGeneralValidationErrorMessage() {
        return `${this.rootSubmitSection} .general-error-container p`;
    }
}
