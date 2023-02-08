describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearAllLocalStorage();
  });

  it("should contain appropriate title", () => {
    cy.contains("Wszystkie przedmioty");
  });

  it("available items are able to add to cart", () => {
    cy.get('button:contains("Dodaj do koszyka")').each(($button) => {
      cy.wrap($button).click();
      cy.wrap($button).should("contain", "Zobacz w koszyku");
    });
  });

  it("after add product to the cart, qty of all items in cart should appear", () => {
    cy.get('button[aria-label="Otwórz koszyk"').should("contain", "0");
    cy.get('button:contains("Dodaj do koszyka")').first().click();
    cy.get('button:contains("Dodaj do koszyka")')
      .should("have.length.greaterThan", 1)
      .last()
      .click();
    cy.get('button[aria-label="Otwórz koszyk"').should("contain", "2");
  });

  it("after adding item to cart it should apear in cart list", () => {
    cy.get("button").contains("Dodaj do koszyka").click();
    cy.get('button[aria-label="Otwórz koszyk"').click();
    cy.get("#cart")
      .should("be.visible")
      .should("contain", "Zawartość koszyka")
      .should("contain", "Złóż zamówienie");
  });

  it("if there is no products added to the cart, cart should be empty", () => {
    cy.get('button[aria-label="Otwórz koszyk"').click();
    cy.get("#cart")
      .should("be.visible")
      .should("contain", "Twoj koszyk jest pusty")
      .should("contain", "Kontynuj zakupy");
  });

  it("if product is not available, there should not be able to add it to the cart", () => {
    cy.get('button:contains("Brak towaru")').should("be.disabled");
  });

  it("if select specific category page should display only products from given category", () => {
    cy.get('select[name="kategoria"]').should("have.value", "");
    ["mysz", "klawiatura"].forEach((category) => {
      cy.get('select[name="kategoria"]').select(category);
      cy.get("#products > li").each(($item) => {
        cy.wrap($item).get("p").should("contain", category);
      });
    });
  });

  it("after add product to favourites it should be marked as favourite", () => {
    cy.get("#products > li").each(($item) => {
      cy.wrap($item)
        .find('button[aria-pressed="false"]')
        .should("contain", "oznacz jako ulubiony")
        .click()
        .should("contain", "odznacz jako ulubiony");
    });
  });
});

export {};
