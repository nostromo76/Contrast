const { beforeEach } = require("mocha")

describe('Test of Web page Contrast as company portfolio and work', () => {
  beforeEach('Open page', () => {
    cy.visit('../../index.html')
  })

  it('Test opening the page ', function () {


    cy.title().should('exist', 'index.html');
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

  it('Test should redirect home page when click home link', function () {

    cy.get('.nav > :nth-child(1) > a > span').click();
    cy.url().should('include', 'index.html');

  })
  it('Test should redirect Services when click home link "SERVICES"', function () {
    cy.get('.nav > :nth-child(2) > a').click();
    cy.url().should('include', 'services.html');

  })
  it('Test should redirect Company when click home link "COMPANY"', function () {
    cy.get('.nav > :nth-child(3) > a').click();
    cy.url().should('include', 'company.html')

  })

  it('Test should redirect Clients when click home link "Clients"', function () {
    cy.get('.nav > :nth-child(4) > a').click();
    cy.url().should('include', 'clients.html')

  })
  it('Test should redirect Contact when click home link "Contact"', function () {
    cy.get('.nav > :nth-child(5) > a').click();

    cy.url().should('include', 'contact.html')

  })
  it('Test big Banner Hero as welcome ', function () {
    cy.get('.banner > .opacity_overlay').should('be.visible')
    cy.get('.info > :nth-child(1)').should('be.visible').and('have.text', 'A satisfied customer is the best business')
    cy.get('.info > :nth-child(2)').should('be.visible').and('have.text', 'strategy of all')
    cy.get('.info > :nth-child(4)').should('be.visible').and('have.text', 'We believe everyone deserves')
    cy.get('.info > :nth-child(5)').should('be.visible').and('have.text', 'The best service')
    cy.get('.secondary_layer .msg').should('have.text', 'The easiest and quickest way to start your Business');
    cy.get('.secondary_layer .msg span').should('have.text', 'Business');
    cy.get('.secondary_layer .quote').should('have.text', 'Start now, Achieve Later');
    cy.get('.secondary_layer .btn button').eq(0).should('have.text', 'Get Started');
    cy.get('.secondary_layer .btn button').eq(1).should('have.text', 'Learn More');

  })
  it('should display the rotate animation on the secondary layer', function () {
   
    cy.clock(); // start a fake timer
    cy.get('#rotate').should('have.text', 'simple'); 
    cy.tick(1000); 
    cy.get('#rotate').should('have.text', 'simple'); 
    cy.tick(1000);
    cy.get('#rotate').should('have.text', 'simple'); 
  });
  /*it('should display the rotate animation on the secondary layer', function () {
cy.visit('index.html');
cy.get('.secondary_layer').toMatchImageSnapshot({ name: 'awesome' }); // take a screenshot of the element when the text is awesome
cy.wait(2000); // wait for 2 seconds
cy.get('.secondary_layer').toMatchImageSnapshot({ name: 'beautiful' }); // take a screenshot of the element when the text is beautiful
cy.wait(2000); // wait for another 2 seconds
cy.get('.secondary_layer').toMatchImageSnapshot({ name: 'creative' }); // take a screenshot of the element when the text is creative
});*/


it('Test h3 middle headlines',function(){
  cy.get('.services > .container > h3').should('be.visible') 
})

it('Test pictures in feature box and its texts',function(){
  
  cy.get('.feature-box > .img-responsive')
  .should('be.visible')
  .and(($img) => {
  
  $img.each((index, image) => {

  expect(image.naturalHeight).to.be.within(400, 600)
  })
  })
})
it('Test text below pictures',function(){
  cy.get(':nth-child(1) > .feature-body > h4').should('have.text','Business Consultancy')
  cy.get(':nth-child(2) > .feature-body > h4').should('have.text','Chartered Accountancy')
  cy.get(':nth-child(3) > .feature-body > h4').should('have.text','Financial Analysis')


})
it('Test of counter effect',function(){
  cy.reload()
  cy.wait(4000)
  cy.get(':nth-child(1) > .counter-number').should ('exist', '10000')
  cy.get(':nth-child(1) > .counter-text').should('have.text','CLIENTS')
  cy.get(':nth-child(1) > .counter-text').should ('exist', '500')
  cy.get(':nth-child(2) > .counter-text').should('have.text','ACCOUNTANTS')
  cy.get(':nth-child(3) > .counter-number').should ('exist', '7500')
  cy.get(':nth-child(3) > .counter-text').should('have.text','PROJECTS')
  cy.get(':nth-child(4) > .counter-number').should ('exist', '2500')
  cy.get(':nth-child(4) > .counter-text').should('have.text','ANALYSTS')


})
})








