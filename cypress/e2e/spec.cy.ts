describe('Test E2E - Marvel App', () => {

  it('Visits the initial project page', () => {
    cy.visit('/');
  })

  it('Has the correct title', () => {
    cy.visit('/');
    cy.title().should('equal', 'Marvel');
  });

  it('Has the search input empty', () => {
    cy.visit('/');
    cy.get('[id="search"]').should('have.text', '');
  });

  it('Has returned 9 records after a form submit', () => {
    cy.visit('/');
    cy.get('[id="search"]').type('hulk');
    cy.get('[id="search"]').first().focus();
    cy.get('[id="search"]').type('{enter}');
    cy.wait(1000)
    cy.get('[class="search-tag"]').should('have.text', ' 9 Resultados para hulk');
  });

  it('Clear the searched term by clicking on the tag close button', () => {
    cy.visit('/');
    cy.get('[id="search"]').type('spider');
    cy.get('[id="search"]').first().focus();
    cy.get('[id="search"]').type('{enter}');
    cy.get('[id="search-tag-close"]').click();
    cy.get('[id="search"]').should('have.text', '');
  });

  it('Has the avatar image changed after favorite a Marvel character', () => {
    cy.visit('/');
    cy.get('[class="fav-icon"]').first().click();
    cy.get('[class="avatar-img"]').first().should('have.attr', 'src').should('include','http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg');
  });

  it('Has the actual page changed to "2" after click next button', () => {
    cy.visit('/');
    cy.wait(2000)
    cy.get('#btn-next-page').first().click();
    cy.get('.page-item.active a').first().should('have.text', ' 2 ');
  });

  it('Has changed page after a search button click, and returned 5 records', () => {
    cy.visit('/');
    cy.get('[id="search"]').type('wolverine');
    cy.get('.btn-search').first().click();
    cy.wait(1000)
    cy.get('p.banner-title').first().should('have.text', ' Resultados ');
    cy.get('[class="search-tag"]').should('have.text', ' 5 Resultados para wolverine');
  });

  it('Has returned to the home page after back button click', () => {
    cy.visit('/');
    cy.get('[id="search"]').type('wolverine');
    cy.get('.btn-search').first().click();
    cy.wait(1000)
    cy.get('p.banner-title').first().should('have.text', ' Resultados ');
    cy.get('[class="search-tag"]').should('have.text', ' 5 Resultados para wolverine');
    cy.get('.btn-back').first().click();
    cy.get('p.banner-title').first().should('have.text', ' Heróis Marvel');
  });
})
