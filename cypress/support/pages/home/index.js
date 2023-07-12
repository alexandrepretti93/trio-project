
class Home {
    
    elements ={
        floatSignUpBtn: () => cy.get('a').contains('Sign up'),
        mainSignUpBtn: () => cy.get('span').contains('Sign Up'),
        appsBtn: () => cy.get('div').contains('Apps'),
        aboutBtn: () => cy.get('div').contains('About'),
        loginBtn: () => cy.get('a').contains('Login'),
        termsOfUseBtn: () => cy.get('div').contains('Terms of Use'),
        privacyPolicyBtn: () => cy.get('div').contains('Privacy Policy'),
        twitterBtn: () => cy.get('div').contains('Twitter')
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

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

    clickOnTermsOfUseButton(){
        this.elements.termsOfUseBtn().click();
    }

    clickOnPrivacyPolicyButton(){
        this.elements.privacyPolicyBtn().click();
    }
}

export default new Home();