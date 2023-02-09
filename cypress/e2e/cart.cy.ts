describe("cart tests", () => {
  const addProductToCartByName = (productName: string) => {
    cy.get(`#products > li:contains('${productName}')`)
      .find('button:contains("Dodaj do koszyka")')
      .should("be.visible")
      .click()
      .should("contain", "Zobacz w koszyku");
  };

  it("after add products to cart it should stay there when switch between pages", () => {
    const checkCart = () => {
      cy.get('button[aria-label="Otwórz koszyk"').click();
      cy.get("#cart")
        .should("be.visible")
        .find(`li:contains("${productName}")`)
        .should("have.length", 1);
    };

    cy.clearLocalStorage();
    cy.visit("/");
    const productName = "Logitech M330 silent";
    addProductToCartByName(productName);

    ["/ulubione", "/historia"].forEach((page) => {
      cy.visit(page);
      checkCart();
    });
  });

  it("it should be able to remove product from cart", () => {
    cy.clearLocalStorage();
    cy.visit("/");

    const productName = "Logitech M330 silent";
    addProductToCartByName(productName);

    cy.get('button[aria-label="Otwórz koszyk"').click();
    cy.get("#cart")
      .should("be.visible")
      .find(`li:contains("${productName}")`)
      .find('button:contains("usuń z koszyka")')
      .click();

    cy.get("#cart")
      .should("be.visible")
      .find(`li:contains("${productName}")`)
      .should("have.length", 0);
  });

  it("should be able to increase / decrease amount of items of ordered product", () => {
    cy.visit("/");
    cy.clearAllLocalStorage();

    const productName = "Logitech MX Keys for mac";
    const availableItems = 5;
    addProductToCartByName(productName);

    cy.get('button[aria-label="Otwórz koszyk"').click();
    Cypress._.times(availableItems - 1, () => {
      cy.get(`#cart > ul > li:contains("${productName}")`)
        .should("be.visible")
        .find('button:contains("zwiększ")')
        .should("not.be.disabled")
        .click();
    });

    Cypress._.times(availableItems - 1, () => {
      cy.get(`#cart > ul > li:contains("${productName}")`)
        .should("be.visible")
        .find('button:contains("zmniejsz")')
        .should("not.be.disabled")
        .click();
    });
  });

  it("cart should be empty after placing order", () => {
    cy.visit("/");
    cy.clearLocalStorage();

    const productName = "Logitech MX Keys for mac";
    addProductToCartByName(productName);

    cy.get('button[aria-label="Otwórz koszyk"').click();

    cy.get(`#cart > ul > li:contains("${productName}")`).should("be.visible");

    cy.get('#cart button:contains("Złóż zamówienie")')
      .should("be.visible")
      .click();

    cy.get("#cart").should("contain", "Twoj koszyk jest pusty");
  });
});

export {};
