import Login from "../../page-objects/automation-exercise/sign-up/login-page";
import HomePage from "../../page-objects/automation-exercise/home-page";
import * as userData from "../../../test-data/user-data.json";
import * as message from "../../../test-data/label-messages.json";

describe("Log in and log out tests", () => {
  const homePage = new HomePage();
  const login = new Login();

  beforeEach(() => {
    cy.visit("/");
    cy.get(homePage.label.carouselHeading).should(
      "have.text",
      message.homePage.carouselHeading
    );
    cy.get(homePage.link.login).click();
    cy.get(login.label.login).should(
      "have.text",
      message.login.loginLabelMessage
    );
  });

  it("successfully logs in  and logs out of the application", () => {
    //user logs in the app
    cy.get(login.input.loginEmail).type(userData.login.email);
    cy.get(login.input.password).type(userData.login.validPassword);
    cy.get(login.btn.login).click();

    //confirms user successfull login
    cy.get(homePage.label.name).should("have.text", userData.login.name);
    cy.get(homePage.link.logout).should("be.visible");

    //user logs out of the app
    cy.get(homePage.link.logout).click();

    //confirms user successfully logged out
    cy.get(login.label.login)
      .should("be.visible")
      .and("have.text", message.login.loginLabelMessage);
    cy.get(homePage.link.logout).should("not.exist");
  });

  it("verifies user can't log in with invalid password", () => {
    cy.get(login.input.loginEmail).type(userData.login.email);
    cy.get(login.input.password).type(userData.login.invalidPassword);
    cy.get(login.btn.login).click();

    //verify user can't login with invalid password
    cy.get(login.alert.incorrectPassword)
      .should("be.visible")
      .and("have.text", message.login.invalidPassword);
  });
});
