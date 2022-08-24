
import BasePage from "./basePage";

class SearchPage extends BasePage {
  static get url() {
    return "http://localhost:3000/#/search";
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchSomething() {
    return cy.get("#mat-input-0");
  }

  static get selectLemon() {
    return cy.get(".mat-card");
  }

  static get validate() {
    return cy.get(".container > [fxlayout='row'] > :nth-child(2) > :nth-child(2)");
  }

  static get selectLemonNext() {
    return cy.get("[style='left: calc((50% - 15px + 30px) * 1); width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);'] > .mat-grid-tile-content > .mat-card");
  }

  static get selectEggfruit() {
    return cy.get("[style='left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: 0px; padding-top: calc((50% - 15px) * 1 + 0px);'] > .mat-grid-tile-content > .mat-card");
  }

  static get selectStrawberry() {
    return cy.get("[style='left: 0px; width: calc((50% - 15px) * 1 + 0px); margin-top: calc((50% - 15px + 30px) * 1); padding-top: calc((50% - 15px) * 1 + 0px);'] > .mat-grid-tile-content > .mat-card");
  }


  static get closeButton() {
    return cy.get(".close-dialog");
  }

  static get selectRaspberry() {
    return cy.get(".mat-card");
  }

  static get review() {
    return cy.get(" #mat-input-3");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  static get expandReviews() {
    return cy.get(".mat-content");
  }
 

  static get validateReview() {
    return cy.get(".mat-expansion-panel-body");
  }

  static get validateAmountOfCards() {
    return cy.get("#mat-select-value-1");
  }


  static get select() {
    return cy.get(".mat-select-arrow-wrapper");
  }

  static get select24() {
    return cy.get("#mat-option-1 > .mat-option-text");
  }

  static get select36() {
    return cy.get("#mat-option-2 > .mat-option-text");
  }





 


  



  

  

}
export default SearchPage;
