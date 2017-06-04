import { MyFirstAngularAppPage } from './app.po';

describe('my-first-angular-app App', () => {
  let page: MyFirstAngularAppPage;

  beforeEach(() => {
    page = new MyFirstAngularAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
