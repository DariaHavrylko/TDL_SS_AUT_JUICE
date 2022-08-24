import BasePage from "./basePage";

class RegistrationPage extends BasePage {
  static get url() {
    return "http://localhost:3000/#/register";
  }


  static get emailField() {
    return cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestion() {
    return cy.get(".mat-select-placeholder");
  }

  static get nameOfYourFavoritePet() {
    return cy.get("#mat-option-6 > .mat-option-text");
  }
  static get answer() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("#registerButton");
  }
  
 

}
export default RegistrationPage;
