describe("first test in cypress", () => {
  it("pass first test", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Shop");
  });
});

export {};
