

class Apps {
        elements ={
            microAppsTitle: () => cy.get('h1').contains('Featured Microapps'),
            ageCalculator: () => cy.get('div').contains('Age Calculator'),
            paymentCalculator: () => cy.get('div').contains('Payment Calculator'),
            rentCalculator: () => cy.get('div').contains('Rent Calculator'),
            mortgageCalculator: () => cy.get('div').contains('Mortgage calculator'),
            reactAIGenerator: () => cy.get('div').contains('React + Tailwind CSS AI Component Generator'),
            lineBreakerTool: () => cy.get('div').contains('Line Break Removal Tool'),
            tipCalculator: () => cy.get('div').contains('Tip calculator'),
        }
    
    ValidateAppsPageIsOpen(){
         this.elements.microAppsTitle().should('be.visible');
         this.elements.ageCalculator().should('be.visible');
         this.elements.paymentCalculator().should('be.visible');
         this.elements.rentCalculator().should('be.visible');
         this.elements.mortgageCalculator().should('be.visible');
         this.elements.reactAIGenerator().should('be.visible');
         this.elements.lineBreakerTool().should('be.visible');
         this.elements.tipCalculator().should('be.visible');
    }

    goToAgeCalculator(){
        this.elements.ageCalculator().click();
    }
}

export default new Apps();