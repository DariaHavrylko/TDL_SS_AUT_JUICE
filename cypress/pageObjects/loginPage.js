import BasePage from "./basePage";

class LoginPage extends BasePage {
  static get url() {
    return "http://localhost:3000/#/login";
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  
  static get emailField() {
    return cy.get("#email");
  }

  static get passwordField() {
    return cy.get("#password");
  }


  static get logIn() {
    return cy.get("#loginButton");
  }

  static get dismiss() {
    return cy.get(".close-dialog");
  }
  
  static get meWantIt() {
    return cy.get(".cc-btn");
  }
  static get validateDemo() {
    return cy.get(".mat-menu-content > [aria-label='Go to user profile']");
  }

  static get goToRegistration(){
    return cy.get("#newCustomerLink > .primary-link")
  }

 

}
export default LoginPage;
