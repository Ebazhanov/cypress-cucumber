export class LoanCalculatorSection {
  getLoanCalculatorShadow() {
    return 'lendico-loan-calculator[type="new"]';
  }

  getAmountField() {
    return '.len-text-input input';
  }

  getDisabledAmountField() {
    return '.len-text-input--disabled';
  }

  getDurationDropDown() {
    return '.len-custom-select > div > input';
  }

  getCustomYearsDuration(duration) {
    return `.len-custom-select .len-custom-select__options > span:nth-child(${duration})`;
  }

  getMonthlyRate() {
    return '.len-widget__property-wrapper div:nth-child(2) span:nth-child(1)';
  }

  getInterestRate() {
    return '.len-widget__property-wrapper div:nth-child(2) span:nth-child(2)';
  }

  getDisabledDurationDropDown() {
    return '.len-custom-select__input--disabled';
  }

  getRequestToStartButton() {
    return '.len-button';
  }
}
