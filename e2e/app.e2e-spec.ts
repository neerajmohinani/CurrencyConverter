import { CurrencyConverterPage } from './app.po';

describe('currency-converter App', () => {
  let page: CurrencyConverterPage;

  beforeEach(() => {
    page = new CurrencyConverterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
