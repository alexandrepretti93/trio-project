import home from '../support/pages/home'
import apps from '../support/pages/apps'
import agecalculator from '../support/pages/agecalculator'
import paymentcalculator from '../support/pages/paymentcalculator'
import rentcalculator from '../support/pages/rentcalculator'
import reactaicomponent from '../support/pages/reactaicomponent'


describe('Go to Apps', () => {
    beforeEach(() => {
      home.goToHomePage()
      home.goToApps()
      apps.ValidateAppsPageIsOpen()
    })
    it('Go To Age Calculator', () => {
          apps.goToAgeCalculator()
          agecalculator.ValidateAgeCalculatorPageIsOpen()
    })

    it('Go To Payment Calculator', () => {
      apps.goToPaymentCalculator()
      paymentcalculator.ValidatePaymentCalculatorPageIsOpen()
      
    })

    it('Go To Rent Calculator', () => {
      apps.goToRentCalculator()
      rentcalculator.ValidateRentCalculatorPageIsOpen()
      
    })

    it('Go To React Build Component Generator', () => {
      apps.goToReactBuildComponent()
      reactaicomponent.ValidateReactComponentPageIsOpen()
      
    })
    
    it('Create a Component on Build - DarkTheme', () => {
      apps.goToBuildLink()
      reactaicomponent.ValidateBuildComponentPageIsOpen()
      reactaicomponent.CreateComponent('darktheme')
    })

})