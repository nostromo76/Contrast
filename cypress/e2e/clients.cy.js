const { beforeEach } = require("mocha")


describe('Test of service page', () => {
    beforeEach('Open page', () => {
        cy.visit('../../clients.html')
    })
    it('Test opening the page ', function () {


        cy.title().should('exist', '../../clients.html');
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
        cy.get('.active').should('contain', 'Clients')
    })

    it('Test pictuires', function () {


        cy.get(':nth-child(1) > .image > .img-responsive').should('be.visible')
        cy.get(':nth-child(1) > .image > .img-responsive').should('have.attr', 'src', 'images/client1.jpeg');
        cy.get(':nth-child(2) > .image > .img-responsive').should('be.visible')
        cy.get(':nth-child(2) > .image > .img-responsive').should('have.attr', 'src', 'images/client2.jpg');

    })
    it('Test of clients text', function () {
        cy.get(':nth-child(1) > .text > h3').should('be.visible').and('have.text', 'Client 1:')
        cy.get(':nth-child(2) > .text > h3').should('be.visible').and('have.text', 'Client 2:')

        cy.get(':nth-child(1) > .text > :nth-child(2)').should('be.visible').and('contain', 'Laudem sensibus')
        cy.get(':nth-child(2) > .text > :nth-child(2)').should('be.visible').and('contain', 'delicatissimi')
        cy.get(':nth-child(1) > .text > :nth-child(3)').should('be.visible').and('contain', 'Duo habeo')
        cy.get(':nth-child(2) > .text > :nth-child(3)').should('be.visible').and('contain', 'Eos')



    })

    it('Test of Quotations and its badges ', function () {
        cy.get('.quotes .container').scrollIntoView()
        cy.get('.quotes .container').should('be.visible')
        cy.get('.quotes .container .col-md-4').should('have.length', 3)
        cy.get('.quotes .container blockquote').each((quote) => {
            cy.wrap(quote).within(() => {
              cy.get('.quote-text').should('be.visible')
              cy.get('.blog-post-bottom.pull-left').should('be.visible')
              cy.get('.badge.quote-badge').should('be.visible')
              
            })
          })
        })
        it('Test display quotation marks for each quote', () => {
            cy.get('.quotes .container blockquote').each((quote) => {
              cy.wrap(quote).within(() => {
                cy.get('.quotation-mark').should('be.visible')
              })
            })
          })
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
