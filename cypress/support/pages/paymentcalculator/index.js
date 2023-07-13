

class PaymentCalculator {
    elements ={
        paymentCalculatorTitle: () => cy.get('h1').contains('Payment Calculator'),
        paymentCalculatorHyperlink: () => cy.get('a[href="/apps/payment-calculator"]'),
        loanAmountField: () => cy.get('label').contains('Loan Amount').siblings('div'),
        loanTermField: () => cy.get('label').contains('Loan Term').siblings('div'),
        interestRate: () => cy.get('label').contains('Interest Rate').siblings('div')
    }

ValidatePaymentCalculatorPageIsOpen(){
     this.elements.paymentCalculatorHyperlink().should('be.visible')
     this.elements.paymentCalculatorTitle().should('be.visible')
     this.elements.loanAmountField().should('be.visible')
     this.elements.loanTermField().should('be.visible')
     this.elements.interestRate().should('be.visible')
}


}

export default new PaymentCalculator();