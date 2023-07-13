import home from '../support/pages/home'
import apps from '../support/pages/apps'
import agecalculator from '../support/pages/agecalculator'
import paymentcalculator from '../support/pages/paymentcalculator'
import rentcalculator from '../support/pages/rentcalculator'

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

})