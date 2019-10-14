
import { defineSupportCode } from 'cucumber';
import bingPage from '../pageobjects/bing-search.page';
import myAccount from '../pageobjects/ta-myaccount.page';
import landingPage from '../pageobjects/landing.page'

defineSupportCode(function({ Then }) {
  // *** belongs to Bing search feature
  Then(/^I should see a list of search results$/, function() {
    bingPage.isSearched().should.be.true;
  });

  // *** belongs to ta-loging  feature
  Then(/^I should see the message "([^"]*)" on my account page$/, function(message) {
    myAccount.getUserInfo().should.equal(message);
  });

// *** belongs to Saltash
    Then(/^I should see "([^"]*)"$/, function(loginErrorMessage) {
        landingPage.getUserError().should.equal(loginErrorMessage);
    });


});
