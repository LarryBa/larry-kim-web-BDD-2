import Page from './page';

class LandingPage extends Page  {
    /**
     * define elements
     */

    get usernameInput()   { return browser.element('#Loginusername input[type="text"]'); }
   // get usernameInput()   { return browser.element("//input[@name='username']"); }
    get passwordInput()   { return browser.element('#Loginpassword input[type="password"]'); }
   // get passwordInput()   { return browser.element("//input[@name='password']"); }
    get loginButton()   { return browser.element('#LoginLoginBtn'); }
    get contactLink()  {return browser.element('[data-item-id="1_1')}
    get closeLeftSideNavigation()  {return browser.element('i.dx-icon.dx-icon-back');}
    get openLeftSideNavigation()  {return browser.element('//i');}
    get loginErrorMessage()    {return browser.element('//p');}


    // get searchButton()  { return browser.element('//div[@class="mag-glass"]'); }

    /**
     * define or overwrite page methods
     */

    open () {
        super.open('https://airops-qa-ui-ng.azurewebsites.net/login')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    enterUser (user) {
        //this.usernameInput.clearElement();
        this.usernameInput.setValue(user);
    }


    enterPassword (pWord) {
        //this.passwordInput.clearElement();
        this.passwordInput.setValue(pWord);
    }

    login () {
        this.loginButton.click();
    }

//    isSearched () {
  //      this.resultsList.waitForVisible(1000);
    //    return this.resultsList.isVisible();
   // }

    contacts () {
        this.contactLink.click();
    }

    closeLeftSideNav (){
        this.closeLeftSideNavigation.click();
    }

    openLeftSideNav (){
        this.openLeftSideNavigation.isVisible();
        this.openLeftSideNavigation.click();
    }


    getUserError (){
        return this.loginErrorMessage.waitForText();
        return this.loginErrorMessage.getText();
    }
}

export default new LandingPage();
