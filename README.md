# plotly assignment

STEPS TO RUN THE TESTS -- using CLI Commands
1. npm install

STEPS TO RUN THE TESTS -- using Cypress Window


**Framework Used:**
1. Cypress Framework
2. Directory Structure:
   a. e2e - contains the test cases
   b. fixtures - contain the data, which can be used for Data Driven test cases.
   c. reports - contains mochawesome reports, autgenerated after each execution.
3. Reports:
   a. Integrated "Mochawesome" reports with the framework, which will produce an HTML version of the results of the execution.
   


**Automated Test Case Details: **
1. Test Case 1: Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.
     * 1. Scrolling the page to "Loved by OSS, trusted by Enterprise" Text
     * 2. Validating the "Weekly Downloads" text is visible
     * 3. Validate the Weekly Downloads Number to be equal to 5.0M downloads
 
2. Test Case 2: User is able to click on Company and then on “About Cypress”
     * Test is click the Company link and then Click on About Cypress link when the drop down opens.
     * The test also validates the Abour us Page is opened when the link is clicked.
  
3. Test Case 3: User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”
     * Open the Install button on the homepage which shows the Install MODAL
     * Click on "npm install cypress" button
     * This test validates the CLIPBOARD, using the "window" element of DOM, to identify the value copied
  
4. Test Case 4: User is able to click on “Product” and then “visual review”
     * Validate the User is able to Click on the Product Link.
     * There are multiple "Visual Review" links, so need to create a unique identifier for the link in the drop down.
     * This Test Helps to identify the link and click on Visual Review links.
     * Validates that after the click "Visual Review" page is opened.
  
5. Test Case 5: BONUS TEST CASE: User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”
     * Scrolls the "Test Analytics" sections in view
     * Validates the GREEN Color Border is shown on the Test Analytics.
     * ALSO validates the GREEN Color is not shown on SMART ORCHESTRATION, to ensure that the circle is ONLY shown on the section in the VIEW
    

**Issue Felt with the Cypress Application - **
* When the Cypress tool is trying to click on the Header elements like Product, Company - they are mispositioning, giving out false failures.
**How I handled the issue**
* FIRST -- Added Retries - 2. which retry the test case.
* Each test is coded as independent to each other. So second try passes it.
* SECOND -- Added "center" to the click action of cypress. This sub-action makes sure it is clicking in the center of the element, which makes it easy to click.



