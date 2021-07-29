export class CompanyInformationSection {
  rootCompanyInformation = '.company-information-container';

  getCompanyNameField() {
    return `${this.rootCompanyInformation} #companyName`;
  }

  getCompanyASDGmbH() {
    return `${this.rootCompanyInformation} .dropdown.company-lookup ul li:nth-child(6) a .company-address`;
  }

  getRevenueMoreThen50() {
    return `${this.rootCompanyInformation} .radio__wrapper > :nth-child(2)`;
  }

  getDateFoundedField() {
    return `${this.rootCompanyInformation} [name="Date_Founded__c"]`;
  }

  getLoanPurposeDropDown() {
    return `${this.rootCompanyInformation} .len-custom-select__input [name="search.loanPurpose__c"]+.len-custom-select__input__icon`;
  }

  getLoanPurposeInvestmentInFixedAssets() {
    return `${this.rootCompanyInformation} .len-custom-select__options span:nth-child(3)`;
  }
}
