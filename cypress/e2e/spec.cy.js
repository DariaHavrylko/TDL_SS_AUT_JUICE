import LoginPage from "../pageObjects/loginPage";
import RegistrationPage from "../pageObjects/registrationPage";
import SearchPage from "../pageObjects/searchPage";

context("Elements Page", () => {
  context("Log in and Registration", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.dismiss.click();
      LoginPage.meWantIt.click();
    });
    
    it("Log in - scenario 1:", () => {
    // Scenario - Login
    // Click Account button
    // Click Login button
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section
      LoginPage.accountButton.click();
      LoginPage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.logIn.click();
      LoginPage.accountButton.click();
      LoginPage.validateDemo.contains("demo").and('be.visible') ;
    });

    it("Registration - scenario 2:", () => {
      //Scenario - Registration
      // Click Account button
      // Login button
      // Click "Not yet a customer?"
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      // Click on Security Question menu
      // Select  "Name of your favorite pet?"
      // Fill in answer
      // Click Register button
      // Set email value to previously created email
      // Set password value to previously used password value
      // Click login button
      // Click Account button
      // Validate that account name (with previously created email address) appears in the menu section
        LoginPage.accountButton.click();
        LoginPage.loginButton.click();
        LoginPage.goToRegistration.click();
        let x = Math.round(Math.random() * 1000);
        RegistrationPage.emailField.type(`MyEmail_${x}@gmail.com`);
        RegistrationPage.passwordField.type("12345");
        RegistrationPage.repeatPasswordField.type("12345");
        RegistrationPage.securityQuestion.click();
        RegistrationPage.nameOfYourFavoritePet.click();
        RegistrationPage.answer.type("Molly");
        RegistrationPage.registerButton.click();
        LoginPage.emailField.type(`MyEmail_${x}@gmail.com`);
        LoginPage.passwordField.type("12345");
        LoginPage.logIn.click();
        LoginPage.accountButton.click();
        LoginPage.validateDemo.contains(`MyEmail_${x}@gmail.com`).and('be.visible') ;
      });
  });


  context("Text box scenarios", () => {
    beforeEach(() => {
      SearchPage.visit();
      LoginPage.dismiss.click();
      LoginPage.meWantIt.click();
    });
    
    it("Search and validate Lemon - scenario 3:", () => {
      //Scenario - Search and validate Lemon
      // Click on search icon
      // Search for Lemon
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.searchIcon.click();
      SearchPage.searchLemon.type("lemon{enter}");
      SearchPage.selectLemon.click();
      SearchPage.validate.should("have.text", "Sour but full of vitamins.")
    });


    it("Search 500ml and validate Lemon, while having multiple cards - scenario 4:", () => {
      //Scenario - Search 500ml and validate Lemon, while having multiple cards
      // Click on search icon
      // Search for 500ml
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.searchIcon.click();
      SearchPage.searchSomething.type("500ml{enter}");
      SearchPage.selectLemonNext.click();
      SearchPage.validate.should("have.text", "Sour but full of vitamins.")
    });


    it("Scenario - Search 500ml and validate cards - scenario 5:", () => {
      // Scenario - Search 500ml and validate cards
      // Click on search icon
      // Search for 500ml
      // Select a product card - Eggfruit Juice (500ml)
      // Validate that the card (should) contains "Now with even more exotic flavour."
      // Close the card
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
      // Close the card
      // Select a product card - Strawberry Juice (500ml)
      // Validate that the card (should) contains "Sweet & tasty!"    
      SearchPage.searchIcon.click();
      SearchPage.searchSomething.type("500ml{enter}");
      SearchPage.selectEggfruit.click();
      SearchPage.validate.should("have.text", "Now with even more exotic flavour.")
      SearchPage.closeButton.click();
      SearchPage.selectLemonNext.click();
      SearchPage.validate.should("have.text", "Sour but full of vitamins.");
      SearchPage.closeButton.click();
      SearchPage.selectStrawberry.click();
      SearchPage.validate.should("have.text", "Sweet & tasty!");
    });



    it("Add a review - scenario 6:", () => {
      //Scenario - Add a review
      // Click on search icon
      // Search for Raspberry
      // Select a product card - Raspberry Juice (1000ml)
      // Type in review - "Tastes like metal"
      // Click Submit
      // Click expand reviews button/icon (wait for reviews to appear)
      // Validate review -  "Tastes like metal"  
      LoginPage.accountButton.click();
      LoginPage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.logIn.click();
      SearchPage.searchIcon.click();
      SearchPage.searchSomething.type("Raspberry{enter}");
      SearchPage.selectRaspberry.click();
      SearchPage.review.click();
      SearchPage.review.type("Tastes like metal");
      SearchPage.submitButton.click({force: true});
      SearchPage.expandReviews.click();
      SearchPage.validateReview.contains("Tastes like metal")

    });


    it.only("Validate product card amount- scenario 7:", () => {
      //Scenario - Validate product card amount
      // Validate that the default amount of cards is 12
      // Change items per page (at the bottom of page) to 24
      // Validate that the amount of cards is 24
      // Change items per page (at the bottom of page) to 36
      // Validate that the amount of cards is 36
     
       SearchPage.validateAmountOfCards.should("have.text","12");
       SearchPage.select.click();
       SearchPage.select24.click();
       SearchPage.validateAmountOfCards.should("have.text","24");
       SearchPage.select.click();
       SearchPage.select36.click();
       SearchPage.validateAmountOfCards.should("have.text","36");

    });

  });
});


