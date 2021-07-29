export class CompanyRepresentativesSection {
  rootCompanyRepresentative = '.company-representative-container';

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
}
