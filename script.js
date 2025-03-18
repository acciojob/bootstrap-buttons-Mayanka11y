describe('Bootstrap Buttons Test', () => {
    beforeEach(() => {
        // Visit the page containing the buttons
        cy.visit('path/to/your/html/file.html');
    });

    it('should verify Button 1 (Primary)', () => {
        cy.get('#button-1')
            .should('have.class', 'btn btn-primary')
            .and('be.visible')
            .and('contain', 'Button-1');
    });

    it('should verify Button 2 (Outline Secondary)', () => {
        cy.get('#button-2')
            .should('have.class', 'btn btn-outline-secondary')
            .and('be.visible')
            .and('contain', 'Button-2');
    });

    it('should verify Button 3 (Success Large)', () => {
        cy.get('#button-3')
            .should('have.class', 'btn btn-success btn-lg')
            .and('be.visible')
            .and('contain', 'Button-3');
    });

    it('should verify Button 4 (Danger Small)', () => {
        cy.get('#button-4')
            .should('have.class', 'btn btn-danger btn-sm')
            .and('be.visible')
            .and('contain', 'Button-4');
    });

    it('should verify Button 5 (Warning Large Full Width)', () => {
        cy.get('#button-5')
            .should('have.class', 'btn btn-warning btn-lg w-100')
            .and('be.visible')
            .and('contain', 'Button-5');
    });

    it('should verify Button 6 (Disabled Info)', () => {
        cy.get('#button-6')
            .should('have.class', 'btn btn-info')
            .and('be.disabled') // Check if the button is disabled
            .and('contain', 'Button-6');
    });

    it('should verify Button 7 (Light)', () => {
        cy.get('#button-7')
            .should('have.class', 'btn btn-light')
            .and('be.visible')
            .and('contain', 'Button-7');
    });

    it('should verify Button 8 (Link)', () => {
        cy.get('#button-8')
            .should('have.class', 'btn btn-link')
            .and('be.visible')
            .and('contain', 'Button-8');
    });
});