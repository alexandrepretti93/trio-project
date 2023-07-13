

class RentCalculator {
    elements ={
        rentCalculatorTitle: () =>  cy.get('a[href="/apps/rent-calculator"]'),
        rentCalculatorHyperLink: () => cy.get('h1').contains('Rent Calculator'),
        preTaxField: () => cy.get('label').contains('Your pre-tax income').siblings('div'),
        perYearMonthField: () => cy.get('label').contains('Your pre-tax income').parent('div').siblings('div'),
        monthlyDebtPaybackField: () => cy.get('label').contains('Your monthly debt payback').siblings('div')
    }

ValidateRentCalculatorPageIsOpen(){
     this.elements.rentCalculatorHyperLink().should('be.visible')
     this.elements.rentCalculatorTitle().should('be.visible')
     this.elements.preTaxField().should('be.visible')
     this.elements.perYearMonthField().should('be.visible')
     this.elements.monthlyDebtPaybackField().should('be.visible')
}


}

export default new RentCalculator();