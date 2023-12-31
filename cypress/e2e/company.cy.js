const { beforeEach } = require("mocha")


describe('Test of service page', () => {
    beforeEach('Open page', () => {
        cy.visit('../../company.html')
    })
    it('Test opening the page ', function () {


        cy.title().should('exist', '../../company.html');
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
        cy.get('.active').should('contain', 'Company')
    })

    it('Test Image reprentative', function () {
        cy.get('.image > .img-responsive').should('be.visible')
        cy.get('.image > .img-responsive').should('have.attr', 'src', 'images/about-us.jpg');
    })
    it('Test heading', function () {
        cy.get('.text > h3').should('be.visible').and('have.text', 'About Us')
        cy.get('.text > :nth-child(2)').should('be.visible').and('contain', 'Lorem ipsum')
        cy.get('.text > :nth-child(3)').should('be.visible').and('contain', 'Sit vide')

    })
    it('Test description on page ', function () {
        cy.get('.description').scrollIntoView()
        cy.get('.description').should('be.visible').and('have.text', 'OUR TEAM')

    })
    it('Test of display images corectly, and hoover effect on social', function () {
        cy.get('.profile img').each(($el) => {
            cy.wrap($el).should('have.attr', 'src').and('include', 'images/');

        });

        it('Displays icons on hover', function () {


            cy.get('.img-box')
            cy.get('.img-box').each(($el) => {
                cy.wrap($el).trigger('mouseover');
                cy.wrap($el).find('ul').should('be.visible');
                cy.wrap($el).find('a:nth-child(1)').click();
                cy.url().should('contain', 'facebook.com');
                cy.wrap($el).find('a:nth-child(2)').click();
                cy.url().should('contain', 'twitter.com');
                cy.wrap($el).find('a:nth-child(3)').click();
                cy.url().should('contain', 'linkedin.com.com');


            });
            it('Displays correct names', function () {
                const names = ['John Doe', 'Chris Doe', 'Jack Doe', 'Nancy Doe', 'James John', 'Daniel John'];

                cy.get('.profile h1').each(($el, index) => {
                    cy.wrap($el).should('have.text', names[index]);
                });
            });
        });

    })
    it('Displays correct names', function () {
        const names = ['John Doe', 'Chris Doe', 'Jack Doe', 'Nancy Doe', 'James John', 'Daniel John'];

        cy.get('.profile h1').each(($el, index) => {
            cy.wrap($el).should('have.text', names[index]);
        });
    });
    it('Test footer', function () {
        cy.get('.footer').scrollIntoView()
        cy.get('.container > :nth-child(1) > h3').should('be.visible').and('have.text', 'Contrast')
        cy.get('.container > :nth-child(2) > h3').should('be.visible').and('have.text', 'About Us')
        cy.get('.container > :nth-child(3) > h3').should('be.visible').and('have.text', 'Contact Info')
        cy.get('.contact-list > li > :nth-child(1)').should('be.visible').and('contain','WC2N 5DN')
        cy.get('li > :nth-child(2)').should('be.visible').and('contain','0800 240 0905')
        cy.get('li > :nth-child(3)').should('be.visible').and('contain','support@yourdomain.com')
        cy.get('.copyright-part > p').should('be.visible').and('contain','2023 Contrast')
      })
      it('Test scroll button',function(){
        cy.get('#scrollUp').scrollIntoView()
        cy.get('#scrollUp').invoke('click')
        cy.window().its('scrollY').should('equal', 0)
    
    
      })
})