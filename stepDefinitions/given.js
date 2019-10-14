
import { defineSupportCode } from 'cucumber';
import bingPage from '../pageobjects/bing-search.page';
import loginPage from '../pageobjects/ta-login.page';
import landingPage from '../pageobjects/landing.page';

defineSupportCode(function({ Given }) {

  // *** belongs to Yahoo serch feature
  Given(/^I am on the bing page$/, function() {
    bingPage.open();
    browser.getTitle().should.equal('Bing');
  });

  // *** belongs to ta-loging  feature
  Given(/^I am on the phptravels page$/, function() {
    loginPage.open();     // navigating to login page
  });


  //***Belongs to Saltash landing page
    Given(/^I am on Saltash landing page$/, function() {
        landingPage.open();
        browser.getTitle().should.equal('Saltash');
    });

    Given(/^I am logged into Saltash$/, function() {
        landingPage.open();
        browser.getTitle().should.equal('Saltash');
        landingPage.enterUser("hema.naik@airopssoftware.com");
        landingPage.enterPassword("Password10!");
        landingPage.login();
    });

});
