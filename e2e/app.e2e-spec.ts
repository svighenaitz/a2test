import { GiulianoappPage } from './app.po';

describe('giulianoapp App', function() {
  let page: GiulianoappPage;

  beforeEach(() => {
    page = new GiulianoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
