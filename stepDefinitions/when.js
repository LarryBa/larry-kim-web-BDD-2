
import { defineSupportCode } from 'cucumber';
import bingPage from '../pageobjects/bing-search.page';
import loginPage from '../pageobjects/ta-login.page';
import landingPage from '../pageobjects/landing.page';
import movementsPage from '../pageobjects/movements.page';

defineSupportCode(function({ When }) {
  // *** belongs to Yahoo serch feature
  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    bingPage.enterText(arg1);
    bingPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    bingPage.search();
  });

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });

    When(/^I click contacts$/, function() {
        landingPage.contacts();
    });

    When(/^I close left side Navigation$/, function() {
        landingPage.closeLeftSideNav();
    });

    When(/^I open left side Navigation$/, function() {
        landingPage.openLeftSideNav();
    });

//*** Belongs to Saltash

    When(/^I enter "([^"]*)" as Username$/, function(user) {
        landingPage.enterUser(user);
       // bingPage.searchInput.getValue().should.equal(user);
    });


    When(/^I enter "([^"]*)" as Password$/, function(pWord) {
        landingPage.enterPassword(pWord);
        // bingPage.searchInput.getValue().should.equal(user);
    });

    When(/^I click on Login button$/, function() {
        landingPage.login();
    });


    When(/^I click New button on Movements Page$/, function() {
        movementsPage.newButton();
    });
});





