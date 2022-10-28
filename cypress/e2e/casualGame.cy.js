describe("run a 2 players game", () => {
  it("run a game where yellow wins on a row", () => {
    cy.visit("http://localhost:3000");
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-4 > :nth-child(6)").click();
    cy.get("#col-4 > :nth-child(6)").click();
    cy.get("#col-5 > :nth-child(6)").click();
    cy.get("#col-5 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();

    cy.contains("The Winner is Y").should("exist");
  });
  it("run a game where red wins on a column", () => {
    cy.visit("http://localhost:3000");
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();
    cy.get("#col-1 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();

    cy.contains("The Winner is R").should("exist");
  });

  it("should restart a game when finished", () => {
    cy.visit("http://localhost:3000");
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-3 > :nth-child(6)").click();
    cy.get("#col-4 > :nth-child(6)").click();
    cy.get("#col-4 > :nth-child(6)").click();
    cy.get("#col-5 > :nth-child(6)").click();
    cy.get("#col-5 > :nth-child(6)").click();
    cy.get("#col-2 > :nth-child(6)").click();

    cy.contains("Restart").should("exist");
    cy.get(".p-2").click();
    cy.contains("Red").should("exist");
    cy.contains("Yellow").should("exist");
  });
});
