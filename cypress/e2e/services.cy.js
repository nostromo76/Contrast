const { beforeEach } = require("mocha")


describe('Test of service page', () => {
    beforeEach('Open page', () => {
        cy.visit('../../services.html')
    })
    it('Test opening the page ', function () {


        cy.title().should('exist', '../../services.html');
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
        cy.get('.active').should('contain', 'Services')
    })
    it('Test pricing table', function () {

        cy.get('.pricing-table').should('be.visible');

        cy.get('.cost').each($el => {
            cy.wrap($el).should('be.visible');
        });

        cy.get('.cost h3').each($el => {
            const subscriptionName = $el.text().trim();
            cy.wrap($el).should('be.visible');
            expect(subscriptionName).to.match(/^(Personal|Business|Professional)$/);
        });

        cy.get('ul.item-list a')
            .each($el => {
                const buyNowButton = $el.find('button').text().trim();
                cy.wrap($el).should('be.visible');
                expect(buyNowButton).to.equal('Buy Now');
            });

    });
    it('Test sections part', function () {
        cy.get('.featured-list').scrollIntoView();
        cy.get(':nth-child(1) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(2) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(3) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(4) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(5) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(6) > .section > .icon-container > .fa').should('be.visible')
        cy.get(':nth-child(1) > .section > h3').should('be.visible').and('have.text', 'Hendrerit Instructior')
        cy.get(':nth-child(2) > .section > h3').should('be.visible').and('have.text', 'Prompta Principes')
        cy.get(':nth-child(3) > .section > h3').should('be.visible').and('have.text', 'Iusto Soluta Inciderint')
        cy.get(':nth-child(4) > .section > h3').should('be.visible').and('have.text', 'Apeirian Molestiae')
        cy.get(':nth-child(5) > .section > h3').should('be.visible').and('have.text', 'Magna Exerci Putant')
        cy.get(':nth-child(6) > .section > h3').should('be.visible').and('have.text', 'Timeam Sententiae')   

    })

    it('Test footer', function () {
        cy.get('.footer').scrollIntoView()
        cy.get('.container > :nth-child(1) > h3').should('be.visible').and('have.text', 'Contrast')
        cy.get('.container > :nth-child(2) > h3').should('be.visible').and('have.text', 'About Us')
        cy.get('.container > :nth-child(3) > h3').should('be.visible').and('have.text', 'Contact Info')
        cy.get('.contact-list > li > :nth-child(1)').should('be.visible').and('contain', 'WC2N 5DN')
        cy.get('li > :nth-child(2)').should('be.visible').and('contain', '0800 240 0905')
        cy.get('li > :nth-child(3)').should('be.visible').and('contain', 'support@yourdomain.com')
        cy.get('.copyright-part > p').should('be.visible').and('contain', '2023 Contrast')
    })
    it('Test scroll button', function () {
        cy.get('#scrollUp').scrollIntoView()
        cy.get('#scrollUp').invoke('click')
        cy.window().its('scrollY').should('equal', 0)


    })
    it('Test back on Home page',function(){
        cy.get('.breadcrumb > :nth-child(1) > a').should('be.visible').wait(500).click();//mora da saceka ili invoke!!
        cy.url().should('include', 'index.html');

        cy.log('Clicked on Home button successfully');
    })
})
