import { CodemonkeyshackathonPage } from './app.po';

describe('codemonkeyshackathon App', () => {
  let page: CodemonkeyshackathonPage;

  beforeEach(() => {
    page = new CodemonkeyshackathonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
