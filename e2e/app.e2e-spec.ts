import { CidermichWebPage } from './app.po';

describe('cidermich-web App', function() {
  let page: CidermichWebPage;

  beforeEach(() => {
    page = new CidermichWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
