describe('Sign In', () => {
  //Arrange
  //Act
  //Assertion
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Rejects blank username', () => {
    cy.get('.pword-input')
      .type('pass1234').should('have.value', 'pass1234')
    cy.get('.submit-button').click()
    cy.contains('Username is Required')
  })

  it('Rejects blank password', () => {
    cy.get('.uname-input')
      .type('hermanmuenster@gmail.com').should('have.value', 'hermanmuenster@gmail.com')
      cy.get('.submit-button').click()
      cy.contains('Password is Required')
  })

  it('Rejects short password', () => {
    cy.get('.uname-input')
      .type('hermanmuenster@gmail.com').should('have.value', 'hermanmuenster@gmail.com')
      cy.get('.pword-input')
      .type('pass12').should('have.value', 'pass12')
      cy.get('.submit-button').click()
      cy.contains('Password is too short')
  })
  // it('should throw an error if username is not in the database', () => {


  // })
})
