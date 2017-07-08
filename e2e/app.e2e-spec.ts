import { SlavturPage } from './app.po';

describe('slavtur App', () => {
  let page: SlavturPage;

  beforeEach(() => {
    page = new SlavturPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
