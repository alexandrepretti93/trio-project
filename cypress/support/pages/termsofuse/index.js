
class TermsOfUse {

    elements ={
        termsOfUseTitle: () => cy.get('h1').contains('Terms of Use')
    }


    ValidateTermsOfUsePageIsOpen(){
        cy.origin('www.trio.dev', () => {
            cy.wait(1000);
            cy.get('h1').contains('Terms of Use').should('be.visible');
          })
          
    }
}

export default new TermsOfUse();