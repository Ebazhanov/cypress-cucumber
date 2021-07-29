export class SubmitSections {
  rootSubmitSection = '.section-form';

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
