import home from '../support/pages/home'
import login from '../support/pages/login'

describe('Login', () => {
  beforeEach(() => {
    home.goToHomePage()
  })
  it('Login with right credentials', () => {
        //home.goToHomePage();
        home.clickLoginButton()
        login.fillLoginData()
  })


})