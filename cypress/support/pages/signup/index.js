
class SignUp {

    elements ={
        welcomeTitle: () => cy.get('h1').contains('Welcome'),
        usernameField: () => cy.get('[id=username]'),
        emailField: () => cy.get('[id=email]'),
        passwordField: () => cy.get('[id=password]'),
        submitBtn: () => cy.get('[type=submit]'),
        createFirstMicroAppBtn: () => cy.get('span').contains('Create your first microapp'),
        userPopMenu: () => cy.get('[aria-haspopup=menu]'),
        logOutBtn: () => cy.get('div').contains('Logout')
    }

    fillSignUpData(){
        cy.origin('microappai.us.auth0.com', () => {
            const uuid = () => Cypress._.random(0, 1e8)
            const id = uuid()
            const usernameuuid = `test${id}`
            const emailuuid = `test${id}@mail.com`
            cy.wait(1000);
            cy.get('h1').contains('Welcome').should('be.visible');
            cy.get('[id=username]').type(usernameuuid);
            cy.get('[id=email]').type(emailuuid);
            cy.get('[id=password]').type('P@ssword1');
            cy.get('[type=submit]').click();
          })
          
            this.elements.createFirstMicroAppBtn().should('be.visible');
    }

    logoutUser(){
        this.elements.userPopMenu().click();
        this.elements.logOutBtn().click();
    }
}

export default new SignUp();