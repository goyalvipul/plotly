/// <reference types="cypress" />


describe('Plotly Automation Assignment', () => {

context('Validating the Text on Homepage', () => {

    beforeEach('Open URL', ()=>{
        cy.visit('/');
    })

    /**
     * 1. Scrolling the page to "Loved by OSS, trusted by Enterprise" Text
     * 2. Validating the "Weekly Downloads" text is visible
     * 3. Validate the Weekly Downloads Number to be equal to 5.0M downloads
     */
    it('verify that user is able to scroll down to "<Loved by OSS>" text and validate the "<Weekly Downloads>"', () => {
        cy.get("[uid='ZkHbQE']+div").contains("Loved by").scrollIntoView();
        cy.get("div[class='grow']>div[class*='normal']").contains("Weekly downloads")
        .siblings("div[class*='primary']")
        .should('have.text', "5.0M+")
    })

    /**
     * Test is click the Company link and then Click on About Cypress link when the drop down opens.
     * The test also validates the Abour us Page is opened when the link is clicked.
     */
    it('verify user is able to click "Company" link and click on "About Us"', () => {
        // using "center" while clicking, as I noticed the Header in the website moves around while Cypress tries to click it, which creates a MISS and gives out a false failure. Center ensures that it is clicking the element core position.
        cy.get("button#dropdownCompany").click("center")
        cy.contains("About Cypress").click()
        cy.get("main.grow h1").should("contain.text", "About us")
    });

    /**
     * Open the Install button on the homepage which shows the Install MODAL
     * Click on "npm install cypress" button
     * This test validates the CLIPBOARD, using the "window" element of DOM, to identify the value copied
     */
    it('verify the text copied to the clipboard when NPM INSTALL command button is clicked', () => {
        cy.get("[data-cy='header-install']").click()
        cy.contains("npm install cypress").click()
        cy.visit('/')
        cy.validateValueCopiedToClipboard("npm install cypress --save-dev")
    });

    /**
     * Validate the User is able to Click on the Product Link.
     * There are multiple "Visual Review" links, so need to create a unique identifier for the link in the drop down.
     * This Test Helps to identify the link and click on Visual Review links.
     * Validates that after the click "Visual Review" page is opened.
     */
    it('verify the user is able to click on Product and Visual Reviews', () => {
        cy.get("button#dropdownProduct").click("center")
        cy.get("a[href*='cloud#visual_reviews'] span").contains("Visual Reviews").click()
        cy.get("#visual_reviews").should('be.visible');
    });

})

context('Bonus Test Case', ()=>{

    beforeEach('Open Cypress Homepage', ()=>{
        cy.visit('/')
    })

    /**
     * Scrolls the "Test Analytics" sections in view
     * Validates the GREEN Color Border is shown on the Test Analytics.
     * ALSO validates the GREEN Color is not shown on SMART ORCHESTRATION, to ensure that the circle is ONLY shown on the section in the VIEW
     */
    it('verify the user is able to scroll down "Test Analytics" section, which highlights the link in the top with GREEN CIRCLE around', () => {
        cy.get("button#dropdownProduct").click("center")
        cy.get("a[href*='cloud#smart_orchestration'] span").contains("Smart Orchestration").click() 
        cy.get("section#test_analytics").scrollIntoView({top: 100, left: 0})
        cy.get("a[href='#test_analytics']").should('have.css', 'border-color', 'rgb(163, 231, 203)')
        cy.get("a[href='#smart_orchestration']").should('not.have.css', 'border-color', 'rgb(163, 231, 203)')
    });

})

})
