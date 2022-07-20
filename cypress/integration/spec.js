describe('cafe', () => {

    beforeEach(() => {
      cy.visit("http://localhost:3000")
  
    });

    it('should load the app', () => {
        cy.get("div")
        .should("have.class", "App")
        .should("be.visible")
    });

    it('should have a title', () => {
        cy.get("h1")
        .should("have.class", "app-title")
    });

    it('should have a reservation form', () => {
        cy.get("form")
        .should("have.class", "form")
    });

    it('should have a reservation form', () => {
        cy.get("form")
        .should("have.class", "form")
    });

    it('should display current reservations', () => {
        cy.get("section")
        .should("have.class", "resy-container")
    });

    it('should have its form reflect user input', () => {
        cy.get("input#name")
            .click()
            .type("Travis")
            .should("have.value", "Travis")
    });

    it('should have its form reflect user input', () => {
        cy.get("input#date")
            .click()
            .type("2022-07-25")
            .should("have.value", "2022-07-25")
    });

    it('should have its form reflect user input', () => {
        cy.get("input#time")
            .click()
            .type("10:00")
            .should("have.value", "10:00")
    });

    it('should have its form reflect user input', () => {
        cy.get("input#number")
            .click()
            .type("4")
            .should("have.value", "04")
    });

    it('should allow a user to make a new reservations', () => {
        cy.get("input#name")
            .click()
            .type("Travis")
            .get("input#date")
            .click()
            .type("2022-07-25")
            .get("input#time")
            .click()
            .type("10:00")
            .get("input#number")
            .click()
            .type("4")
            .get("button#submit-reservation")
            .click()
    });
});
