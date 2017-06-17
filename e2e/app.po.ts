import { browser, by, element } from 'protractor';

export class CodemonkeyshackathonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
