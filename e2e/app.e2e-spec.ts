import { IudocusFrontPage } from './app.po';

describe('iudocus-front App', () => {
  let page: IudocusFrontPage;

  beforeEach(() => {
    page = new IudocusFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
