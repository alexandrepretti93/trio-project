
class Home {
    
    elements ={
        floatSignUpBtn: () => cy.get('a').contains('Sign up'),
        mainSignUpBtn: () => cy.get('span').contains('Sign Up'),
        appsBtn: () => cy.get('div').contains('Apps'),
        aboutBtn: () => cy.get('div').contains('About')
    }

    goToHomePage(){
        cy.visit('/')
    }

    clickSignUpFloatButton(){
        
        this.elements.floatSignUpBtn().click();
    }

    clickSignUpMainButton(){
        
        this.elements.mainSignUpBtn().click();
    }

    goToApps(){
        this.elements.appsBtn().click();
    }

    goToAbout(){
        this.elements.aboutBtn().click();
    }
}

export default new Home();