import { PhotosAppPage } from './app.po';

describe('photos-app App', function() {
  let page: PhotosAppPage;

  beforeEach(() => {
    page = new PhotosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
