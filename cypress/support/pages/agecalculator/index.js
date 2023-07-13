

class AgeCalculator {
    elements ={
        ageCalculatorTitle: () => cy.get('h1').contains('Age Calculator'),
        birthDateField: () => cy.get('[placeholder=Birthdate]'),
        calculateBtn: () => cy.get('span').contains('Calculate')
    }

ValidateAgeCalculatorPageIsOpen(){
     this.elements.ageCalculatorTitle().should('be.visible');
     this.elements.birthDateField().should('be.visible');
     this.elements.calculateBtn().should('be.visible');
}


}

export default new AgeCalculator();