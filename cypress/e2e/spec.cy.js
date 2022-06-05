describe('spec.cy.js', () => {
  //Arrange
  //Act
  //Assertion
  it('should visit our sign in page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Sign In').click()
  })

  it('should allow input', () => {
    cy.get('.uname-input')
      .type('hermanmuenster@gmail.com').should('have.value', 'hermanmuenster@gmail.com')
    cy.get('.pword-input')
      .type('pass1234').should('have.value', 'pass1234')
  })

  it('should throw an error if username is not in the database', () => {
    cy.get('.submit-button').click()
    cy.contains('Invalid Username')

  })
})
