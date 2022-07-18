class ShoppingCartPage {
  private shoppingCartMenu: string;
  private authenticationMenu: string;

  constructor() {
    this.shoppingCartMenu = ".button-container > .button-medium";
    this.authenticationMenu = ".cart_navigation > .button";
  }

  public goToShoppingCartMenu(): void {
    cy.get(this.shoppingCartMenu).click();
  }

  public goToAuthenticationMenu(): void {
    cy.get(this.authenticationMenu).click();
  }
}

export {ShoppingCartPage};
