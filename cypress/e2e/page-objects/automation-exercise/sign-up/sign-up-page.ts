export default class SignUp {
  readonly input: {
    name: string;
    password: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
  };

  readonly btn: {
    createAccount: string;
    continue: string;
  };

  readonly radioBtn: {
    mr: string;
    mrs: string;
  };

  readonly dropdown: {
    day: string;
    month: string;
    year: string;
    country: string;
  };

  readonly label: {
    accountCreated: '[data-qa="account-created"] > b';
    congratulate: '[data-qa="account-created"] + p';
  };

  constructor() {
    this.input = {
      name: '[data-qa="name"]',
      password: '[data-qa="password"]',
      firstName: '[data-qa="first_name"]',
      lastName: '[data-qa="last_name"]',
      company: '[data-qa="company"]',
      address: '[data-qa="address"]',
      state: '[data-qa="state"]',
      city: '[data-qa="city"]',
      zipcode: '[data-qa="zipcode"]',
      mobile: '[data-qa="mobile_number"]',
    };

    this.btn = {
      createAccount: '[data-qa="create-account"]',
      continue: '[data-qa="continue-button"]',
    };

    this.radioBtn = {
      mr: '[value="Mr"]',
      mrs: '[value="Mrs"]',
    };

    this.dropdown = {
      day: '[data-qa="days"]',
      month: '[data-qa="months"]',
      year: '[data-qa="years"]',
      country: '[data-qa="country"]',
    };
  }
}
