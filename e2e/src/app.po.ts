import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickTwoButton() {
    element(by.partialButtonText('2')).click();
  }
  clickThreeButton() {
    element(by.partialButtonText('3')).click();
  }
  clickFourButton() {
    element(by.partialButtonText('4')).click();
  }
  clickSixButton() {
    element(by.partialButtonText('6')).click();
  }
  clickSevenButton() {
    element(by.partialButtonText('7')).click();
  }
  clickEightButton() {
    element(by.partialButtonText('8')).click();
  }

  clickEqualButton() {
    element(by.partialButtonText('=')).click();
  }
  clickAddButton() {
    element(by.partialButtonText('+')).click();
  }
  clickSubtractButton() {
    element(by.partialButtonText('-')).click();
  }
  clickMultiplyButton() {
    element(by.partialButtonText('*')).click();
  }
  clickDivideButton() {
    element(by.partialButtonText('/')).click();
  }
}
