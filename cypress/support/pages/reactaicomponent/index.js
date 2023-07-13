

class ReactAIComponent {
    elements ={
        buildComponentTitle: () => cy.get('h1').contains('AI-Powered Microapp Generator'),
        buildTextInput: () => cy.get('input[placeholder*="tip calculator"]').eq(1),
        makeMagicBtn: () => cy.get('[alt="make magic"]').eq(1),
        microAppGeneratedEditor: () => cy.get('[aria-label="Code Editor for App.js"]'),
        reactCreateAndPreviewText: () => cy.get('h2').contains('Create and preview ')
        //.contains('make magic')
    }

    ValidateBuildComponentPageIsOpen(){
     this.elements.buildComponentTitle().should('be.visible')
     this.elements.buildTextInput().should('be.visible')
     this.elements.makeMagicBtn().should('be.visible')
    }

    ValidateBuildComponentPageIsOpen(){
        this.elements.buildComponentTitle().should('be.visible')
        this.elements.buildTextInput().should('be.visible')
        this.elements.makeMagicBtn().should('be.visible')
       }

       ValidateReactComponentPageIsOpen(){
        this.elements.reactCreateAndPreviewText().should('be.visible')
        this.elements.buildTextInput().should('be.visible')
        this.elements.makeMagicBtn().should('be.visible')
       }

    CreateComponent(text){
        this.elements.buildTextInput().type(text)
        this.elements.makeMagicBtn().click()
        this.elements.microAppGeneratedEditor().should('be.visible')
    }


}

export default new ReactAIComponent();