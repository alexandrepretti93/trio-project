import home from '../support/pages/home'
import apps from '../support/pages/apps'

describe('Go to Apps', () => {
    beforeEach(() => {
      home.goToHomePage()
      home.goToApps()
      apps.ValidateAppsPageIsOpen()
    })
    it('Go To Age Calculator', () => {
          apps.goToAgeCalculator();
          
    })

})