describe("tests for favourite page", () => {
  const markFirstProductAsFavourite = () => {
    cy.visit("/");
    cy.clearLocalStorage();

    cy.get('#products > li button[aria-pressed="false"]').first().click();

    cy.get("#products > li")
      .first()
      .get("h3")
      .should("contain", "Logitech M330 silent");
  };

  it("should display information about that there is no favourite items selected", () => {
    cy.visit("/ulubione");
    cy.clearLocalStorage();

    cy.get("p")
      .contains("Nie masz ulubionych produktów. Przejdź do listy produktów")
      .should("be.visible");
  });

  it("after mark items as favourite on home page it should display that items on '/ulubione' page", () => {
    markFirstProductAsFavourite();

    cy.visit("/ulubione");

    cy.get("#products > li").should("have.length", "1");
  });

  it("if there is some products marked as favourite is should display appropriate title on page", () => {
    markFirstProductAsFavourite();

    cy.visit("/ulubione");

    cy.get("h1").should("be.visible").and("contain", "Ulubione przedmioty");
  });
});

export {};
