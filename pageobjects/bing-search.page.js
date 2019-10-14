
import Page from './page';

class BingPage extends Page  {
  /**
  * define elements
  */

  get searchInput()   { return browser.element('#sb_form_q'); }
 // get searchButton()  { return browser.element('//div[@class="mag-glass"]'); }
    get searchButton()  { return browser.element('#sb_form_go'); }
  get resultsList()   { return browser.element('#b_results'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://www.bing.com')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearElement();
    this.searchInput.setValue(item);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForVisible(1000);
    return this.resultsList.isVisible();
  }
}

export default new BingPage();
