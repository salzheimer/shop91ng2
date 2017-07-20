import { Shop91ng2Page } from './app.po';

describe('shop91ng2 App', function() {
  let page: Shop91ng2Page;

  beforeEach(() => {
    page = new Shop91ng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
