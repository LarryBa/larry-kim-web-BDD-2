import Page from './page';

class MovementsPage extends Page  {
    /**
     * define elements
     */

   // get newButtonMovements()   { return browser.element("//ao-dx-button[@id='listing-toolbar-new']/div/span"); }
    get newButtonMovements()   { return browser.element('//ao-dx-button/div/span'); }





    /**
     * define or overwrite page methods
     */

    open () {
        super.open('https://airops-qa-ui-ng.azurewebsites.net/movements')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    newButton () {
        this.newButtonMovements.click();
    }


}

export default new MovementsPage();
