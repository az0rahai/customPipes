import { CustomPipesPage } from './app.po';

describe('custom-pipes App', function() {
  let page: CustomPipesPage;

  beforeEach(() => {
    page = new CustomPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
