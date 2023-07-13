import home from '../support/pages/home'
import login from '../support/pages/login'
import about from '../support/pages/about'
import apps from '../support/pages/apps'
import termsofuse from '../support/pages/termsofuse'
import agecalculator from '../support/pages/agecalculator'

describe('Home buttons', () => {
  beforeEach(() => {
      home.goToHomePage()
      /*cy.visit('/', {
      onBeforeLoad (win) {
        cy.stub(win, 'matchMedia')
        .withArgs('(prefers-color-scheme: dark)')
        .returns({
          matches: true,
        })
      },*/
    })
    
  
  it('Go to Apps', () => {
        home.goToApps()
        apps.ValidateAppsPageIsOpen()
  })

  it('Go to About', () => {
    home.goToAbout()
    about.ValidateAboutPageIsOpen()
})

  it('Go to Terms of Use', () => {
    home.clickOnTermsOfUseButton()
    termsofuse.ValidateTermsOfUsePageIsOpen()
  })

  it('Go to Age Calculator', () => {
    home.clickOnAgeCalculatorApp()
    agecalculator.ValidateAgeCalculatorPageIsOpen()
  })

})

