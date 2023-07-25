const { beforeEach } = require("mocha")


describe('Test of service page', () => {
    beforeEach('Open page', () => {
        cy.visit('../../contact.html')
    })
    it('Test opening the page ', function () {


        cy.title().should('exist', '../../contact.html');
    })
    it('Test top heading and contacts ', function () {
        const PHONE_NUMBER = '+44 0799 6789 1234';
        cy.get('.contact-info').should('contain.text', PHONE_NUMBER);

        cy.get('[class^="icon fa"]').should('be.visible').each(($icon) => {
            // check the href attribute 
            cy.wrap($icon).should('have.attr', 'href', '#');
            // check the text content 
            cy.wrap($icon).should('have.text', '');

        });


    })


    it('should display the navbar brand with the correct text', function () {

        cy.get('a.navbar-brand').should('be.visible')



    });

    const {
        HOME_HREF,
        HOME_TEXT,
        SERVICES_HREF,
        SERVICES_TEXT,
        COMPANY_HREF,
        COMPANY_TEXT,
        CLIENTS_HREF,
        CLIENTS_TEXT,
        CONTACT_HREF,
        CONTACT_TEXT
    } = require('./utils.js');

    it('Test of nav bar links', function () {
        cy.get('.nav.navbar-nav > li:nth-child(1) > a').should('be.visible').and('have.attr', 'href', HOME_HREF).and('have.text', HOME_TEXT);
        cy.get('.nav.navbar-nav > li:nth-child(2) > a').should('be.visible').and('have.attr', 'href', SERVICES_HREF).and('have.text', SERVICES_TEXT);
        cy.get('.nav.navbar-nav > li:nth-child(3) > a').should('be.visible').and('have.attr', 'href', COMPANY_HREF).and('have.text', COMPANY_TEXT);
        cy.get('.nav.navbar-nav > li:nth-child(4) > a').should('be.visible').and('have.attr', 'href', CLIENTS_HREF).and('have.text', CLIENTS_TEXT);
        cy.get('.nav.navbar-nav > li:nth-child(5) > a').should('be.visible').and('have.attr', 'href', CONTACT_HREF).and('have.text', CONTACT_TEXT);
    });

    it('Test Breadcrumb ribbon of active page ', function () {
        cy.get('.active').should('contain', 'Contact')
    })
    it('Test of the map ', function () {
        cy.get('iframe')
            .should('have.attr', 'src')
            .and('include', 'google.com/maps')

    })

    it('Test Contact form', function () {
        cy.get('.contact-form > h3').should('be.visible').and('have.text', 'Contact Form')
        cy.get('#name').type('Pera Peric');
        cy.get('#email').type('pera@demo.com');
        cy.get('#subject').type('Question about your services and prices');
        cy.get('#message').type('Hi, Zivo me interesuje  if you offer any discounts for new customers.');


        cy.get('#submit').click();


    });

    it('Test Contact Info section', function () {
        cy.get('.contact-info > h3').should('be.visible').and('have.text', 'Contact Info');
        cy.contains('Trafalgar Square, Westminister WC2N 5DN').should('be.visible');
        cy.contains('company@domain.com').should('be.visible');
        cy.contains('+44 0799 6789 1234').should('be.visible');
        cy.contains('+44 1234 22 9876').should('be.visible')
    })

})





