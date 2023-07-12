import home from '../support/pages/home'
import signup from '../support/pages/signup'

describe('Sign Up', () => {
  beforeEach(() => {
    home.goToHomePage()
  })
  it('Fill Sign Up using Main Button then Logout', () => {
        //home.goToHomePage();
        home.clickSignUpMainButton();
        signup.fillSignUpData();
        signup.logoutUser();
  })

  
  it('Fill Sign Up using Floating Button then Logout', () => {
      //home.goToHomePage();
        home.clickSignUpFloatButton();
        signup.fillSignUpData();
        signup.logoutUser();
})

})