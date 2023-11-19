describe('Video', () => {
  it('passes', () => {
    // Test Video
    cy.visit('/')
    cy.get('video').should('exist')
    cy.get('video').should('have.prop', 'paused', false);

    cy.wait(5000)

    // Test pause video
    cy.get('[data-testid="video-button"]').should('exist')
    cy.get('[data-testid="video-button"]').click()
    cy.get('video').should('have.prop', 'paused', true);

    // Visit Hospital page
    cy.get('[data-testid="hospital-button"]').should('exist')
    cy.get('[data-testid="hospital-button"]').click()
    
    // Wait for Hospital page to fetch data
    cy.wait(10000)
    cy.get('img').should('have.length.at.least', 3)
  })
})