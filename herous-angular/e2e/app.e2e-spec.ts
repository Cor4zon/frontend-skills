import { HerousAngularPage } from './app.po';

describe('herous-angular App', function() {
  let page: HerousAngularPage;

  beforeEach(() => {
    page = new HerousAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
