import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let result;

  beforeEach(() => {
    page = new AppPage();
    result = element(by.id('result'));
  });

  it('should add two single digit integers', () => {
    page.navigateTo();

    page.clickThreeButton();
    page.clickAddButton();
    page.clickSixButton();
    page.clickEqualButton();

    expect(result.getText()).toEqual('9');
  });

  it('should subtract two single digit integers', () => {
    page.navigateTo();

    page.clickEightButton();
    page.clickSubtractButton();
    page.clickFourButton();
    page.clickEqualButton();

    expect(result.getText()).toEqual('4');
  });

  it('should multiply two single digit integers', () => {
    page.navigateTo();

    page.clickTwoButton();
    page.clickMultiplyButton();
    page.clickThreeButton();
    page.clickEqualButton();

    expect(result.getText()).toEqual('6');
  });

  it('should divide two single digit integers', () => {
    page.navigateTo();

    page.clickEightButton();
    page.clickDivideButton();
    page.clickFourButton();
    page.clickEqualButton();

    expect(result.getText()).toEqual('2');
  });

  it('should show result up to 6 decimals', () => {
    page.navigateTo();

    page.clickSevenButton();
    page.clickDivideButton();
    page.clickThreeButton();
    page.clickEqualButton();

    expect(result.getText()).toEqual('2.333333');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
