
class Login {

    elements ={
        welcomeTitle: () => cy.get('h1').contains('Welcome'),
        usernameField: () => cy.get('[id=username]'),
        passwordField: () => cy.get('[id=password]'),
        submitBtn: () => cy.get('[type=submit]'),
        welcomeTitle: () => cy.get('a').contains('Sign up'),
        createNewMicroAppBtn: () => cy.get('span').contains('Create new microapp')
    }

    fillLoginData(){
        cy.origin('microappai.us.auth0.com', () => {
            
            cy.wait(1000);
            cy.get('h1').contains('Welcome').should('be.visible');
            cy.get('[id=username]').type('test@test.com');
            //cy.get('[id=email]').type(emailuuid);
            cy.get('[id=password]').type('P@ssword1');
            cy.get('[type=submit]').contains('Continue').click({ force: true });
          })
          
            this.elements.createNewMicroAppBtn().should('be.visible');
    }

    logoutUser(){
        this.elements.userPopMenu().click();
        this.elements.logOutBtn().click();
    }
}

export default new Login();