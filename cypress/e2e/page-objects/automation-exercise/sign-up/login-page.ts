export default class Login {
  readonly input: {
    loginEmail: string;
    password: string;
    name: string;
    signUpEmail: string;
  };

  readonly btn: {
    login: string;
    singUp: string;
  };

  readonly label: {
    login: string;
    signUp: string;
  };

  readonly alert: {
    incorrectPassword: string;
  };

  constructor() {
    this.input = {
      loginEmail: '[data-qa="login-email"]',
      password: '[data-qa="login-password"]',
      name: '[data-qa="signup-name"]',
      signUpEmail: '[data-qa="signup-email"]',
    };

    this.btn = {
      login: '[data-qa="login-button"]',
      singUp: '[data-qa="signup-email"]',
    };

    this.label = {
      login: ".login-form > h2",
      signUp: ".signup-form > h2",
    };

    this.alert = { incorrectPassword: ".login-form > form > p" };
  }
}
